import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import DailyReportForm from '../daily-report-form/DailyReportForm';



export default connect(mapStateToProps)(function RecentsList(props){
    // const [editMode, setEditMode] = React.useState(false);
    // const [reportId, setReportId] = React.useState(null);
    // clear all reports from redux store if it's 12:00 AM
    

    const convertDateToString = (date) => {
        let dateString = new Date(date);
        return `${dateString.getMonth()}/${dateString.getDay()}/${dateString.getFullYear()}`;
    }


    // todo: edit functionality
        //- repopulate the states with information from the specific report
        //- pull up the first page of the report
        //- find a way to distinguish between an edit and a new report (maybe a boolean?) 
        //- depending on the type of the process, the submit button should either be "edit" or "submit"
    const renderItem = ({item}) => (
        <View style={styles.listitem}>
            <Text style={styles.timelist}>{ convertDateToString(props.reports[item].date)}</Text>
            <Text style={styles.namelist}>{`Joul #${props.reports[item].DMM_day}`}</Text>
            <TouchableOpacity style={styles.edit} onPress={() => {
                // props.setEditMode(true);
                // props.setActivePage(0);
                // props.setReportId(item);
                // console.log("The edit button has been clicked")
            }}>
                <Icon name="edit" color = '#000000' size = {25} />
            </TouchableOpacity>
        </View>
    );
    
    // if (editMode) {
    //     return (
    //         <DailyReportForm activePage={0} editMode={editMode} reportId={reportId} />
    //     );
    // } else {

        return (
            <View style={styles.container}>
                <Text style={styles.header}>Récent</Text>
                <FlatList data={ props.reports? Object.keys(props.reports): []}renderItem={renderItem} keyExtractor={item => item.id}/>
            </View>
        );
    // }
});

function mapStateToProps(state) {
    return {
      name: state.reducer.name,
      reports: state.reducer.reports,
    };
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
