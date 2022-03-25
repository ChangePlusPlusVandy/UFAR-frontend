import React from 'react';

// import { StatusBar } from 'expo-status-bar';
import DailyReportForm from './DailyReportForm';
import NewReportButton from './NewReportButtom';
import ResetUserPassword from '../validation-page/pages/ResetUserPassword';
import RecentsList from '../nurse-landing-page/RecentsList';
import GreetingHeader from '../nurse-landing-page/GreetingHeader';
import NetworkBar from '../nurse-landing-page/NetworkBar';

import {Platform, Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';


export default function Bridge(props){
    const [bridgeActivePage, setBridgeActivePage] = React.useState(0);

    const pages = [
        <NewReportButton setBridgeActivePage={setBridgeActivePage}/>,
        <DailyReportForm setBridgeActivePage={setBridgeActivePage}/>,
        <View style={styles.container}>
            <ResetUserPassword />
        </View> 
    ];

    return(
        <>  
            <NetworkBar />
            <StatusBar style="auto" />
            <GreetingHeader setBridgeActivePage={setBridgeActivePage} navigation={props.navigation}/>
            {bridgeActivePage != 2 && <RecentsList />}
            {pages[bridgeActivePage]}
        </>
    )
    // return (
    
    // )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})