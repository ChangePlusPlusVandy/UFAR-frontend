import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function UntreatedForm(props) {
    return (
        <View>
            <Text style={styles.header}>Personnes Non Traitées</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabelBigger} ># de personnes non traitées</Text>
                <Text style={styles.inputLabel}>Enfants de {'<'} 5 ans (E)</Text>
                <TextInput style={styles.inputField} value={props.numInfants.toString()} />
                <Text style={styles.inputLabel}>Femmes enceintes (G)</Text>
                <TextInput style={styles.inputField} value={props.numPregnant.toString()} />
                <Text style={styles.inputLabel}>Femmes allaitantes de {'<'} 7jrs (FA)</Text>
                <TextInput style={styles.inputField} value={props.numBreastfeeding.toString()}/>
                <Text style={styles.inputLabel}>Malades grabataires (MG)</Text>
                <TextInput style={styles.inputField} value={props.numBedridden.toString()} />
                <Text style={styles.inputLabel}>Refus (R)</Text>
                <TextInput style={styles.inputField} value={props.numRefused.toString()} />
                <Text style={styles.inputLabel}>Absents (A)</Text>
                <TextInput style={styles.inputField} value={props.numAbsent.toString()} />
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Text style={styles.inputLabelBigger}>Total de personnes non traitées</Text>
                    <TextInput style={styles.inputField} value={props.totalUntreated.toString()} />
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