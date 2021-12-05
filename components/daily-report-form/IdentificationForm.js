import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function IdentificationForm() {
    return (
        <View>
            <Text style={styles.header}>Identification</Text>
            <View style={styles.inputContainer}>
                <View style={{flexDirection: 'row'}}>
                    <TextInput style={{...styles.inputField, flex: 1, marginRight: 5.5}} placeholder="DMM Day" />
                    <TextInput style={{...styles.inputField, flex: 2, marginLeft: 5.5}} placeholder="Name of Registered Nurse" />
                </View>
                <TextInput style={styles.inputField} placeholder="Name of Province/Region" />
                <TextInput style={styles.inputField} placeholder="Health Zone Name" />
                <TextInput style={styles.inputField} placeholder="Aire de santé" />
                <TextInput style={styles.inputField} placeholder="Village/Community Name" />
                <TextInput style={styles.inputField} placeholder="GPS Location (autofill)" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 18,
        alignSelf: 'center',
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 23,
        lineHeight: 28,
        color: 'white',
    },
    inputContainer: {
        marginHorizontal: 34,
    },
    inputField: {
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 17,
        backgroundColor: 'white',
        fontFamily: 'Avenir LT 55 Roman',
        fontSize: 11,
        lineHeight: 13,
    }
})
