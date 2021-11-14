import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

export default function DashboardSummary() {
    const onPress = () => {
        // Do something
        return;
    }

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Dashboard Summary</Text>
            </View>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Icon name = "east" color = '#FFFFFF' size = {44} iconStyle = {styles.icon} />
            </TouchableOpacity>
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
        elevation: 10,
        
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
