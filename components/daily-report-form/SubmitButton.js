import parseOptionsFromUrl from 'metro/src/lib/parseOptionsFromUrl';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import uuid from 'react-native-uuid';
import { addReport } from '../../src/actions.js'

export default connect(mapStateToProps, mapDispatchToProps)(function SubmitButton(props){
    return (
        <View style={styles.container}>
            <Pressable onPress={ () => {
                // save the report to redux, reset all states, and navigate to home
                if (props.editMode) {
                    //todo: edit mode is not fully
                    // // update the report
                    // props.addReport(props.report, props.editReportId);

                    // // remove the report from the redux store after 24 hours
                    // setTimeout(() => {
                    //     props.removeReport(props.editReportId);
                    // }, 86400000);

                    // props.setEditMode(false);
                } else {
                    props.addReport(props.report, uuid.v4());
                    // remove the report from the redux store after 24 hours
                    setTimeout(() => {
                        props.removeReport(uuid.v4());
                    }, 86400000);

                    props.resetAllStates();
                }
                if (props.activePage !== null) props.setActivePage(null);
            }} 
            style={styles.button}>
                <Icon name='sc-telegram' type='evilicon' color='white' size={45}/>
            </Pressable>
            <Text style={styles.text}>Submit/Save</Text>
        </View>
    )
});

function mapStateToProps(state) {
    return {
      name: state.reducer.name,
      reports: state.reducer.reports,
      isConnected: state.network.isConected,
    };
}

function mapDispatchToProps(dispatch){
    return {
        // addReport: (report, id) => dispatch({type: 'ADD_REPORT', report: report, id: id, meta: {
        //     retry: true,
        //   },}),
        addReport: (report, id) => dispatch(addReport(report, id)),  
        removeReport: (id) => dispatch({type: 'REMOVE_REPORT', id: id}),  
    };
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#59AECF',
        height: 54,
        width: 54,
        borderRadius: 27,
        alignContent: 'center',
        justifyContent: 'center',

        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 10,
        shadowOpacity: 0.3,
    },
    text: {
        paddingVertical: 3,
        color: 'white',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 13,
        lineHeight: 15,
    }
});
