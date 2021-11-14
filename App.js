import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ScrollView } from 'react-native';

import Hamburger from './Components/Hamburger';
import GreetingHeader from './Components/GreetingHeader';
import DashboardSummary from './Components/DashboardSummary';
import RecentsList from './Components/RecentsList';

export default function App() {
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <GreetingHeader name="John Doe" />
      <DashboardSummary/>
      <RecentsList />
    </ScrollView>
  );
}
