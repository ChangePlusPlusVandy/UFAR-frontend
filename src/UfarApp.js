import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import NurseApp from './NurseApp';


export default function UfarApp() {
  return (
    <AppContainer />
  );
}

const AppNavigator = createStackNavigator({
  // home page will be the default page

  // home page

  // nurse app
  NurseApp: {
    screen: NurseApp,
    navigationOptions: {
      headerShown: false,
    }
  },

  // admin app

  // initial route  
}, 
{
  initialRouteName: 'NurseApp',
});

const AppContainer = createAppContainer(AppNavigator);