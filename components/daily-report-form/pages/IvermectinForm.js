import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function IvermectinForm(props) {
    return (
        <View>
            <Text style={styles.header}>Gestion Des Medicaments</Text>
            <View style={styles.inputContainer}>
                <View style={styles.rowContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={{...styles.inputLabel, fontSize: 19, lineHeight: 22}} >Ivermectine (Oncho/FL)</Text>
                            <Text style={styles.inputLabel}>Quantité reçue</Text>
                            <TextInput style={styles.inputField} value={props.ivermectinReceived.toString()} />
                            <Text style={styles.inputLabel}>Quantité utilisée</Text>
                            <TextInput style={styles.inputField} value={props.ivermectinUsed.toString()} />
                            <Text style={styles.inputLabel}>Quantité perdue</Text>
                            <TextInput style={styles.inputField} value={props.ivermectinLost.toString()}/>
                            <Text style={styles.inputLabel}>Quantité rendue au C.S.</Text>
                            <TextInput style={styles.inputField} value={props.ivermectinReturned.toString()} />
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.inputLabel}>Quantité restante</Text>
                            <TextInput style={styles.inputField} value={props.ivermectinRemaining.toString()} />
                        </View>
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
        width: 95,
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
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 1,
    },
    rightContainer: {
        flex: 1,
        alignItems: 'center',
    },
})
