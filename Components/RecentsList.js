import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      timestamp: "10 min",
      name: "Arnold Adams",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      timestamp: "15 min",
      name: "Barry Brown",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      timestamp: "2 hrs",
      name: "Christine Cowan",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      timestamp: "15 hrs",
      name: "Donald Dover",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      timestamp: "3 days",
      name: "Elise Elliot",
    },
];

export default function RecentsList() {
    const renderItem = ({item}) => (
        <View style={styles.timestamp}>
            <Text style={styles.graytext}>{item.timestamp}</Text>
            <Text style={styles.namelist}>{item.name}</Text>
            <TouchableOpacity style={styles.edit}>
                <Icon name="edit" color = '#000000' size = {25} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Recents</Text>
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
    timestamp: {
        borderWidth: 1,
        marginHorizontal: 7,
        marginVertical: 3,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
    },
    graytext: {
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
