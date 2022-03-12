import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function RegistrationButton(props) {
    // todo: add a link to the login page
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} 

            // onPress={() => 
                // call function to reset user password (also displayes successfully or error message)
                //props.navigation.navigate('Login')}
            
            >
                <Icon name='arrow-right' type='feather' color='white' size={50}/>
            </TouchableOpacity>
            <Text 
                style={{...styles.text, ...styles.link}}
                onPress={() =>
                    props.navigation.navigate('Login')
                }
            >Login, Instead</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        top: 40,
    },
    button: {
        backgroundColor: '#EC1C24',
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
        color: '#EC1C24',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 13,
        lineHeight: 15,
    },

    link: {
        textDecorationLine: 'underline',
    }
});
