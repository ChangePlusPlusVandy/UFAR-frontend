import React from 'react';
import {Pressable, StyleSheet, View, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');
const buttonDiameter = Math.round(height * 0.072)

export default function ExportButton(props) {
    // todo: add a link to the forgot password page
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} 
                onPress={() =>
                    {
                        props.fetchData();
                    }
                }
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
        alignContent: 'center',
        justifyContent: 'center',

        height: "100%",
        width: "100%",
        borderRadius: 50,

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
        // lineHeight: Math.round(0.018 * height),
    },

    link: {
        textDecorationLine: 'underline',
    }
});
