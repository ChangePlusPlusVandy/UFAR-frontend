import { AuthContext } from '../../src/context/AuthContext';
import React, {useContext} from 'react';
import Hamburger from './Hamburger';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

export default function SettingsPage(props){

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nom</Text>
            <Text style={styles.input}>{authContext.authState.user?.name || ""}</Text>
            <Text style={styles.title}>Rôle</Text>
            <Text style={styles.input}>{authContext.authState.user?.role || ""}</Text>
            <Text style={styles.title}>Zone de Santé</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFF",
    },
    input: {
        height: 50,
        width: 300,
        borderColor: 'gray',
        borderWidth: 0.5,
        margin: 10,
        padding: 10,
        borderRadius: 20,
    },
    error:{
        color: 'red',
        fontSize: 12,
        fontStyle: 'italic',
    },
    success:{
        color: 'green',
        fontSize: 12,
        fontStyle: 'italic',
    },
    title: {
        fontWeight: 'bold',
        color: '#EC1C24',
        fontSize: 18,
        alignSelf: 'center',
    },
});