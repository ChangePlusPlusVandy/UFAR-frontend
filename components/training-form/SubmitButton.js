import parseOptionsFromUrl from 'metro/src/lib/parseOptionsFromUrl';
import React from 'react';
import {Pressable, StyleSheet, Text, View, Modal} from 'react-native';
import {Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import uuid from 'react-native-uuid';
import { addReport } from '../../src/actions.js'

export default connect(mapStateToProps, mapDispatchToProps)(function SubmitButton(props){
    const [modalVisible, setModalVisible] = React.useState(false);

    /**
     * Submits report, resets all states, sets in motion a function 
     * to delete it after 24 hours, and navigates back to nurse landing page
     */
    const submitReport = () => {
        props.addReport(props.report, uuid.v4());
        // remove the report from the redux store after 24 hours
        setTimeout(() => {
            props.removeReport(uuid.v4());
        }, 86400000);

        // navigate back to nurse landing page
        props.setLandingPage(true);
        // console.log("submitReport");
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
                            <Text style={styles.modalText}>Mode hors-ligne: le rapport sera soumis ultérieurement
                             une fois que vous êtes de retour en ligne</Text>
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
                <Text style={styles.text}>Envoyer/Sauvegarder</Text>
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
        // todo: delete first argument: only for deubg
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