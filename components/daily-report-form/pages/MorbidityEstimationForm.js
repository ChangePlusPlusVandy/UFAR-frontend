import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function MorbidityEstimationForm() {
    return (
        <View>
            <Text style={styles.header}>Estimation of Morbidity Cases</Text>
            {/* TODO: input fields */}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 18,
        alignSelf: 'center',
        textAlign: 'center',
        maxWidth: 178,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 23,
        lineHeight: 28,
        color: 'white'
    },
    inputContainer: {
        marginHorizontal: 34,
    },
})
