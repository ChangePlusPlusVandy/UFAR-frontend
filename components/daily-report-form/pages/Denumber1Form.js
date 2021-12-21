import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Denumber1Form(props) {
    return (
        <View>
            <Text style={styles.header}>Denombrement</Text>
            <ScrollView style={styles.inputContainer}>
                <View style={styles.rowContainer}>
                    <View style={styles.leftContainer}>
                        <Text  style={styles.inputLabelBigger}>Hommes</Text>
                        <Text style={styles.inputLabel}># d'enfants {'<'} 6 mois</Text>
                        <TextInput  style={styles.inputField} 
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
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.inputLabel}># Total des Hommes</Text>
                        <TextInput  style={styles.inputField} value={props.totalNumMen.toString()} />
                    </View>
                </View>
                <View style={{...styles.rowContainer, marginTop: 20}}>
                    <View style={styles.leftContainer}>
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
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.inputLabel}># Total des Femmes</Text>
                        <TextInput style={styles.inputField} value={props.totalNumWomen.toString()}/>
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
        fontSize: 19,
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
