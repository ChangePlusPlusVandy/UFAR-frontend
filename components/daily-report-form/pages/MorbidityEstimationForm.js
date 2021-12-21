import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function MorbidityEstimationForm(props) {
    return (
        <View>
            <Text style={styles.header}>Estimation Des Cas Des Morbidites</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabelBigger}>Aveugles</Text>
                <View style={styles.rowContainer}>
                    <TextInput style={styles.inputField} onChange={(e) => props.setNumMenBlind(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numMenBlind || '').toString()} placeholder="# des hommes" />
                    <Text style={styles.text}>+</Text>
                    <TextInput style={styles.inputField} onChange={(e) => props.setNumWomenBlind(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numWomenBlind || '').toString()} placeholder="# des femmes" />
                    <Text style={styles.text}>=</Text>
                    <TextInput style={styles.inputField} value={props.totalNumBlind.toString()} placeholder="Total des personnes" />
                </View>
                <Text style={{...styles.inputLabelBigger, marginVertical: 10}}>Lymphœdème</Text>
                <View>
                    <Text style={styles.inputLabel}>Hommes</Text>
                    <View>
                        <View style={styles.rowContainer}>
                            <TextInput style={styles.inputFieldBigger} placeholder="Membre Supérieur Gauche"/>
                            <TextInput style={styles.inputFieldBigger} placeholder="Membre Supérieur Droit"/>
                        </View>
                        <View style={styles.rowContainer}>
                            <TextInput style={styles.inputFieldBigger} placeholder="Membre Inférieur Gauche"/>
                            <TextInput style={styles.inputFieldBigger} placeholder="Membre Inférieur Droit"/>
                        </View>
                    </View>
                    <Text style={styles.inputLabel}>Women</Text>
                    <View>
                        <View style={styles.rowContainer}>
                            <TextInput style={styles.inputFieldBigger} placeholder="Membre Supérieur Gauche"/>
                            <TextInput style={styles.inputFieldBigger} placeholder="Membre Supérieur Droit"/>
                        </View>
                        <View style={styles.rowContainer}>
                            <TextInput style={styles.inputFieldBigger} placeholder="Membre Inférieur Gauche"/>
                            <TextInput style={styles.inputFieldBigger} placeholder="Membre Inférieur Droit"/>
                        </View>
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
        textAlign: 'center',
        maxWidth: 186,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 28,
        color: 'white'
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
    inputFieldBigger: {
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 17,
        backgroundColor: 'white',
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir-Roman',
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
