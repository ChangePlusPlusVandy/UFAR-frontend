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


import { addReport } from './src/actions.js';
import { comparisonFn } from './src/utils.js';

const actions = {
    addReport,
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
  // todo: add more state for unchanging data - to be done later
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
      return { reports: { ...state.reports, [action.id]: {report: action.report, isSubmitted: true} } };
      
    case 'SET_NAME':
      return { name: action.name }

    case 'REMOVE_REPORT':
        const newReports = { ...state.reports };
        delete newReports[action.id];
      return {reports: newReports};

    case offlineActionTypes.FETCH_OFFLINE_MODE:
      // todo: better way not to include literals
      if (action.meta.name === 'addReport'){
        var report = action.meta.args[0];
        var id = action.meta.args[1];
        return { reports: { ...state.reports, [id]: {report: report, isSbumitted: false} } };
      }
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


export default function App() {
  // todo: change the ping interval to a more reasonable value
  return (
    <MenuProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> 
          <ReduxNetworkProvider pingInterval={3000} shouldPing={true} pingServerUrl='http://10.76.170.134:3000'>
            <UfarApp />
          </ReduxNetworkProvider>
        </PersistGate> 
      </Provider>
    </MenuProvider>
  );
}
