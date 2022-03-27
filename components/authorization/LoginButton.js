import React from 'react';
import {Pressable, StyleSheet, Text, View, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');
const buttonDiameter = Math.round(height * 0.072)

export default function LoginButton(props) {
    // todo: add a link to the forgot password page
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} 
                onPress={() =>
                    {
                        props.onLogin();
                    }
                }
            >
                <Icon name='arrow-right' type='feather' color='white' size={50}/>
            </TouchableOpacity>
            <Text style={{...styles.text, ...styles.link}}
                onPress={() =>
                    props.navigation.navigate('Registration')
                }
            >Register, Instead</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        top: '4.7%',
    },
    button: {
        backgroundColor: '#EC1C24',
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
        margin: 10,
        paddingVertical: 3,
        color: '#EC1C24',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 13,
        lineHeight: Math.round(0.018 * height),
    },

    link: {
        textDecorationLine: 'underline',
    }
});
