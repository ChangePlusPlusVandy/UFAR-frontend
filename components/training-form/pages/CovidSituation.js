import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';


// done 

export default function CovidSituationForm(props) {
    return (
        <View>
            <Text style={styles.header}>Situation Epidemiologique de la COVID-19 Dans La Zone De Sante</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabelBigger} >Situation Epidemiologique</Text>
                <Text style={styles.inputLabel}>Cumul des cas actifs de Covid-19</Text>
                <TextInput style={styles.inputField} 
                    onChange={(e) => props.setActiveCovidCases(parseInt(e.nativeEvent.text) || 0)}
                    defaultValue={(props.activeCovidCases || '0').toString()}
                    />

                <Text style={styles.inputLabel}>Nombre de nouveau cas actifs de Covid-19 confirmés au cours du mois</Text>
                <TextInput style={styles.inputField} 
                    onChange={(e) => props.setNewActiveCovidCases(parseInt(e.nativeEvent.text) || 0)}
                    defaultValue={(props.newActiveCovidCases|| '0').toString()}
                />


                <Text style={styles.inputLabel}>Nombre de décès de Covid-19 enregistres au cours du mois</Text>
                <TextInput style={styles.inputField} 
                    onChange={(e) => props.setCovidDeaths(parseInt(e.nativeEvent.text) || 0)}
                    defaultValue={ (props.covidDeaths || '0').toString()}
                />
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
        marginBottom: 5,
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
