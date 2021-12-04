import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ScrollView } from 'react-native';

import Hamburger from './Components/NurseLandingPage/Hamburger';
import GreetingHeader from './Components/NurseLandingPage/GreetingHeader';
import DashboardSummary from './Components/NurseLandingPage/DashboardSummary';
import RecentsList from './Components/NurseLandingPage/RecentsList';

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
