import parseOptionsFromUrl from 'metro/src/lib/parseOptionsFromUrl';
import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text, View, Modal} from 'react-native';
import {Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import uuid from 'react-native-uuid';
import { addReport, validateReport, saveEditReport } from '../../src/actions.js';
import { AxiosContext } from '../../src/context/AxiosContext.js';

export default connect(mapStateToProps, mapDispatchToProps)(function SubmitButton(props){
    const [modalVisible, setModalVisible] = React.useState(false);

    const {authAxios} = useContext(AxiosContext);

    /**
     * Submits report, resets all states, sets in motion a function 
     * to delete it after 24 hours, and navigates back to nurse landing page
     */
    const submitReport = () => {
        props.addReport(props.report, authAxios, uuid.v4());
        // navigate back to respective landing page
        props.setBridgeActivePage(0)
    }

    /**
     * Validates report through redux and finally at the backend, navigates
     * back to validation pages
     */
    const submitValidateReport = () => {
        props.markValidatedReport(props.report, props.currentReportId);
        props.validateReport(props.report, authAxios, props.currentReportId);
        props.setLandingPage(true);
    }


    const saveEditReport = () => {
        // todo: after backend integration, call the saveEditReport action
        // props.saveEditReport(props.report, authAxios, props.currentReportId);
        
        console.log("report edit saved/submitted id", props.currentReportId);
        props.setBridgeActivePage(0);
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
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Offline Mode: report will be submitted later
                            once you're back online</Text>
                            <Pressable
                            style={styles.button}
                            onPress={() => {
                                if(props.validate){
                                    submitValidateReport();
                                } else if (props.edit){
                                    saveEditReport();
                                } else {
                                    submitReport();
                                }
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
                        if(props.validate){
                            submitValidateReport();
                        } else if (props.edit){
                            saveEditReport();
                        } else {
                            submitReport();
                        }
                    } else {
                        setModalVisible(true);
                    }
                }} 
                style={styles.button}>
                    <Icon name='sc-telegram' type='evilicon' color='white' size={45}/>
                </Pressable>
                <Text style={styles.text}> {props.validate? "Validate": "Submit/Save" }</Text>
            </View>
        </View>
    )
});

function mapStateToProps(state) {
    return {
      name: state.reducer.name,
      reports: state.reducer.reports,
      isConnected: state.network.isConnected,
      validationReports: state.reducer.validationReports,
    };
}

function mapDispatchToProps(dispatch){
    return {
        // todo: delete first argument: only for deubg
        // addReport: (report, id) => dispatch({type: 'ADD_REPORT', report: report, id: id, meta: {
        //     retry: true,
        //   },}),
        addReport: (report, authAxios, id) => dispatch(addReport(report, authAxios, id)),  
        markValidatedReport: (report, id) => dispatch({type: 'MARK_VALIDATED_REPORT', report: report, id: id}),
        validateReport: (report, authAxios, id) => dispatch(validateReport(report, authAxios, id)),
        saveEditReport: (report, authAxios, id) => dispatch(saveEditReport(report, authAxios, id)),
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
