import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet , View} from 'react-native';
import GreetingHeader from '../GreetingHeader';
import TaskList from '../TaskList';


export default function ToBeValidated () {
    return (
        <View>
            <StatusBar style="auto" />
            <GreetingHeader name = "Jean DuPont"/>
            <TaskList />
        </View>
    );
}

const styles = StyleSheet.create({
    
})