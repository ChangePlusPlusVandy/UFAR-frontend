import React from 'react';
import { StyleSheet, View } from 'react-native';
import Validation from '../components/validation/Pages/Validation';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default function AdminApp() {
  return (
      <Appcontainer />
  );
}

const AppNavigator = createStackNavigator({
    Validation: {
        screen: Validation,
        navigationOptions: {
            headerShown: false,
        }
    }

    // Dashboards
},
{
    initialRouteName: 'Validation',
});

const Appcontainer = createAppContainer(AppNavigator);



