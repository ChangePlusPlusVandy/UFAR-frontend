import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import RightArrow from './RightArrow';
import DailyReportForm from '../daily-report-form/DailyReportForm';

import { connect } from 'react-redux';

export default connect(mapStateToProps)(function ToBeValidated(props) {
    const [landingPage, setLandingPage] = React.useState(true);
    const [ currentReport, setCurrentReport ] = React.useState(null);

    const renderItem = ({item}) => (
        <View style={styles.listitem}>
            <Text style={styles.timelist}>{item.date.substring(0, item.date.indexOf("T"))}</Text>
            <Text style={styles.namelist}>{`Jour #${item.DMM_day}`}</Text>
            <TouchableOpacity style={styles.edit}>
                <Icon name="edit" color = '#000000' size = {25} 
                    onPress={() => {
                        setCurrentReport(item);
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
            </View>
            <FlatList data={props.validationReports} renderItem={renderItem} keyExtractor={item => item.id}/>
        </View> 
    ) : (
        <DailyReportForm
            setLandingPage={setLandingPage}
            currentReport={currentReport}
            edit={true}
        />
    );
});

function mapStateToProps(state) {
    return {
        validationReports: state.reducer.validationReports,
    };
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
