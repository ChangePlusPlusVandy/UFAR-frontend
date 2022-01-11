import React from 'react';
import {ScrollView, FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { connect } from 'react-redux';



export default connect(mapStateToProps)(function RecentsList(props){    


    const convertDateToString = (date) => {
        let dateString = new Date(date);
        return `${dateString.getMonth()}/${dateString.getDay()}/${dateString.getFullYear()}`;
    }

    console.log("recentslist props", props);

    const renderItem = ({item}) => (
        <View style={styles.listitem}>
            <Text style={styles.timelist}>{ convertDateToString(props.reports[item].report.date)}</Text>
            <Text style={styles.namelist}>{`Joul #${props.reports[item].report.DMM_day}`}</Text>
            <TouchableOpacity style={styles.edit}>
                {props.reports[item].isSubmitted ? 
                <Icon name="check" color = 'green' size = {25} /> :
                <Icon name="close" color = 'green' size = {25} />}
                
            </TouchableOpacity>
        </View>
    );
    
        return (
            <ScrollView style={styles.container} persistentScrollbar={true}>
                <Text style={styles.header}>Récent</Text>
                <FlatList data={ props.reports? Object.keys(props.reports): []}renderItem={renderItem} keyExtractor={item => item.id}/>
            </ScrollView>
        );
});

function mapStateToProps(state) {
    console.log("recentslist mapstatetoprops", state);
    return {
      name: state.reducer.name,
      reports: state.reducer.reports,
    };
}



const styles = StyleSheet.create({
    container: {
        marginTop: 27,
        height: 100,
        marginBottom: 70,
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
