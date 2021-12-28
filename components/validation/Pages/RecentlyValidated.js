import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet , View} from 'react-native';
import GreetingHeader from './GreetingHeader';
import RecentsList from './RecentsList';


export default function ToBeValidated () {
    return (
        <View>
            <StatusBar style="auto" />
            <GreetingHeader name = "Jean DuPont"/>
            <RecentsList />
        </View>
    );
}

const styles = StyleSheet.create({
    
})