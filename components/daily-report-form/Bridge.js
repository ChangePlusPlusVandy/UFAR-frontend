import React from 'react';
import DailyReportForm from './DailyReportForm';
import NewReportButton from './NewReportButtom';
import {Platform, Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';


export default function Bridge(){
    const [landingPage, setLandingPage] = React.useState(true);

    // Renders the new report button and the daily report form
    // Depending on state

    return(
        <View style={landingPage? {...styles.container, ...styles.containerInactive}: styles.container}>
            {    landingPage ? 
                <NewReportButton  setLandingPage={setLandingPage}/> : 
                <DailyReportForm setLandingPage={setLandingPage} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        position: 'absolute',
        left: 0,
        right: 0,
        top: Platform.OS === 'android' ? StatusBar.currentHeight : 45,
        bottom: 0,
        backgroundColor: '#EC1C24',
        borderTopLeftRadius: 11,
        borderTopRightRadius: 11,
        
        
        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 10,
        shadowOpacity: 0.3,
    },

    containerInactive: {
        top: null,
        height: 67,
        justifyContent: 'center',
    },
})