import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
];

export default function RecentsList() {
    const renderItem = ({item}) => (
        <View style={styles.itemName}>
            <Text>{item.title}</Text>
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
        fontSize: 20,
        lineHeight: 25,
        left: 39,
    },
    itemName: {
        borderWidth: 1,
        marginHorizontal: 7,
        marginVertical: 2,
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
})
