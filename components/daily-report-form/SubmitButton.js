import parseOptionsFromUrl from 'metro/src/lib/parseOptionsFromUrl';
import React from 'react';
import {Pressable, StyleSheet, Text, View, Modal} from 'react-native';
import {Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import uuid from 'react-native-uuid';
import { addReport } from '../../src/actions.js'

export default connect(mapStateToProps, mapDispatchToProps)(function SubmitButton(props){
    const [modalVisible, setModalVisible] = React.useState(false);

    const submitReport = () => {
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
    }

    return (
        <View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    }}
                    onDismiss={() => {
                        submitReport();
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Offline Mode: report will be submitted later
                            once you're back online</Text>
                            <Pressable
                            style={styles.button}
                            onPress={() => {
                                submitReport();
                                setModalVisible(!modalVisible)
                            }}
                            >
                            <Text style={styles.textStyle}>Ok!</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.container}>
                <Pressable onPress={ () => {
                    if (props.isConnected) {
                        submitReport();
                    } else {
                        setModalVisible(true);
                    }
                    
                }} 
                style={styles.button}>
                    <Icon name='sc-telegram' type='evilicon' color='white' size={45}/>
                </Pressable>
                <Text style={styles.text}>Submit/Save</Text>
            </View>
        </View>
    )
});

function mapStateToProps(state) {
    return {
      name: state.reducer.name,
      reports: state.reducer.reports,
      isConnected: state.network.isConnected,
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
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 13,
        lineHeight: 15,
    }
});
