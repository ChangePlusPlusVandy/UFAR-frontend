import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native';

import GreetingHeader from './components/NurseLandingPage/GreetingHeader';
import DashboardSummary from './components/NurseLandingPage/DashboardSummary';
import RecentsList from './components/NurseLandingPage/RecentsList';

export default function App() {
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <GreetingHeader name="Jean Dupont" />
      <DashboardSummary />
      <RecentsList />
    </ScrollView>
  );
}
