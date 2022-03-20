import React from 'react';
import UfarApp from './src/UfarApp';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createNetworkMiddleware } from 'react-native-offline';
import { createReducer as createNetworkReducer } from 'react-native-offline';
import { ReduxNetworkProvider } from 'react-native-offline';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import  AsyncStorage from '@react-native-async-storage/async-storage';
import { offlineActionTypes } from 'react-native-offline';
import { MenuProvider } from 'react-native-popup-menu';
import { DEV_DOMAIN } from "@env" 

// authorization 
import {AuthProvider} from './src/context/AuthContext';
import {AxiosProvider} from './src/context/AxiosContext';


import { addReport, getReports, validateReport } from './src/actions.js';
import { comparisonFn } from './src/utils.js';


const actions = {
    addReport,
    getReports,
    validateReport
};

// @credit: https://www.npmjs.com/package/react-native-offline#offline-queue
const networkTransform = createTransform(
  (inboundState, key) => {
    const actionQueue = [];

    inboundState.actionQueue.forEach(action => {
      if (typeof action === 'function') {
        actionQueue.push({
          function: action.meta.name,
          args: action.meta.args,
        });
      } else if (typeof action === 'object') {
        actionQueue.push(action);
      }
    });
    return {
      ...inboundState,
      actionQueue,
    };
  },
  (outboundState, key) => {
    const actionQueue = [];

    outboundState.actionQueue.forEach(action => {
      if (action.function) {
        const actionFunction = actions[action.function];
        actionQueue.push(actionFunction(...action.args));
      } else {
        actionQueue.push(action);
      }
    });

    return { ...outboundState, actionQueue };
  },
  // The 'network' key may change depending on what you
  // named your network reducer.
  { whitelist: ['network'] },
);


const initialState = {
  name: 'Jean Deport', // todo: get this from the server
  reports: {}, // holds report objects for the day
  validationReports: {}, // holds report objects for the day
};
  
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [networkTransform],
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_REPORT':
      // adds or updates the report in the state
      return { ...state, reports: { ...state.reports, [action.id]: {report: action.report, isSubmitted: action.isSubmitted} } };

    // validation cases
    case 'ADD_USER_REPORTS':
      if (action.reports){
        return { ...state, reports: {...action.reports} };
      } else {
        return {...state};
      }
      
    case 'SET_NAME':
      return { ...state, name: action.name }

    case offlineActionTypes.FETCH_OFFLINE_MODE:
      // todo: better way not to include literals
      if (action.meta.name === 'addReport' || action.meta.name === 'saveEditReport') {
        var report = action.meta.args[0];
        console.log("action meta args", action.meta.args);
        var id = action.meta.args[2];
        return { ...state, reports: { ...state.reports, [id]: {report: report, isSbumitted: false} } };
      }

    // validation cases
    case 'ADD_VALIDATION_REPORTS':
      if (action.reports){
        return { ...state, validationReports: {...action.reports} }
      } else {
        return {...state};
      }


    case 'MARK_VALIDATED_REPORT':
      // updated reports
      return { ...state, validationReports: {...state.validationReports, [action.id]: { report: {...state.validationReports[action.id].report, ...action.report, "is_validated": true}, isSbumitted: false } } };

    case 'MARK_VALIDATED_REPORT_SUBMITTED':
      return { ...state, validationReports: {...state.validationReports, [action.id]: {report: action.report, isSubmitted: action.isSubmitted} } };

  } 

  return state;
};

const rootReducer = combineReducers({
  reducer,
  network: createNetworkReducer(comparisonFn),
});

const networkMiddleware = createNetworkMiddleware(
  {
    queueReleaseThrottle: 200,
  },
);

// persist reducer
const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, applyMiddleware(networkMiddleware, thunk, logger));
const persistor = persistStore(store);

console.log("dEv domain", DEV_DOMAIN);

export default function App() {
  // todo: change the ping interval to a more reasonable value
  return (
    <AuthProvider>
      <AxiosProvider>
        <MenuProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}> 
              <ReduxNetworkProvider pingInterval={3000} shouldPing={true} pingServerUrl={DEV_DOMAIN}>
                <UfarApp />
              </ReduxNetworkProvider>
            </PersistGate> 
          </Provider>
        </MenuProvider>
      </AxiosProvider>
    </AuthProvider>
  );
}
