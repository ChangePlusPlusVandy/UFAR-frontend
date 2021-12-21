import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function Denumber2Form(props) {
    return (
        <View>
            <Text style={styles.header}>Denombrement</Text>
            <View style={styles.inputContainer}>
                <View style={styles.rowContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={{...styles.inputLabel, fontSize: 19, lineHeight: 22}} >Total</Text>
                            <Text style={styles.inputLabel}>Total général d'enfants {'<'} 6 mois</Text>
                            <TextInput style={styles.inputField} value={props.totalChildrenUnderSixMonths.toString()} />
                            <Text style={styles.inputLabel}>Total général d'enfants 6 mois - {'<'}5 ans</Text>
                            <TextInput style={styles.inputField} value={props.totalchilrenSixMonthsToveFiveYears.toString()} />
                            <Text style={styles.inputLabel}>Total général d'enfants 5 - 14 ans</Text>
                            <TextInput style={styles.inputField} value={props.totalFiveToFourteenYears.toString()}/>
                            <Text style={styles.inputLabel}>Total général de Personnes de 15 ans et plus</Text>
                            <TextInput style={styles.inputField} value={props.totalFifteenAndOlder.toString()} />
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.inputLabel}>Total Number of Persons</Text>
                            <TextInput style={styles.inputField} value={props.totalNumPersons.toString()} />
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
