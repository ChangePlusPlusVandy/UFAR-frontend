import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Denumber1Form(props) {
    return (
        <View>
            <Text style={styles.header}>Denombrement</Text>
            <ScrollView style={styles.inputContainer} persistentScrollbar={true}>
                <View>
                    <Text style={styles.inputLabelBigger}>Hommes</Text>
                    <Text style={styles.inputLabel}># d'enfants {'<'} 6 mois</Text>
                    <TextInput style={styles.inputField} 
                    defaultValue={props.menUnderSixMonths.toString()} 
                    onChange={(e) => props.setMenLessThanSixMonths(parseInt(e.nativeEvent.text) || 0)}/>

                    <Text style={styles.inputLabel}># d'enfants 6 mois - {'<'}5 ans</Text>
                    <TextInput style={styles.inputField}
                    defaultValue={props.menSixMonthsToFiveYears.toString()}
                    onChange={(e) => props.setMenSixMonthsToFiveYears(parseInt(e.nativeEvent.text) || 0)}/>

                    <Text style={styles.inputLabel}># d'enfants 5 - {'<'}14 ans</Text>
                    <TextInput  style={styles.inputField}
                    defaultValue={props.menFiveToFourteenYears.toString()} 
                    onChange={(e) => props.setMenFiveToFourteenYears(parseInt(e.nativeEvent.text) || 0)}/>

                    <Text style={styles.inputLabel}># de Personnes de 15 ans et plus</Text>
                    <TextInput  style={styles.inputField}
                    defaultValue={props.menFifteenAndOlder.toString()} 
                    onChange={(e) => props.setMenFifteenAndOlder(parseInt(e.nativeEvent.text) || 0)}/>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.inputLabel}># Total des Hommes</Text>
                        <TextInput  style={{...styles.inputField, width: 100}} value={props.totalNumMen.toString()} />
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={styles.inputLabelBigger}>Femmes</Text>
                    <Text style={styles.inputLabel}># d'enfants {'<'} 6 mois</Text>
                    <TextInput  style={styles.inputField} 
                    defaultValue={props.womenLessThanSixMonths.toString()} 
                    onChange={(e) => props.setWomenLessThanSixMonths(parseInt(e.nativeEvent.text) || 0)}/>

                    <Text style={styles.inputLabel}># d'enfants 6 mois - {'<'}5 ans</Text>
                    <TextInput  style={styles.inputField} 
                    defaultValue={props.womenSixMonthsToFiveYears.toString()}
                    onChange={(e) => props.setWomenSixMonthsToFiveYears(parseInt(e.nativeEvent.text) || 0)}/>

                    <Text style={styles.inputLabel}># d'enfants 5 - {'<'}14 ans</Text>
                    <TextInput  style={styles.inputField} 
                    defaultValue={props.womenFiveToFourteenYears.toString()}
                    onChange={(e) => props.setWomenFiveToFourteenYears(parseInt(e.nativeEvent.text) || 0)}/>

                    <Text style={styles.inputLabel}># de Personnes de 15 ans et plus</Text>
                    <TextInput  style={styles.inputField} 
                    defaultValue={props.womenFifteenAndOlder.toString()}
                    onChange={(e) => props.setWomenFifteenAndOlder(parseInt(e.nativeEvent.text) || 0)}/>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.inputLabel}># Total des Femmes</Text>
                        <TextInput style={styles.inputField} value={props.totalNumWomen.toString()} />
                    </View>
                </View>
            </ScrollView>
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
        marginHorizontal: 15,
        paddingHorizontal: 19,
        marginBottom: 185,
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
