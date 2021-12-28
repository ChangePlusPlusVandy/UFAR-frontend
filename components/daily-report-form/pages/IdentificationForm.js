import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Chevron} from 'react-native-shapes';
import data  from './locations'; // fixme: remove this


export default function IdentificationForm(props) {

    function getProvinces(){
        let provinceNames = [];
    
        Object.keys(data.provinces).forEach(function(province) {
            provinceNames.push({label: province, value: province});
        });
        return provinceNames;
    }

    function getHealthZones(){
        let healthZoneNames = [];
        
        if (props.provinceName){
            Object.keys(data.provinces[props.provinceName].health_zones).forEach(function(healthZone) {
                healthZoneNames.push({label: healthZone, value: healthZone});
            });
        }
    
        return healthZoneNames;
    }

    function getHealthAreas(){
        let healthAreas = [];
        
        if (props.provinceName && props.healthZoneName){
            Object.keys(data.provinces[props.provinceName].health_zones[props.healthZoneName].health_areas).forEach(function(healthArea) {
                healthAreas.push({label: healthArea, value: healthArea});
            });
        }
        
        return healthAreas;
    }

    function getVillages(){
        let villageNames = [];
        
        if (props.provinceName && props.healthZoneName && props.healthAreaName){
            Object.keys(data.provinces[props.provinceName].health_zones[props.healthZoneName].health_areas[props.healthAreaName].villages).forEach(function(village) {
                villageNames.push({label: village, value: village});
            });
        }
        return villageNames;
    }
    
    return (
        <View>
            
            <Text style={styles.header}>Identification</Text>
            <View style={styles.inputContainer}>
                <View style={{flexDirection: 'row'}}>
                    <TextInput style={{...styles.inputField, flex: 1, marginRight: 5.5}} onChange={(e) => props.setDMMDay(e.nativeEvent.text)} defaultValue={props.DMMDay} placeholder="Jour de la DMM" />
                    <TextInput style={{...styles.inputField, flex: 2, marginLeft: 5.5}} onChange={(e) => props.setRegisteredNurse(e.nativeEvent.text)} defaultValue={props.registeredNurse} placeholder="Nom de l'infirmier titulaire" />
                </View>
                <View style={styles.RNPickerSelectContainer}>
                    <RNPickerSelect
                        useNativeAndroidPickerStyle={false}
                        style={{inputAndroid: styles.RNPickerSelectInput, iconContainer: styles.RNPickerSelectIconContainer, placeholder: styles.placeholder}}
                        onValueChange={(value) => { 
                            props.setProvinceName(value);
                            props.setProvinceId(data.provinces[value].id);
                        }}
                        items={ getProvinces() }
            
                        value={props.provinceName}
                        placeholder={{label: 'Nom de la Province/Région', value: null}}
                        Icon={() => <Chevron size={1.5} color='#9D9D9D' />}
                    />
                </View>
                <View style={styles.RNPickerSelectContainer}>
                    <RNPickerSelect
                        useNativeAndroidPickerStyle={false}
                        style={{inputAndroid: styles.RNPickerSelectInput, iconContainer: styles.RNPickerSelectIconContainer, placeholder: styles.placeholder}}
                        onValueChange={(value) => {
                            props.setHealthZoneName(value);
                            value && props.setHealthZoneId(data.provinces[props.provinceName].health_zones[value].id);
                        }}
                        items={ getHealthZones() }
            
                        value={props.healthZoneName}
                        placeholder={{label: 'Nom de la Zone de santé', value: null}}
                        Icon={() => <Chevron size={1.5} color='#9D9D9D' />}
                    />
                </View>
                <View style={styles.RNPickerSelectContainer}>
                    <RNPickerSelect
                        useNativeAndroidPickerStyle={false}
                        style={{inputAndroid: styles.RNPickerSelectInput, iconContainer: styles.RNPickerSelectIconContainer, placeholder: styles.placeholder}}
                        onValueChange={(value) => {
                            props.setHealthAreaName(value);
                            value && props.setHealthAreaId(data.provinces[props.provinceName].health_zones[props.healthZoneName].health_areas[value].id);
                        }}
                        items={ getHealthAreas() }
                        value={props.healthAreaName}
                        placeholder={{label: 'Aire de santé', value: null}}
                        Icon={() => <Chevron size={1.5} color='#9D9D9D' />}
                    />
                </View>
                <View>
                    <RNPickerSelect
                        useNativeAndroidPickerStyle={false}
                        style={{inputAndroid: styles.RNPickerSelectInput, iconContainer: styles.RNPickerSelectIconContainer, placeholder: styles.placeholder}}
                        onValueChange={(value) => {
                            props.setVillageName(value);
                            value && props.setVillageId(data.provinces[props.provinceName].health_zones[props.healthZoneName].health_areas[props.healthAreaName].villages[value].id);
                        }}
                        items={ getVillages() }
                        value={props.villageName}
                        placeholder={{label: 'Nom du Village/Communauté', value: null}}
                        Icon={() => <Chevron size={1.5} color='#9D9D9D' />}
                    />
                </View>
                {/* <TextInput style={styles.inputField} placeholder="GPS Location (autofill)" /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 18,
        alignSelf: 'center',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 23,
        lineHeight: 28,
        color: 'white',
    },
    inputContainer: {
        marginHorizontal: 34,
    },
    inputField: {
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 17,
        backgroundColor: 'white',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 11,
        lineHeight: 13,
        color: 'black',
        
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
    RNPickerSelectInput: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 17,
        backgroundColor: 'white',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 11,
        lineHeight: 13,
        color: 'black',
    },
    RNPickerSelectContainer: {
        marginVertical: 5,
        borderRadius: 17,
        backgroundColor: 'white',
        
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
    RNPickerSelectIconContainer: {
        justifyContent: 'center',
        right: 15,
        height: 37,
        borderLeftColor: '#D6D6D6',
        borderLeftWidth: 0.5,
        paddingTop: 4,
        paddingLeft: 10,
    },
    placeholder: {
        color: '#9D9D9D',
    },
})
