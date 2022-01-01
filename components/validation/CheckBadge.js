import React from 'react';
import {StyleSheet , View,  TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';


export default function CheckBadge () {
    const onPress = () => {
        // Do something
        return;
    }

    return (
        <View style={styles.flexbox}>
            <TouchableOpacity onPress={onPress} style={styles.checkbadge}>
                <Icon name="check" color = '#FFFFFF' size = {25} iconStyle = {styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    checkbadge: {
        height: 35,
        width: 35,
        backgroundColor: '#79D462',
        borderRadius: 27,
        alignContent: "center",
        marginLeft: 20,
        marginBottom: 10,

        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowRadius: 5,
        shadowOpacity: 0.2,
    },
    icon:{
        marginTop: 5,
        marginLeft: 3,
    },
    flexbox:{
        alignContent: "center",
        flex: 1,
    },
})
