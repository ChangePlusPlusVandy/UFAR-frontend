import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import GreetingHeader from './components/nurse-landing-page/GreetingHeader';
import DashboardSummary from './components/nurse-landing-page/DashboardSummary';
import DailyReportForm from './components/daily-report-form/DailyReportForm';
import RecentsList from './components/nurse-landing-page/RecentsList';

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
