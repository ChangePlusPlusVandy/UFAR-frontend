import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function FinancialResourcesForm(props) {
    return (
        <View>
            <Text style={styles.header}>Ressources Financieres</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabelBigger} >Si oui determiner le montant encaissé par activités</Text>
                <Text style={styles.inputLabel}>Planification</Text>
                <TextInput style={styles.inputField} value={props.amountPlanning.toString()}  onChange={(e) => props.setAmountPlanning(parseInt(e.nativeEvent.text) || 0)}/>
                <Text style={styles.inputLabel}>Formation</Text>
                <TextInput style={styles.inputField} value={props.amountTraining.toString()} onChange={(e) => props.setAmountTraining(parseInt(e.nativeEvent.text) || 0)}/>
                <Text style={styles.inputLabel}>ESPM</Text>
                <TextInput style={styles.inputField} value={props.amountESPM.toString()} onChange={(e) => props.setAmountESPM(parseInt(e.nativeEvent.text) || 0)}/>
                <Text style={styles.inputLabel}>DMM</Text>
                <TextInput style={styles.inputField} value={props.amountDMM.toString()} onChange={(e) => props.setAmountDMM(parseInt(e.nativeEvent.text) || 0)}/>
                <Text style={styles.inputLabel}>Supervision</Text>
                <TextInput style={styles.inputField} value={props.amountSupervision.toString()} onChange={(e) => props.setAmountSupervision(parseInt(e.nativeEvent.text) || 0)}/>
                <Text style={styles.inputLabel}>Gestion des ES</Text>
                <TextInput style={styles.inputField} value={props.amountManagement.toString()} onChange={(e) => props.setAmountManagement(parseInt(e.nativeEvent.text) || 0)}/>
                <Text style={styles.inputLabel}>Autres</Text>
                <TextInput style={styles.inputField} value={props.amountOther.toString()} onChange={(e) => props.setAmountOther(parseInt(e.nativeEvent.text) || 0)}/>
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Text style={styles.inputLabelBigger}>Total des fonds reçus pour la mise en œuvre de activités</Text>
                    <TextInput style={styles.inputField} value={props.amountTotal.toString()} />
                </View>
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
        fontSize: 12,
        lineHeight: 13,
        color: 'white',
    },
    inputLabelBigger: {
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir-Roman',
        fontSize: 15,
        lineHeight: 22,
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
        minWidth: 100,
        
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