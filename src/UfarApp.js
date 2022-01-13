import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from "../components/home-page/HomePage";
import NurseApp from './NurseApp';
import AdminApp from './AdminApp';


export default function UfarApp() {
  return (
    <AppContainer />
  );
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      headerShown: false,
    }
  },
  NurseApp: {
    screen: NurseApp,
    navigationOptions: {
      headerShown: false,
    }
  },
  AdminApp: {
    screen: AdminApp,
    navigationOptions: {
      headerShown: false,
    }
  },
}, 
{
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(AppNavigator);