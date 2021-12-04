import React from 'react';
import Hamburger from './Hamburger';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function GreetingHeader({name}) {
    return (
        <View style = {styles.over}>
            <Hamburger/>
            <View style={styles.container}>
                <Text style={styles.greeting}>Bienvenue</Text>
                <Text style={styles.name}>{name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 24,
        flex: 1, 
    },
    over: {
        flexDirection: "row",
    },
    hamburgerBun: {
        flex: 1, 
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
    },
});
