import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function DatesForm(props) {
    return (
        <View>
            <Text style={styles.header}>Dates</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Date de la fin de la formation des DCs</Text>
                {/* TODO: calendar/date picker? */}
                <TextInput style={styles.inputField} onChange={(e) => props.setDCTrainingCompletionDate(e.nativeEvent.text)} defaultValue={props.DCTrainingCompletionDate} placeholder="DD/MM/YYYY" />
                <Text style={styles.inputLabel}>Date d'arrivée de médicaments</Text>
                <TextInput style={styles.inputField} onChange={(e) => props.setMedicineArrivalDate(e.nativeEvent.text)} defaultValue={props.medicineArrivalDate} placeholder="DD/MM/YYYY" />
                <Text style={styles.inputLabel}>Date du début de la DMM</Text>
                <TextInput style={styles.inputField} onChange={(e) => props.setMDDStartDate(e.nativeEvent.text)} defaultValue={props.MDDStartDate} placeholder="DD/MM/YYYY" />
                <Text style={styles.inputLabel}>Date de la fin de la DMM</Text>
                <TextInput style={styles.inputField} onChange={(e) => props.setDMMEndDate(e.nativeEvent.text)} defaultValue={props.DMMEndDate} placeholder="DD/MM/YYYY" />
                <Text style={styles.inputLabel}>Date de la transmission du rapport</Text>
                <TextInput style={styles.inputField} onChange={(e) => props.setReportTransmissionDate(e.nativeEvent.text)} defaultValue={props.reportTransmissionDate} placeholder="DD/MM/YYYY" />
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
    inputLabel: {
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir-Roman',
        fontSize: 11,
        lineHeight: 13,
        color: 'white',
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
        textAlign: 'center',
        
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
})
