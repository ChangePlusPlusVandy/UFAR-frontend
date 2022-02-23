import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import LeftArrow from './LeftArrow';
import { convertFromYYYYMMDDToDDMMYYYY } from '../../src/utils';

//uses material icons

export default function RecentlyValidated(props) {

    console.log("reports", props.reports);

    const renderItem = ({item}) => (
        <View style={styles.listitem}>
            <Text style={styles.timelist}>{convertFromYYYYMMDDToDDMMYYYY((new Date(item.date)).toISOString().split('T')[0])}</Text>
            <Text style={styles.namelist}>{`Jour #${item.DMM_day}`}</Text>
            <TouchableOpacity style={styles.edit}>
            <Icon name="check" color = '#fff' style = {styles.icon} />
            </TouchableOpacity>
        </View>
    );



    return (
        <View style={styles.container}>
            <View style={styles.flexbox}>
                <LeftArrow setActivePage={props.setActivePage}/>
                <Text style={styles.header}>Récemment Validé</Text>
            </View>
            <FlatList data={props.reports} renderItem={renderItem} keyExtractor={item => item.id}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 540,
        overflow: 'scroll',
    },
    header: {
        // fontFamily: 'Helvetica Neue',
        marginTop: 5,
        marginLeft: 60,
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 25,
        marginBottom: 5,
        alignSelf: "center",
        flex: 11,
    },
    listitem: {
        marginHorizontal: 7,
        marginVertical: 3,
        marginBottom: 3,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",

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
    timelist: {
        color: '#555555',
        flex: 2,
        textAlignVertical: "center",
        marginTop: 5,
    },
    namelist: {
        color: '#000000',
        fontSize: 20,
        flex: 5,
    },
    edit: {
        flex: 0.55,
        backgroundColor: "#7DB415",
        borderRadius: 20,
    },
    icon: {
        size: 20,
        alignSelf: 'center',
    },
    flexbox: {
        flexDirection: "row",
    },
})
