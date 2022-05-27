import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert} from 'react-native';
import TrainingForm from '../TrainingForm';
import NewTrainingFormButton from './NewTrainingFormButton';
import {Icon} from 'react-native-elements';
import FetchButton from '../../validation-page/FetchButton';
import { convertFromYYYYMMDDToDDMMYYYY } from '../../../src/utils';
import data from '../../daily-report-form/pages/locations.js';
import { AuthContext } from '../../../src/context/AuthContext';
import { AxiosContext } from '../../../src/context/AxiosContext';

function getProvinceId(healthZoneId){
    Object.keys(data.provinces).forEach((province) => {
        Object.keys(data.provinces[province].health_zones).forEach((healthZone) => {
            if (healthZoneId === data.provinces[province].health_zones[healthZone].id) {
                console.log("healthZoneIdkk: " + data.provinces[province].health_zones[healthZone].id);
                console.log("province id: " + data.provinces[province].id);
                return data.provinces[province].id;
            }
        });
    });
    // return 0;
}

export default function TrainingPage(props){
    const [landingPage, setLandingPage] = React.useState(true);
    const [trainingForms, setTrainingForms] = React.useState([]);
    const [currentForm, setCurrentForm] = React.useState(null);
    const [view, setView] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [provinceId, setProvinceId] = React.useState(0);
    const {authAxios} = React.useContext(AxiosContext);


    const getTrainingForms = async () => {
        // var provinceId = getProvinceId(props.healthZoneId);
        try {
            // todo: replace with dynamic province id
            const response = await authAxios.get(`form/618b21eb8453970bd916764b/getTrainingForms`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
                
            if (response.status == 200) {
                const trainingForms = await response.data;
                const forms = {};

                trainingForms.forEach((form) => {
                    forms[form._id] = form;
                });

                setTrainingForms(forms);
            } else {
                Alert.alert("Getting training Forms Failed: " + response.json().message);
                return;
            }
    
        } catch (error) {
            Alert.alert("Error: " + error);
        }
    };

    const renderItem = ({item, index}) => (
        <View style={(index == (Object.values(trainingForms).length - 1))? {...styles.listitem, ...styles.bottom}: (index == 0)? {...styles.top, ...styles.listitem}: {...styles.listitem} }>
            <Text style={styles.timelist}>{convertFromYYYYMMDDToDDMMYYYY((new Date(item.date)).toISOString().split('T')[0])}</Text>
            <Text style={styles.namelist}>{`Training Form`}</Text>
            <TouchableOpacity style={styles.edit}>
                <Icon name="eye" color = 'green' size = {20} type="entypo" onPress={
                    () => {
                        setLandingPage(false);
                        setCurrentForm(item);
                        setView(true);
                    }
                }/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.edit}>
                <Icon name="edit" color = 'green' size = {20} type="entypo" onPress={
                    () => {
                        setLandingPage(false);
                        setCurrentForm(item);
                        setEdit(true);
                    }
                }/>
            </TouchableOpacity>
        </View>
    );

    return (
        <>
            {landingPage ?
            <View style={styles.container}>
                <View style={styles.fetch}>
                    <FetchButton fetchTrainingFormsAdmin={true} getTrainingForms={getTrainingForms}/>
                </View>
                <ScrollView style={styles.list} persistentScrollbar={true}>
                    <FlatList data={Object.values(trainingForms)} renderItem={renderItem} keyExtractor={item => item.id}/>
                </ScrollView> 
                <NewTrainingFormButton setLandingPage={setLandingPage}/>
            </View>: 
            <TrainingForm 
                trainingForms={trainingForms} 
                setTrainingForms={setTrainingForms}  
                setView={setView} 
                edit={edit} 
                setEdit={setEdit}
                view={view}  
                currentForm={currentForm} 
                setLandingPage={setLandingPage}/>}
        </>
    )

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
        paddingHorizontal: 10,
        alignItems: 'center',

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
        // backgroundColor:'grey',
    },
    edit: {
        flex: 1,
        // flexDirection: 'row',
    },
    list:{
        marginTop: 27,
        height: 100,
        marginBottom: 70,
        width: '100%',
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
        flex: 3,
        textAlignVertical: "center",
    },
    namelist: {
        color: '#000000',
        fontSize: 18,
        flex: 5,
    },

    flexbox: {
        flexDirection: "row",
    },
    fetch: {
        flexDirection: 'row',
    },
})