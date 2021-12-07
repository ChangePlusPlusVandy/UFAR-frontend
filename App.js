import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import DailyReportForm from './components/daily-report-form/DailyReportForm';

export default function App() {
  return (
    <View style={[styles.container, styles.shadowbox]}>
      <DailyReportForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shadowbox: {
    /* Android Drop Shadow Styling */
    elevation: 10,
    
    /* iOS Drop Shadow Styling */
    shadowColor: "black",
    shadowOffset: {
        width: 10,
        height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.3,
  },
});
