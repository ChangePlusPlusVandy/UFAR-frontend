import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

export default function DashboardSummary() {
    const onPress = () => {
        // Do something
        return;
    }

    return (
        <View style={[styles.container, styles.shadowbox]}>
            <Text style={styles.title}>Dashboard Summary</Text>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Icon name = "east" color = '#FFFFFF' size = {44} iconStyle = {styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 29,
        marginHorizontal: 10,
        height: 286,
        borderRadius: 11,
        backgroundColor: "white",
        alignItems: 'center',
    },
    shadowbox: {
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
    title: {
        // fontFamily: 'Avenir',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: 40,
        marginTop: 8,
    },
    button: {
        position: 'absolute',
        bottom: -27,
        alignSelf: 'center',

        height: 54,
        width: 54,
        backgroundColor: '#EC1C24',
        borderRadius: 27,
    },
    icon:{
        marginTop: 5,
        marginLeft: 2,
    },
})
