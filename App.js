import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import ToBeValidated from './components/validation/Pages/ToBeValidated';
import RecentlyValidated from './components/validation/Pages/RecentlyValidated';
//import GreetingHeader from './components/nurse-landing-page/GreetingHeader';
//import DashboardSummary from './components/nurse-landing-page/DashboardSummary';
//import DailyReportForm from './components/daily-report-form/DailyReportForm';
//import RecentsList from './components/nurse-landing-page/RecentsList';

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

  /*
  return (
    <View style = {styles.admin}>
      <RecentlyValidated />
    </View>
  );
  */
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    admin: {
      flex: 1,
      backgroundColor: '#EC1C24',
  },
});
