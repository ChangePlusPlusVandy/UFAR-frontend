import React from 'react';
import {StyleSheet , View,  TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';


export default function LeftArrow (props) {

    return (
        <View style={styles.flexbox}>
            <TouchableOpacity onPress={() => props.setActivePage(0)} style={styles.checkbadge}>
                <Icon name="chevron-thin-left" color = '#FFFFFF' size = {25} iconStyle = {styles.icon} type="entypo" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    checkbadge: {
        height: 35,
        width: 35,
        backgroundColor: '#76B5C5',
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
        marginTop: 4,
    },
    flexbox:{
        alignContent: "center",
        flex: 1,
    },
})
