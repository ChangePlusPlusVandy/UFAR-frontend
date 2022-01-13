import React from 'react';
import {Pressable, View, StyleSheet} from 'react-native';

export default function CrossIcon (props) {
    
    return (
        <Pressable onPress={() => props.setLandingPage(true)} style={props.activePage !== null ? styles.container : {...styles.container, ...styles.containerInactive}} >
            <View style={{...styles.line, transform: [{rotate: '45deg'}], top: 2}}/>
            <View style={{...styles.line, transform: [{rotate: '-45deg'}], top: -2}}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 20,
        left: 20,
        height: 20,
        width: 20,
        justifyContent: 'center',
        position: 'absolute',
    },
    containerInactive: {
        top: null,
        left: 95,
        transform: [{rotate: '45deg'}],
    },
    line: {
        position: 'relative',
        height: 4,
        backgroundColor: 'white',
        borderRadius: 4,
    }
});
