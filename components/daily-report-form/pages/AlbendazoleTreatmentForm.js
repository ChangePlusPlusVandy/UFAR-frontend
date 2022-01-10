import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function AlbendazoleTreatmentForm(props) {
    return (
        <View>
            <Text style={styles.header}>Traitement</Text>
            <Text style={styles.header}>Albendazole seul (Filariose lymphatique)</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Hommes</Text>
                <View style={styles.rowContainer}>
                    <TextInput style={styles.inputField} onChange={(e) => props.setNumYoungMenAlbendazoleTreat(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numYoungMenAlbendazoleTreat || '').toString()} placeholder="5 - 14 ans" />
                    <Text style={styles.text}>+</Text>
                    <TextInput style={styles.inputField} onChange={(e) => props.setNumOldMenAlbendazoleTreat(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numOldMenAlbendazoleTreat || '').toString()} placeholder="15 ans et plus" />
                    <Text style={styles.text}>=</Text>
                    <TextInput style={styles.inputField} value={props.totalNumMenAlbendazoleTreat.toString()} placeholder="Total des Hommes traités" />
                <Text style={styles.inputLabel}>Femmes</Text>
                <View style={styles.rowContainer}>
                <TextInput style={styles.inputField} onChange={(e) => props.setNumYoungWomenAlbendazoleTreat(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numYoungWomenAlbendazoleTreat || '').toString()} placeholder="5 - 14 ans" />
                    <Text style={styles.text}>+</Text>
                    <TextInput style={styles.inputField} onChange={(e) => props.setNumOldWomenAlbendazoleTreat(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numOldWomenAlbendazoleTreat || '').toString()} placeholder="15 ans et plus" />
                    <Text style={styles.text}>=</Text>
                    <TextInput style={styles.inputField} value={props.totalNumWomenAlbendazoleTreat.toString()} placeholder="Total des Femmes traités" />
                    <TextInput style={styles.inputField} value={props.totalNumAlbendazoleTreat.toString()} placeholder="Total général des personnes traitées" />
                    <TextInput style={styles.inputField} value={props.totalCoverageAlbendazoleTreat.toString()} placeholder="Couverture thérapeutique (Onchocercose)" />
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
    text: {
        color: 'white',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 12,
        lineHeight: 14,
    }
})