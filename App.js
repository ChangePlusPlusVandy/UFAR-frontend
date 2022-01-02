import React from 'react';
import UfarApp from './src/UfarApp';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as network } from 'react-native-offline';
import { ReduxNetworkProvider } from 'react-native-offline';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import  AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  name: 'Jean Deport', // todo: get this from the server
  reports: [], // holds report objects for the day
  // todo: add more state for unchanging data - to be done later
};
  

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REPORT':
      return { reports: [...state.reports, action.report]}
    case 'SET_NAME':
      return { name: action.name }
  } 
  return state;
  
};

const rootReducer = combineReducers({
  reducer,
  network,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// persist reducer
const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk, logger);

const store = createStore(pReducer, middleware);
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