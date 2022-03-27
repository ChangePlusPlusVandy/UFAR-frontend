import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

export default function CheckBox({isChecked, style, onPress, fillColor='#8AC566', disabled}) {
    const handlePress = () => {
        if (disabled) return;
        onPress();
    }

    return (
        <Pressable style={{...styles.checkBox, ...style}} onPress={handlePress}>
            {isChecked && <View style={{...styles.checkBoxFill, backgroundColor: fillColor}} />}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    checkBox: {
        borderColor: '#CBCBCB',
        borderWidth: 2,
        alignSelf: 'center',
        height: 20,
        width: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
    },
    checkBoxFill: {
        height: 14,
        width: 14,
        borderRadius: 7,
    },
})
