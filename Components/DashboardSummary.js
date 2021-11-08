import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

function Button({onPress}) {
    return (
        <Pressable onPress={onPress} style={styles.button}>
        </Pressable>
    )
}

export default function DashboardSummary() {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Dashboard Summary</Text>
            </View>
            <Button />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 29,
        marginHorizontal: 7,
        height: 286,
        borderRadius: 11,

        /* temp placeholder styling for drop shadow */
        borderColor: 'black',
        borderWidth: 1,

        /* Android Drop Shadow Styling */
        // elevation: 10,
        
        /* iOS Drop Shadow Styling */
        // shadowColor: '#0000004B',
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowRadius: 10,

        alignItems: 'center',
    },
    title: {
        // fontFamily: 'Avenir',
        fontWeight: 'bold',
        fontSize: 29,
        lineHeight: 40,
    },
    button: {
        position: 'absolute',
        bottom: -27,
        alignSelf: 'center',

        height: 54,
        width: 54,
        backgroundColor: '#EC1C24',
        borderRadius: 27,
    }
})
