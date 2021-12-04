import React from 'react';
import {StyleSheet , TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';


export default function Hamburger () {
    const onPress = () => {
        // Do something
        return;
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.hamburger}>
            <Icon name="menu" color = '#FFFFFF' size = {44} iconStyle = {styles.icon} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    hamburger: {
        height: 54,
        width: 54,
        backgroundColor: '#EC1C24',
        borderRadius: 27,
        alignContent: "center",
        marginLeft: 15,
        marginTop: 30,

        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 5,
        shadowOpacity: 0.3,
    },
    icon:{
        marginTop: 5,
        marginLeft: 2,
    },
})
