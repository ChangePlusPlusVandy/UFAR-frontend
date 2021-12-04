import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import DailyReportForm from './components/daily-report-form/DailyReportForm';

export default function App() {
  return (
    <View style={styles.container}>
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
});
