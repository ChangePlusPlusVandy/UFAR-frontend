import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function ProgressBar({progress}) {
    return (
        <View style={styles.progressBarContainer}>
            <View style={{...styles.progressBarContainer, backgroundColor: '#59AECF', width: `${progress * 100}%`}} />
        </View>
    )
}

const styles = StyleSheet.create({
    progressBarContainer: {
        backgroundColor: 'white',
        height: 14,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,

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
    }
})
