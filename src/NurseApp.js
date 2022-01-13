import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import GreetingHeader from '../components/nurse-landing-page/GreetingHeader';
import DashboardSummary from '../components/nurse-landing-page/DashboardSummary';
import DailyReportForm from '../components/daily-report-form/DailyReportForm';
import RecentsList from '../components/nurse-landing-page/RecentsList';
import NetworkBar from '../components/nurse-landing-page/NetworkBar';

export default function NurseApp(props){
  return (
    <View style={styles.container}>
        <NetworkBar />
        <StatusBar style="auto" />
        <GreetingHeader navigation={props.navigation}/>
        {/* <DashboardSummary /> */}
        <RecentsList/>
        <DailyReportForm/>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
