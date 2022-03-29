import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import TrainingForm from '../TrainingForm';
import NewTrainingFormButton from './NewTrainingFormButton';
import {Icon} from 'react-native-elements';


export default function TrainingPage(props){
    const [landingPage, setLandingPage] = React.useState(true);

    const DATA = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
        },
      ];

    const renderItem = ({item}) => (
        <View style={styles.listitem}>
            <Text style={styles.timelist}>{`4/4/4`}</Text>
            <Text style={styles.namelist}>{`Training Form #3`}</Text>
            <TouchableOpacity style={styles.edit}>
                <Icon name="eye" color = 'green' size = {20} type="entypo" />
            </TouchableOpacity>
        </View>
    );

    return (
        <>
            {landingPage ?
            <View style={styles.container}>
                <ScrollView style={styles.list} persistentScrollbar={true}>
                    <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/>
                </ScrollView> 
                <NewTrainingFormButton setLandingPage={setLandingPage}/>
            </View>: 
            <TrainingForm/>}
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'scroll',
        flex: 1,
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center',

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
        // backgroundColor:'grey',
    },
    list:{
        marginTop: 27,
        height: 100,
        marginBottom: 70,
        width: '100%',
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

    flexbox: {
        flexDirection: "row",
    },
})