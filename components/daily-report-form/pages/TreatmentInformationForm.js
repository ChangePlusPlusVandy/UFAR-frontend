import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function TreatmentInformationForm() {
    return (
        <View>
            <Text style={styles.header}>Treatment Information</Text>
            {/* TODO: input fields */}
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
})
