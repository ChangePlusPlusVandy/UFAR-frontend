import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

export default function BackButton({setActivePage}) {
    const decremenetActivePage = () => setActivePage((prev) => prev - 1);

    return (
        <View style={styles.container}>
            <Pressable onPress={decremenetActivePage} style={styles.button}>
                <Icon name='arrow-left' type='feather' color='white' size={45}/>
            </Pressable>
            <Text style={styles.text}>Back</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#CCCDCF',
        height: 54,
        width: 54,
        borderRadius: 27,
        alignContent: 'center',
        justifyContent: 'center'
    },
    text: {
        paddingVertical: 3,
        color: 'white',
        fontFamily: 'Avenir LT 55 Roman',
        fontSize: 13,
        lineHeight: 15,
    }
});
