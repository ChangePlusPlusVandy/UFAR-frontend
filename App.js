import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import GreetingHeader from './components/NurseLandingPage/GreetingHeader';
import DashboardSummary from './components/NurseLandingPage/DashboardSummary';
import DailyReportForm from './components/daily-report-form/DailyReportForm';
import RecentsList from './components/NurseLandingPage/RecentsList';

export default function App() {
  return (
    <View style={styles.container}>
        <ScrollView>
            <StatusBar style="auto" />
            <GreetingHeader name="Jean Dupont" />
            <DashboardSummary />
            <RecentsList />
        </ScrollView>
        <DailyReportForm />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
