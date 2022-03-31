import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import RightArrow from '../RightArrow';
//uses material icons
import DailyReportForm from '../../daily-report-form/DailyReportForm';
import FetchButton from '../FetchButton';

import { connect } from 'react-redux';
import { convertFromYYYYMMDDToDDMMYYYY } from '../../../src/utils';
import { getReports } from '../../../src/actions.js';

export default connect(mapStateToProps, mapDispatchToProps)(function ToBeValidated(props) {


    const [landingPage, setLandingPage] = React.useState(true);
    const [ currentReport, setCurrentReport ] = React.useState(null);
    const [ currentReportId, setCurrentReportId ] = React.useState(null);

    // Note: the conversion of the date is different from the  validated component bcs this
    // component deals with a report object immidiatly from the backend, which has a different format 
    // for date.
    const renderItem = ({item}) => (
        <View style={styles.listitem}>
            <Text style={styles.timelist}>{convertFromYYYYMMDDToDDMMYYYY(props.validationReports[item].report.date.split('T')[0])}</Text>
            <Text style={styles.namelist}>{`Jour #${props.validationReports[item].report.DMM_day}`}</Text>
            <TouchableOpacity style={styles.validate}>
                <Icon name="edit" color = '#000000' size = {25} 
                    onPress={() => {
                        setCurrentReport(props.validationReports[item].report);
                        setCurrentReportId(item);
                        setLandingPage(false);
                    }}
                />
            </TouchableOpacity>
        </View>
    );

    return landingPage? (
        <View style={styles.container}>
            <View style={styles.flexbox}>
                <RightArrow setActivePage={props.setActivePage} />
                <Text style={styles.header}>À Valider</Text>
                <FetchButton fetchReportsAdmin={true}/>
            </View>
            <FlatList data={props.reportIds} renderItem={renderItem} keyExtractor={id => id}/>
        </View> 
    ) : (
        <DailyReportForm
            setLandingPage={setLandingPage}
            currentReport={currentReport}
            currentReportId={currentReportId}
            validate={true}
        />
    );
});

function mapStateToProps(state) {
    return {
        validationReports: state.reducer.validationReports,
    };
}

function mapDispatchToProps(dispatch){
    return {
        getReports: (healthZoneId, authAxios) => dispatch(getReports(healthZoneId, authAxios)),
    };
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
    header: {
        // fontFamily: 'Helvetica Neue',
        marginTop: 5,
        marginLeft: 100,
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 25,
        marginBottom: 5,
        alignSelf: "center",
        flex: 4,
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
    validate: {
        flex: 1,
    },
    flexbox: {
        flexDirection: "row",
    },
})
