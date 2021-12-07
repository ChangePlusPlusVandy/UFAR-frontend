import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function Denumber3Form() {
    return (
        <View>
            <Text style={styles.header}>Denumber</Text>
            <View style={styles.inputContainer}>
                <Text style={{...styles.inputLabel, fontSize: 19, lineHeight: 22}} >Households</Text>
                <Text style={styles.inputLabel}>Number of households visited</Text>
                <TextInput style={styles.inputField} />
                <Text style={styles.inputLabel}>Total number of households treated</Text>
                <TextInput style={styles.inputField} />
                <Text style={styles.inputLabel}>Greographical coverage of the households</Text>
                <TextInput style={styles.inputField} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 18,
        alignSelf: 'center',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 23,
        lineHeight: 28,
        color: 'white',
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
    },
})
