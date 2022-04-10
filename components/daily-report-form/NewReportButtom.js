import React from 'react';
import {Platform, Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import { Icon } from 'react-native-elements';


export default function NewReportButton(props){

    return(
        <View style={{...styles.container, ...styles.containerInactive}}>
            <Pressable onPress={() => props.setBridgeActivePage(1)} style={styles.newReportPressable} >
                <Icon solid={true} name='plus' type='entypo' color='white' size={30}/>
                <Text style={styles.newReportText}>New Report</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    newReportPressable: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },

    newReportText: {
        color: 'white',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 23,
        lineHeight: 28,
    },

    container: {
        flex: 1,
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        top: Platform.OS === 'android' ? StatusBar.currentHeight : 45,
        bottom: 0,
        backgroundColor: '#cb0d00',
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