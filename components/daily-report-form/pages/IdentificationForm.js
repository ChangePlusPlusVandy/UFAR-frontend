import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Chevron} from 'react-native-shapes';

const locations = require('../../../location_data.json');

function stockMenuItems(source){
    var target = [];
    source.forEach(element => target.push({label: element.name, value: element.name}));
    return target;
}

// Dropdown items
const provinceNames = stockMenuItems(locations.provinces);
const healthZoneNames = [];
const healthAreas = [];
const villageNames = [];

/*
const provinceNames = [
    { label: 'Kwango', value: 'kwango' },
    { label: 'Kwilu', value: 'kwilu' },
];
const healthZoneNames = [
    { label: 'Koshibanda', value: 'koshibanda' },
    { label: 'Kimputu', value: 'kimputu' },
    { label: 'Pay-Kongila', value: 'payKongila' },
];
const healthAreas = [
    { label: 'Balaka', value: 'balaka' },
    { label: 'Bamba', value: 'bamba' },
    { label: 'Banda', value: 'banda' },
];
const villageNames = [
    { label: 'Balaka Village', value: 'balakaVillage' },
    { label: 'Balaka Mic P', value: 'balakaMicP' },
    { label: 'Munga', value: 'munga' },
];
*/

export default function IdentificationForm(props) {
    return (
        <View>
            <Text style={styles.header}>Identification</Text>
            <View style={styles.inputContainer}>
                <View style={{flexDirection: 'row'}}>
                    <TextInput style={{...styles.inputField, flex: 1, marginRight: 5.5}} onChange={(e) => props.setDMMDay(e.nativeEvent.text)} defaultValue={props.DMMDay} placeholder="DMM Day" />
                    <TextInput style={{...styles.inputField, flex: 2, marginLeft: 5.5}} onChange={(e) => props.setRegisteredNurse(e.nativeEvent.text)} defaultValue={props.registeredNurse} placeholder="Name of Registered Nurse" />
                </View>
                <View style={styles.RNPickerSelectContainer}>
                    <RNPickerSelect
                        useNativeAndroidPickerStyle={false}
                        style={{inputAndroid: styles.RNPickerSelectInput, iconContainer: styles.RNPickerSelectIconContainer, placeholder: styles.placeholder}}
                        onValueChange={(value) => props.setProvinceName(value)}
                        items={provinceNames}
                        value={props.provinceName}
                        placeholder={{label: 'Name of Province/Region', value: null}}
                        Icon={() => <Chevron size={1.5} color='#9D9D9D' />}
                    />
                </View>
                <View style={styles.RNPickerSelectContainer}>
                    <RNPickerSelect
                        useNativeAndroidPickerStyle={false}
                        style={{inputAndroid: styles.RNPickerSelectInput, iconContainer: styles.RNPickerSelectIconContainer, placeholder: styles.placeholder}}
                        onValueChange={(value) => props.setHealthZoneName(value)}
                        items={healthZoneNames}
                        value={props.healthZoneName}
                        placeholder={{label: 'Health Zone Name', value: null}}
                        Icon={() => <Chevron size={1.5} color='#9D9D9D' />}
                    />
                </View>
                <View style={styles.RNPickerSelectContainer}>
                    <RNPickerSelect
                        useNativeAndroidPickerStyle={false}
                        style={{inputAndroid: styles.RNPickerSelectInput, iconContainer: styles.RNPickerSelectIconContainer, placeholder: styles.placeholder}}
                        onValueChange={(value) => props.setHealthArea(value)}
                        items={healthAreas}
                        value={props.healthArea}
                        placeholder={{label: 'Aire de santé', value: null}}
                        Icon={() => <Chevron size={1.5} color='#9D9D9D' />}
                    />
                </View>
                <View>
                    <RNPickerSelect
                        useNativeAndroidPickerStyle={false}
                        style={{inputAndroid: styles.RNPickerSelectInput, iconContainer: styles.RNPickerSelectIconContainer, placeholder: styles.placeholder}}
                        onValueChange={(value) => props.setVillageName(value)}
                        items={villageNames}
                        value={props.villageName}
                        placeholder={{label: 'Village/Community Name', value: null}}
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
