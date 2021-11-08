import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function GreetingHeader({name}) {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Welcome</Text>
            <Text style={styles.name}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        paddingHorizontal: 24,
    },
    greeting: {
        textAlign: 'right',
        // fontFamily: 'Helvetica Neue',
        fontSize: 20,
        lineHeight: 24,
        color: '#707070',
    },
    name: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 32,
    }
});
