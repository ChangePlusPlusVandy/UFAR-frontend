import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function IdentificationForm() {
    return (
        <View>
            <Text style={styles.header}>Identification</Text>
            <View style={styles.inputContainer}>
                <View style={{flexDirection: 'row'}}>
                    <TextInput style={{...styles.inputField, flex: 1, marginRight: 5.5}} placeholder="DMM Day" />
                    <TextInput style={{...styles.inputField, flex: 2, marginLeft: 5.5}} placeholder="Name of Registered Nurse" />
                </View>
                <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    style={{inputAndroid: {...styles.inputField}}}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Kwango', value: 'kwango' },
                        { label: 'Kwilu', value: 'kwilu' },
                    ]}
                    placeholder={{label: "Name of Province/Region", value: null}}/>
                <TextInput style={styles.inputField} placeholder="Health Zone Name" />
                <TextInput style={styles.inputField} placeholder="Aire de santé" />
                <TextInput style={styles.inputField} placeholder="Village/Community Name" />
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
        color: 'black',
    }
})
