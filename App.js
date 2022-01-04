import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import GreetingHeader from './components/nurse-landing-page/GreetingHeader';
import HomePage from './components/home-page/HomePage';
import DashboardSummary from './components/nurse-landing-page/DashboardSummary';
import DailyReportForm from './components/daily-report-form/DailyReportForm';
import RecentsList from './components/nurse-landing-page/RecentsList';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
