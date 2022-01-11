import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import ArrowBadge from './ArrowBadge';
//uses material icons

const DATA = [
    {
        id: "bd7acea-c1b1-46c2-aed5-3ad53b28ba",
        date: "04/12",
        dayNumber: "Jour 1",
    },
    {
        id: "3ac6afc-c605-48d3-a4f8-fbd91aa7f63",
        date: "05/12",
        dayNumber: "Jour 2",
    },
    {
        id: "5694a0f-3da1-471f-bd6-145571e29d72",
        date: "06/12",
        dayNumber: "Jour 3",
    },
    {
        id: "3ac68afc-c05-48d3-a4f8-fbd1aa97f63",
        date: "07/12",
        dayNumber: "Jour 4",
    },
    {
        id: "5869a0f-3da1-471f-bd96-145571e2d72",
        date: "08/12",
        dayNumber: "Jour 5",
    },
    {
        id: "bd7abea-c1b1-46c2-aed5-3a53abb28ba",
        date: "09/12",
        dayNumber: "Jour 6",
    },
    {
        id: "3ac68fc-c605-48d3-a4f8-fbd91a97f63",
        date: "10/12",
        dayNumber: "Jour 7",
    },
    {
        id: "5894a0f-3da1-471f-bd96-14551e29d72",
        date: "11/12",
        dayNumber: "Jour 8",
    },
    {
        id: "3ac68afc-c605-8d-a4f8-fbd91aa97f63",
        date: "12/12",
        dayNumber: "Jour 9",
    },
    {
        id: "58694a0f-3d1-471f-bd6-145571e29d72",
        date: "13/12",
        dayNumber: "Jour 10",
    },
    {
        id: "bd7acbea-c1b1-46c2-ae5-3ad3abb28ba",
        date: "14/12",
        dayNumber: "Jour 11",
    },
    {
        id: "3ac6afc-c605-48d-a4f8-fbd91aa97f63",
        date: "15/12",
        dayNumber: "Jour 12",
    },
    {
        id: "58694a0f-3a1-471f-bd96-14571e29d72",
        date: "16/12",
        dayNumber: "Jour 13",
    },
    {
        id: "3ac68afc-c65-48d3-a4f8-fbd91aa97f63",
        date: "17/12",
        dayNumber: "Jour 14",
    },
    {
        id: "58694af-3da1-471f-bd96-145571e29d72",
        date: "18/12",
        dayNumber: "Jour 15",
    },
];

export default function ToBeValidated(props) {
    const renderItem = ({item}) => (
        <View style={styles.listitem}>
            <Text style={styles.timelist}>{item.date}</Text>
            <Text style={styles.namelist}>{item.dayNumber}</Text>
            <TouchableOpacity style={styles.edit}>
                <Icon name="edit" color = '#000000' size = {25} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.flexbox}>
                <ArrowBadge setActivePage={props.setActivePage} />
                <Text style={styles.header}>À Valider</Text>
            </View>
            <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/>
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
        marginLeft: 110,
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
        flex: 1,
    },
    flexbox: {
        flexDirection: "row",
    },
})
