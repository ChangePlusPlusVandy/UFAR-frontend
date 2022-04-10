import parseOptionsFromUrl from 'metro/src/lib/parseOptionsFromUrl';
import React from 'react';
import {Pressable, StyleSheet, Text, View, Modal, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import { AxiosContext } from '../../src/context/AxiosContext';

export default function SubmitButton(props){
    const [modalVisible, setModalVisible] = React.useState(false);
    
    const {authAxios} = React.useContext(AxiosContext);

    const onSubmit = async (form) => {
        if (props.edit) {
            try {
                const response = await authAxios.post('form/editTrainingForm',
                    JSON.stringify(form),
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                );
                    
                if (response.status == 200) { // todo: migth need to change status
                    props.setTrainingForms({...props.trainingForms, [form._id]: form});
                    Alert.alert("Success", "Form edited: new changes saved");
                } else {
                    Alert.alert("Saving form Failed: " + response);
                    return;
                }
        
            } catch (error) {
                Alert.alert("Cannot save form: " + error);
            }
        }
        else {
            try {
                const response = await authAxios.post('form/insertTrainingForm',
                    JSON.stringify(form),
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                );
                    
                if (response.status == 200) { // todo: migth need to change status
                    // alert user that training form was created
                    Alert.alert("Success", "Form submitted: Press the fetch button to get the latest form");
                } else {
                    Alert.alert("Saving form Failed: " + response);
                    return;
                }
        
            } catch (error) {
                Alert.alert("Cannot save form: " + error);
            }
        }
    };
   
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
                                // onSubmit(props.trainingForm);
                                // setModalVisible(!modalVisible)
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
                    // console.log(props.trainingForm);
                    onSubmit(props.trainingForm);
                    props.setLandingPage(true);
                }} 
                style={styles.button}>
                    <Icon name='sc-telegram' type='evilicon' color='white' size={45}/>
                </Pressable>
                {props.edit? <Text style={styles.text}>Éditer</Text>:
                <Text style={styles.text}>Envoyer/Sauvegarder</Text>}
            </View>
        </View>
    )
};


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
