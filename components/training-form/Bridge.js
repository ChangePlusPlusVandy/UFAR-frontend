import React from 'react';
import TrainingForm from '../../components/training-form/TrainingForm';
import NewReportButton from './NewReportButtom';
import {Platform, Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';


export default function Bridge(){
    const [landingPage, setLandingPage] = React.useState(true);

    return(
        <>
            {    landingPage ? 
                <NewReportButton  setLandingPage={setLandingPage} landingPage={landingPage}/> : 
                <TrainingForm setLandingPage={setLandingPage} />}
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