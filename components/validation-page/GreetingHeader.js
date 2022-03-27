import React, {useContext} from 'react';
import Hamburger from './Hamburger';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import { AuthContext } from '../../src/context/AuthContext';

const {height, width} = Dimensions.get('window');

export default function GreetingHeader(props) {

    const authContext = useContext(AuthContext);

    return (
        <View style = {styles.over}>
            <Hamburger navigation={props.navigation} setActivePage={props.setActivePage}/>
            <View style={styles.container}>
                <Text style={styles.greeting}>Bienvenue</Text>
                <Text style={styles.name}>{authContext.authState.user?.name || ""}</Text>
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
        fontSize: Math.floor(height*0.024),
        lineHeight: Math.round(height*0.029),
        color: '#FFFFFF',
    },
    name: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: Math.floor(height*0.036),
        lineHeight: Math.round(height*0.038),
        color: '#fff',
    },
});
