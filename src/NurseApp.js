import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import GreetingHeader from '../components/nurse-landing-page/GreetingHeader';
import DashboardSummary from '../components/nurse-landing-page/DashboardSummary';
import DailyReportForm from '../components/daily-report-form/DailyReportForm';
import RecentsList from '../components/nurse-landing-page/RecentsList';
import NetworkBar from '../components/nurse-landing-page/NetworkBar';

export default function NurseApp(props){
  const [activePage, setActivePage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [reportId, setReportId] = useState(null);
  return (
    <View style={styles.container}>
        <NetworkBar />
        <ScrollView>
            <StatusBar style="auto" />
            <GreetingHeader />
            <DashboardSummary />
            <RecentsList 
              activePage={activePage} 
              setActivePage={setActivePage}
              editMode={editMode}
              setEditMode={setEditMode}
              reportId={reportId}
              setReportId={setReportId}
              />
        </ScrollView>
        <DailyReportForm 
          activePage={activePage} 
          setActivePage={setActivePage}
          editMode={editMode}
          setEditMode={setEditMode}
          reportId={reportId}
          setReportId={setReportId}
        />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
