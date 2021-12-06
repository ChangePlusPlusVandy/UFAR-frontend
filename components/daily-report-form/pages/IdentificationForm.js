import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Chevron} from 'react-native-shapes';

// Dropdown items
const provinceNames = [
    { label: 'Kwango', value: 'kwango' },
    { label: 'Kwilu', value: 'kwilu' },
];
const healthZoneNames = [
    { label: 'Health Zone 1', value: 'healthZone1' },
    { label: 'Health Zone 2', value: 'healthZone2' },
    { label: 'Health Zone 3', value: 'healthZone3' },
];
const healthAreas = [
    { label: 'Health Area 1', value: 'healthArea1' },
    { label: 'Health Area 2', value: 'healthArea2' },
    { label: 'Health Area 3', value: 'healthArea3' },
];
const villageNames = [
    { label: 'Village 1', value: 'village1' },
    { label: 'Village 2', value: 'village2' },
    { label: 'Village 3', value: 'village3' },
];

export default function IdentificationForm(props) {
    return (
        <View>
            <Text style={styles.header}>Identification</Text>
            <View style={styles.inputContainer}>
                <View style={{flexDirection: 'row'}}>
                    <TextInput style={{...styles.inputField, flex: 1, marginRight: 5.5}} onChange={(e) => props.setDMMDay(e.nativeEvent.text)} defaultValue={props.DMMDay} placeholder="DMM Day" />
                    <TextInput style={{...styles.inputField, flex: 2, marginLeft: 5.5}} onChange={(e) => props.setRegisteredNurse(e.nativeEvent.text)} defaultValue={props.registeredNurse} placeholder="Name of Registered Nurse" />
                </View>
                <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    style={{inputAndroid: styles.inputField, iconContainer: styles.RNPickerSelectIconContainer, placeholder: styles.placeholder}}
                    onValueChange={(value) => props.setProvinceName(value)}
                    items={provinceNames}
                    value={props.provinceName}
                    placeholder={{label: 'Name of Province/Region', value: null}}
                    Icon={() => <Chevron size={1.5} color='#9D9D9D' />}
                />
                <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    style={{inputAndroid: styles.inputField, iconContainer: styles.RNPickerSelectIconContainer, placeholder: styles.placeholder}}
                    onValueChange={(value) => props.setHealthZoneName(value)}
                    items={healthZoneNames}
                    value={props.healthZoneName}
                    placeholder={{label: 'Health Zone Name', value: null}}
                    Icon={() => <Chevron size={1.5} color='#9D9D9D' />}
                />
                <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    style={{inputAndroid: styles.inputField, iconContainer: styles.RNPickerSelectIconContainer, placeholder: styles.placeholder}}
                    onValueChange={(value) => props.setHealthArea(value)}
                    items={healthAreas}
                    value={props.healthArea}
                    placeholder={{label: 'Aire de santé', value: null}}
                    Icon={() => <Chevron size={1.5} color='#9D9D9D' />}
                />
                <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    style={{inputAndroid: styles.inputField, iconContainer: styles.RNPickerSelectIconContainer, placeholder: styles.placeholder}}
                    onValueChange={(value) => props.setVillageName(value)}
                    items={villageNames}
                    value={props.villageName}
                    placeholder={{label: 'Village/Community Name', value: null}}
                    Icon={() => <Chevron size={1.5} color='#9D9D9D' />}
                />
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
    },
    RNPickerSelectIconContainer: {
        justifyContent: 'center',
        top: 5,
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
