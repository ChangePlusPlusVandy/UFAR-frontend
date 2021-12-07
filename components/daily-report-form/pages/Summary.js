import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Summary() {
    return (
        <View>
            <Text style={styles.header}>Summary</Text>
            <Text style={styles.line}>_________________</Text>
            <View style={styles.marginedView}>
                <Text style={styles.bod}>DMM Day: 1</Text>
                <Text style={styles.bod}>Name: Varun Sangal</Text>
                <Text style={styles.bod}>Province/Region: Kwango</Text>
                <Text style={styles.bod}>Health Zone: Koshibanda</Text>
                <Text style={styles.bod}>Village: Munga</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    marginedView: {
        paddingVertical: 10,
    },
    header: {
        paddingVertical: 5,
        alignSelf: 'center',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 40,
        lineHeight: 50,
        color: 'white',
    },
    line: {
        paddingVertical: 5,
        alignSelf: 'flex-start',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Sans-Serif',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 10,
        color: 'white',
        padding: "10%"
    },
    bod: {
        paddingVertical: 20,
        alignSelf: 'flex-start',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Sans-Serif',
        fontWeight: 'normal',
        fontSize: 25,
        padding: "5%",
        lineHeight: 10,
        color: "white"
    }

})
