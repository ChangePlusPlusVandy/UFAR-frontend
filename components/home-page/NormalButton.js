import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const buttonDiameter = Math.round(0.065 * height)

export default function NormalButton(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => 
                // todo: if not authorized, redirect to login page
                props.navigation.navigate('NurseMain')} style={styles.button}>
                {/* INSERT ICON */}
            </TouchableOpacity>
            <Text style={styles.text}>Utilisateur</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#59AECF',
        height: buttonDiameter,
        width: buttonDiameter,
        borderRadius: Math.floor(buttonDiameter/2),
        alignContent: 'center',
        justifyContent: 'center',

        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 10,
        shadowOpacity: 0.3,
    },
    text: {
        paddingVertical: 3,
        color: 'white',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: Math.floor(height*0.016),
        lineHeight: Math.round(height*0.018),
    }
});
