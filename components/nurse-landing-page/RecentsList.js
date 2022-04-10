import React, {useEffect} from 'react';
import {ScrollView, FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import FetchButton from '../validation-page/FetchButton';
import { convertFromYYYYMMDDToDDMMYYYY } from '../../src/utils';


export default connect(mapStateToProps)(function RecentsList(props){ 
    const [reports, setReports] = React.useState(props.reports? Object.keys(props.reports): []);   

    const renderItem = ({item, index}) => (
        <View style={(index == (reports.length - 1))? {...styles.listitem, ...styles.bottom}: (index == 0)? {...styles.top, ...styles.listitem}: {...styles.listitem} }>
            <Text style={styles.timelist}>{convertFromYYYYMMDDToDDMMYYYY((new Date(props.reports[item].report.date)).toISOString().split('T')[0])}</Text>
            <Text style={styles.namelist}>{`Joul #${props.reports[item].report.DMM_day}`}</Text>
            <TouchableOpacity style={styles.edit}>
                {props.reports[item].isSubmitted ? 
                <Icon name="check" color = 'green' size = {25} /> :
                <Icon name="time-slot" color = '#9b870c' size = {20} type="entypo" />}  
            </TouchableOpacity>
            {props.reports[item].isSubmitted && <TouchableOpacity style={styles.edit}
                onPress={() => {
                    props.setEdit(true);
                    props.setCurrentReport(props.reports[item].report);
                    props.setCurrentReportId(item)
                    props.setBridgeActivePage(1);
                }}
            >
                <Icon name="edit" color = 'green' size = {25} />
            </TouchableOpacity>}
        </View>
    );
    
    return (
        <ScrollView style={styles.container} persistentScrollbar={true}>
            <Text style={styles.header}>Récent</Text>
            <View style={styles.fetch}>
                <FetchButton admin={false}/>
            </View>
            <FlatList data={reports} renderItem={renderItem} keyExtractor={item => item.id}/>
        </ScrollView>
    );
});

function mapStateToProps(state) {
    return {
      name: state.reducer.name,
      reports: state.reducer.reports,
    };
}



const styles = StyleSheet.create({
    container: {
        marginTop: "5%",
        height: "100%",
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
        marginHorizontal: "2%",
        marginVertical: '1.2%',
        paddingHorizontal: '2.5%',
        paddingVertical: '2.5%',
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
    bottom: {
        marginBottom: '5%',
    },
    top: {
        marginTop: '2%',
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
        flexDirection: 'row',
    },
    icon:{
        marginHorizontal: 5,
    }, 
    fetch: {
        margin: 10,
    },
})
