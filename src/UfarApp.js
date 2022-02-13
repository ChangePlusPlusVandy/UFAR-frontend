import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from "../components/home-page/HomePage";
import NurseApp from './NurseApp';
import AdminApp from './AdminApp';
import Validation from '../components/validation/Pages/Validation';
import Login from '../components/authorization/Login';

export default function UfarApp() {
  return (
    <AppContainer />
  );
}

// navigation stack for the NurseApp
const NurseAppNavigator = createStackNavigator({
  NurseMain: {
    screen: NurseApp,
    navigationOptions: {
      headerShown: false,
    }
  }
}, {
  initialRouteName: 'NurseMain',
  navigationOptions:{
    headerShown: false,
  }
})

// navigation stack for the AdminApp
const AdminAppNaviagtor = createStackNavigator({
  AdminMain: {
    screen: AdminApp,
    navigationOptions: {
      headerShown: false,
    }
  },
  
}, {
  initialRouteName: 'AdminMain',
  navigationOptions:{
    headerShown: false,
  }
})

// Naviation stack for the UfarApp (the main app)
const UfarAppNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      headerShown: false,
      
    }
  },

  Authorization: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    }
  },

  // navigation stack for the Nurse App
  NurseApp: NurseAppNavigator,

  // navigation stack for the Admin app
  AdminApp: AdminAppNaviagtor,
}, 
{
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(UfarAppNavigator);