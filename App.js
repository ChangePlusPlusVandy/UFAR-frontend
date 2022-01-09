import React from 'react';
import UfarApp from './src/UfarApp';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as network } from 'react-native-offline';
import { ReduxNetworkProvider } from 'react-native-offline';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import  AsyncStorage from '@react-native-async-storage/async-storage';

// todo: new try
import { addReport } from './src/actions.js';

const actions = {
    addReport,
};

// Transform how the persistor reads the network state
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
      return { reports: { ...state.reports, [action.id]: action.report } };
    case 'SET_NAME':
      return { name: action.name }
    case 'REMOVE_REPORT':
      return { reports: () => {
        const newReports = { ...state.reports };
        delete newReports[action.id];
        return newReports;
      }}
  } 
  return state;
  
};

const rootReducer = combineReducers({
  reducer,
  network,
});

// persist reducer
const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <ReduxNetworkProvider>
          <UfarApp />
        </ReduxNetworkProvider>
      </PersistGate> 
    </Provider>
  );
}