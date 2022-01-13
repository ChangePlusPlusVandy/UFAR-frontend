import React from 'react';
import DailyReportForm from './DailyReportForm';
import NewReportButton from './NewReportButtom';
import {Platform, Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';


export default function Bridge(){
    const [landingPage, setLandingPage] = React.useState(true);

    return(
        <>
            {    landingPage ? 
                <NewReportButton  setLandingPage={setLandingPage} landingPage={landingPage}/> : 
                <DailyReportForm setLandingPage={setLandingPage} />}
        </>
    )
}

const styles = StyleSheet.create({

})