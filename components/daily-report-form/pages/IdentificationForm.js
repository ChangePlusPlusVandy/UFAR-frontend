import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function IdentificationForm(props) {
    return (
        <View>
            <Text style={styles.header}>Identification</Text>
            <View style={styles.inputContainer}>
                <View style={{flexDirection: 'row'}}>
                    <TextInput style={{...styles.inputField, flex: 1, marginRight: 5.5}} onChange={(e) => props.setDMMDay(e.nativeEvent.text)} defaultValue={props.DMMDay} placeholder="DMM Day" />
                    <TextInput style={{...styles.inputField, flex: 2, marginLeft: 5.5}} onChange={(e) => props.setRegisteredNurse(e.nativeEvent.text)} defaultValue={props.registeredNurse} placeholder="Name of Registered Nurse" />
                </View>
                <TextInput onChange={(e) => props.setProvinceName(e.nativeEvent.text)} style={styles.inputField} defaultValue={props.provinceName}  placeholder="Name of Province/Region" />
                <TextInput onChange={(e) => props.setHealthZoneName(e.nativeEvent.text)}  style={styles.inputField} defaultValue={props.healthZoneName} placeholder="Health Zone Name" />
                <TextInput onChange={(e) => props.setHealthArea(e.nativeEvent.text)} style={styles.inputField} defaultValue={props.healthArea} placeholder="Aire de santé" />
                <TextInput onChange={(e) => props.setVillageName(e.nativeEvent.text)} style={styles.inputField} defaultValue={props.villageName} placeholder="Village/Community Name" />
                <TextInput style={styles.inputField} placeholder="GPS Location (autofill)" />
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
    }
})
