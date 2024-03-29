import React from 'react';
import {StyleSheet , View,  TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';


export default function RightArrow (props) {
    return (
        <View style={styles.flexbox}>
            <TouchableOpacity onPress={() => props.setActivePage(1) } style={styles.arrowbadge}>
                <Icon name="chevron-thin-right" color = '#FFFFFF' size = {25} iconStyle = {styles.icon} type="entypo" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    arrowbadge: {
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
