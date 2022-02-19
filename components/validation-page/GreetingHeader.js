import React from 'react';
import Hamburger from './Hamburger';
import {StyleSheet, Text, View} from 'react-native';

export default function GreetingHeader(props) {
    return (
        <View style = {styles.over}>
            <Hamburger navigation={props.navigation} setActivePage={props.setActivePage}/>
            <View style={styles.container}>
                <Text style={styles.greeting}>Bienvenue</Text>
                <Text style={styles.name}>{props.name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 24,
        flex: 1, 
    },
    over: {
        flexDirection: "row",
        alignItems: 'center',
    },
    hamburgerBun: {
        flex: 1, 
    },
    greeting: {
        textAlign: 'right',
        // fontFamily: 'Helvetica Neue',
        fontSize: 20,
        lineHeight: 24,
        color: '#FFFFFF',
    },
    name: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 32,
        color: '#fff',
    },
});
