import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function ProcessingAlbendazoleForm(props) {
    return (
        <View>
            <Text style={styles.inputLabelBigger}>Hommes</Text>
            <View style={styles.rowContainer}>
                <View style={styles.inputFieldContainer}>
                    <Text style={styles.inputLabel}>5 - 14 ans</Text>
                    <TextInput style={styles.inputField} onChange={(e) => props.setNumYoungMenAlbendazoleTreat(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numYoungMenAlbendazoleTreat || '0').toString()} />
                </View>
                <View style={styles.inputFieldContainer}>
                    <Text style={styles.inputLabel}>15 ans et plus</Text>
                    <TextInput style={styles.inputField} onChange={(e) => props.setNumOldMenAlbendazoleTreat(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numOldMenAlbendazoleTreat || '0').toString()} />
                </View>
                <View style={styles.inputFieldContainer}>
                    <Text style={styles.inputLabel}>Total</Text>
                    <TextInput style={styles.inputField} value={props.totalNumMenAlbendazoleTreat.toString()} />
                </View>
            </View>

            <Text style={styles.inputLabelBigger}>Femmes</Text>
            <View style={styles.rowContainer}>
                <View style={styles.inputFieldContainer}>
                    <Text style={styles.inputLabel}>5 - 14 ans</Text>
                    <TextInput style={styles.inputField} onChange={(e) => props.setNumYoungWomenAlbendazoleTreat(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numYoungWomenAlbendazoleTreat || '0').toString()} />
                </View>
                <View style={styles.inputFieldContainer}>
                    <Text style={styles.inputLabel}>15 ans et plus</Text>
                    <TextInput style={styles.inputField} onChange={(e) => props.setNumOldWomenAlbendazoleTreat(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numOldWomenAlbendazoleTreat || '0').toString()} />
                </View>
                <View style={styles.inputFieldContainer}>
                    <Text style={styles.inputLabel}>Total</Text>
                    <TextInput style={styles.inputField} value={props.totalNumWomenAlbendazoleTreat.toString()} />
                </View>
            </View>

            <View style={styles.rowContainer}>
                <View style={styles.inputFieldContainer}>
                    <Text style={{...styles.inputLabelBigger, marginBottom: 0}}>Total traité</Text>
                    <TextInput style={styles.inputField} value={props.totalNumAlbendazoleTreat.toString()} />
                </View>
                <View style={styles.inputFieldContainer}>
                    <Text style={{...styles.inputLabelBigger, marginBottom: 0}}>Total couvert</Text>
                    <TextInput style={styles.inputField} value={`${isFinite(props.totalCoverageAlbendazoleTreat) ? props.totalCoverageAlbendazoleTreat.toString() : " --- "}%`} />
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
        fontSize: 12,
        lineHeight: 13,
        color: 'white',
    },
    inputLabelBigger: {
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir-Roman',
        fontSize: 15,
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
