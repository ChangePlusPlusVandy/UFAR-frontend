import React from 'react';
import {Platform, Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';


export default function NewReportButton(props){
    
    // when clicked, it resets the active page to render the daily report form 

    return(
        <>
            <Pressable onPress={() => props.setLandingPage(false)} style={styles.newReportPressable} >
                <Text style={styles.newReportText}>New Report</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({

    newReportPressable: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },

    newReportText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 23,
        lineHeight: 28,
    },
})