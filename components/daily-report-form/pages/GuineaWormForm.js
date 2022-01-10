import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function GuineaWormForm(props) {
    return (
        <View>
            <Text style={styles.header}>Estimation Des Cas Des Morbidites</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Ver de guinée</Text>
                <View style={styles.rowContainer}>
                    <TextInput style={styles.inputField} onChange={(e) => props.setNumMenGuineaWorm(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numMenGuineaWorm || '').toString()} placeholder="# des Hommes avec ver de guinée" />
                    <Text style={styles.text}>+</Text>
                    <TextInput style={styles.inputField} onChange={(e) => props.setNumWomenGuineaWorm(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numWomenGuineaWorm || '').toString()} placeholder="# des Femmes avec guinée" />
                    <Text style={styles.text}>=</Text>
                    <TextInput style={styles.inputField} value={props.totalNumGuineaWorm.toString()} placeholder="Total des personnes avec ver de guinée" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 18,
        alignSelf: 'center',
        textAlign: 'center',
        maxWidth: 300,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 28,
        color: 'white',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputContainer: {
        marginHorizontal: 34,
    },
    inputLabel: {
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir-Roman',
        fontSize: 11,
        lineHeight: 13,
        color: 'white',
    },
    inputField: {
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 17,
        backgroundColor: 'white',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 11,
        lineHeight: 13,
        color: 'black',
        width: 95,
        textAlign: 'center',
        
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
    text: {
        color: 'white',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 12,
        lineHeight: 14,
    }
})
