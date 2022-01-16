import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function DrugManagementIvermectinForm(props) {
    return (
        <View>
            <View style={styles.rowContainer}>
                <View style={styles.inputFieldContainer}>
                    <Text style={styles.inputLabel}>Reçue</Text>
                    <TextInput style={styles.inputField} onChange={(e) => props.setIvermectinReceived(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.ivermectinReceived || '').toString()} />
                </View>
                <View style={styles.inputFieldContainer}>
                    <Text style={styles.inputLabel}>Utilisée</Text>
                    <TextInput style={styles.inputField} onChange={(e) => props.setIvermectinUsed(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.ivermectinUsed || '').toString()} />
                </View>
                <View style={styles.inputFieldContainer}>
                    <Text style={styles.inputLabel}>Perdue</Text>
                    <TextInput style={styles.inputField} onChange={(e) => props.setIvermectinLost(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.ivermectinLost || '').toString()} />
                </View>
            </View>

            <View style={styles.rowContainer}>
                <View style={styles.inputFieldContainer}>
                    <Text style={{...styles.inputLabelBigger, marginBottom: 0}}>Restante</Text>
                    <TextInput style={styles.inputFieldBigger} value={props.ivermectinRemaining.toString()} />
                </View>
                <View style={styles.inputFieldContainer}>
                    <Text style={{...styles.inputLabelBigger, marginBottom: 0}}>Rendue au C.S.</Text>
                    <TextInput style={styles.inputFieldBigger} onChange={(e) => props.setIvermectinReturned(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.ivermectinReturned || '').toString()} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 18,
        alignSelf: 'center',
        textAlign: 'center',
        maxWidth: 300,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 28,
        color: 'white',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    inputLabelBigger: {
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir-Roman',
        fontSize: 17,
        lineHeight: 20,
        color: 'white',
        marginVertical: 10,
    },
    inputFieldContainer: {
        alignItems: 'center',
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
        width: 85,
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
    inputFieldBigger: {
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 17,
        backgroundColor: 'white',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 11,
        lineHeight: 13,
        color: 'black',
        width: 125,
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
    text: {
        color: 'white',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 12,
        lineHeight: 14,
    }
})
