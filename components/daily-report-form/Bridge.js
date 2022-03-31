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
    const [edit, setEdit] = React.useState(false);
    const [currentReport, setCurrentReport] = React.useState(null);
    const [currentReportId, setCurrentReportId] = React.useState(null);

    const pages = [
        <NewReportButton setBridgeActivePage={setBridgeActivePage}/>,
        <DailyReportForm
            currentReportId={currentReportId}
            setEdit={setEdit}
            edit={edit} 
            setBridgeActivePage={setBridgeActivePage}
            currentReport={currentReport}
        />,
        <View style={styles.container}>
            <ResetUserPassword />
        </View> 
    ];

    return(
        <>  
            <NetworkBar />
            <StatusBar style="auto" />
            <GreetingHeader setBridgeActivePage={setBridgeActivePage} navigation={props.navigation}/>
            {bridgeActivePage != 2 && 
            <RecentsList 
                setCurrentReportId={setCurrentReportId}
                setEdit={setEdit} 
                setCurrentReport={setCurrentReport} 
                setBridgeActivePage={setBridgeActivePage} 
            />}
            {pages[bridgeActivePage]}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})