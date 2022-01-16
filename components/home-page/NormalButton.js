import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default function NormalButton(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.navigate('NurseMain')} style={styles.button}>
                {/* INSERT ICON */}
            </TouchableOpacity>
            <Text style={styles.text}>Normal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#59AECF',
        height: 54,
        width: 54,
        borderRadius: 27,
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
        fontSize: 13,
        lineHeight: 15,
    }
});
