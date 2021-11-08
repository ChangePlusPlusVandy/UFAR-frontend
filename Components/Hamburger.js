import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

export default function Hamburger () {
    const onPress = () => {
        // Do something
        return;
    }

    return (
        <Pressable onPress={onPress} style={styles.hamburger}>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    hamburger: {
        height: 54,
        width: 54,
        backgroundColor: '#EC1C24',
        borderRadius: 27,
    }
})
