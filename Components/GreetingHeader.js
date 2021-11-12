import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

export default function GreetingHeader({name}) {
    const onPress = () => {
        // Do something
        return;
    }

    return (
        <View style = {styles.over}>
                <TouchableOpacity onPress={onPress} style={styles.hamburger}>
                    <Icon name="menu" color = '#FFFFFF' size = {44} iconStyle = {styles.icon} />
                </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.greeting}>Welcome</Text>
                <Text style={styles.name}>{name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 24,
        flex: 1, 
    },
    over: {
        flexDirection: "row",
    },
    hamburgerBun: {
        flex: 1, 
    },
    greeting: {
        textAlign: 'right',
        // fontFamily: 'Helvetica Neue',
        fontSize: 20,
        lineHeight: 24,
        color: '#707070',
    },
    name: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 32,
    },
    hamburger: {
        height: 54,
        width: 54,
        backgroundColor: '#EC1C24',
        borderRadius: 27,
        alignContent: "center",
        marginLeft: 15,
        marginTop: 30,
    },
    icon:{
        marginTop: 5,
        marginLeft: 2,
    },
});
