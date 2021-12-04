import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import DailyReportForm from './components/daily-report-form/DailyReportForm';

export default function App() {
  const [activePage, setActivePage] = useState(null);  // Identifies currently active page

  return (
    <View style={styles.container}>
      <DailyReportForm activePage={activePage} setActivePage={setActivePage} />
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
