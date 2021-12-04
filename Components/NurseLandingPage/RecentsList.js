import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
//uses material icons

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      date: "04/12",
      dayNumber: "Jour 1",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      date: "05/12",
      dayNumber: "Jour 2",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      date: "06/12",
      dayNumber: "Jour 3",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        date: "07/12",
        dayNumber: "Jour 4",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        date: "08/12",
        dayNumber: "Jour 5",
      },
];

export default function RecentsList() {
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
            <Text style={styles.header}>Récent</Text>
            <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 27,
    },
    header: {
        // fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 25,
        left: 17,
        marginBottom: 5,
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
            width: 10,
            height: 10,
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
})
