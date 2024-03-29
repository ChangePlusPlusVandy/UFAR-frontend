import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ResetUserPasswordButton(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} 
                onPress={() => props.resetUserPassword()}
            >
                <Icon name='arrow-right' type='feather' color='white' size={50}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#cb0d00',
        height: 60,
        width: 60,
        borderRadius: 30,
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
        margin: 10,
        paddingVertical: 3,
        color: '#cb0d00',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 13,
        lineHeight: 15,
    },

    link: {
        textDecorationLine: 'underline',
    }
});
