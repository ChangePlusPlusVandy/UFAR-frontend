import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function ProgressBar({progress}) {
    return (
        <>
            <View style={styles.progressBarBackground} />
            <View style={{...styles.progressBarBackground, backgroundColor: '#59AECF', width: `${progress * 100}%`}} />
        </>
    )
}

const styles = StyleSheet.create({
    progressBarBackground: {
        backgroundColor: 'white',
        height: 14,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
})
