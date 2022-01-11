import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function MorbidityEstimationForm(props) {
    return (
        <View>
            <Text style={styles.header}>Cas Des Morbidites</Text>
            <ScrollView style={styles.inputContainer} persistentScrollbar={true}>
                <Text style={{...styles.inputLabelBigger, marginTop: 0}}>Aveugles</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.inputFieldContainer}>
                        <Text style={styles.inputLabel}># des hommes</Text>
                        <TextInput style={styles.inputField} onChange={(e) => props.setNumMenBlind(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numMenBlind || '0').toString()} />
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <Text style={styles.inputLabel}># des femmes</Text>
                        <TextInput style={styles.inputField} onChange={(e) => props.setNumWomenBlind(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numWomenBlind || '0').toString()} />
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <Text style={styles.inputLabel}>Total des personnes</Text>
                        <TextInput style={styles.inputField} value={props.totalNumBlind.toString()} />
                    </View>
                </View>
                <Text style={styles.inputLabelBigger}>Lymphœdème</Text>
                <View>
                    <Text style={styles.inputLabel}>Hommes</Text>
                    <View>
                        <View style={styles.rowContainer}>
                            <View style={styles.inputFieldContainer}>
                                <Text style={styles.inputLabel}>Membre Supérieur Gauche</Text>
                                <TextInput style={styles.inputFieldBigger} />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <Text style={styles.inputLabel}>Membre Supérieur Droit</Text>
                                <TextInput style={styles.inputFieldBigger} />
                            </View>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.inputFieldContainer}>
                                <Text style={styles.inputLabel}>Membre Inférieur Gauche</Text>
                                <TextInput style={styles.inputFieldBigger} />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <Text style={styles.inputLabel}>Membre Inférieur Droit</Text>
                                <TextInput style={styles.inputFieldBigger} />
                            </View>
                        </View>
                    </View>
                    <Text style={{...styles.inputLabel, marginBottom: 5}}>Femmes</Text>
                    <View>
                        <View style={styles.rowContainer}>
                            <View style={styles.inputFieldContainer}>
                                <Text style={styles.inputLabel}>Membre Supérieur Gauche</Text>
                                <TextInput style={styles.inputFieldBigger} />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <Text style={styles.inputLabel}>Membre Supérieur Droit</Text>
                                <TextInput style={styles.inputFieldBigger} />
                            </View>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.inputFieldContainer}>
                                <Text style={styles.inputLabel}>Membre Inférieur Gauche</Text>
                                <TextInput style={styles.inputFieldBigger} />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <Text style={styles.inputLabel}>Membre Inférieur Droit</Text>
                                <TextInput style={styles.inputFieldBigger} />
                            </View>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.inputFieldContainer}>
                                <Text style={styles.inputLabel}>Left Breast</Text>
                                <TextInput style={styles.inputFieldBigger} />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <Text style={styles.inputLabel}>Right Breast</Text>
                                <TextInput style={styles.inputFieldBigger} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.inputFieldContainer}>
                            <Text style={styles.inputLabel}># des hommes</Text>
                            <TextInput style={styles.inputField} onChange={(e) => props.setNumMenBlind(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numMenBlind || '0').toString()} />
                        </View>
                        <View style={styles.inputFieldContainer}>
                            <Text style={styles.inputLabel}># des femmes</Text>
                            <TextInput style={styles.inputField} onChange={(e) => props.setNumWomenBlind(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numWomenBlind || '0').toString()} />
                        </View>
                        <View style={styles.inputFieldContainer}>
                            <Text style={styles.inputLabel}>Total des personnes</Text>
                            <TextInput style={styles.inputField} value={props.totalNumBlind.toString()} />
                        </View>
                    </View>
                </View>
                <Text style={styles.inputLabelBigger}>Trichiasis</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.inputFieldContainer}>
                        <Text style={styles.inputLabel}># des hommes</Text>
                        <TextInput style={styles.inputField} onChange={(e) => props.setNumMenTrichiasis(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numMenTrichiasis || '0').toString()} />
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <Text style={styles.inputLabel}># des femmes</Text>
                        <TextInput style={styles.inputField} onChange={(e) => props.setNumWomenTrichiasis(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numWomenTrichiasis || '0').toString()} />
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <Text style={styles.inputLabel}>Total des personnes</Text>
                        <TextInput style={styles.inputField} value={props.totalNumTrichiasis.toString()} />
                    </View>
                </View>
                <Text style={styles.inputLabelBigger}>Ver de guinée</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.inputFieldContainer}>
                        <Text style={styles.inputLabel}># des hommes</Text>
                        <TextInput style={styles.inputField} onChange={(e) => props.setNumMenGuineaWorm(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numMenGuineaWorm || '0').toString()} />
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <Text style={styles.inputLabel}># des femmes</Text>
                        <TextInput style={styles.inputField} onChange={(e) => props.setNumWomenGuineaWorm(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numWomenGuineaWorm || '0').toString()} />
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <Text style={styles.inputLabel}>Total des personnes</Text>
                        <TextInput style={styles.inputField} value={props.totalNumGuineaWorm.toString()} />
                    </View>
                </View>
                <Text style={styles.inputLabelBigger}>Hydrocèles</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.inputFieldContainer}>
                        <Text style={styles.inputLabel}># des hommes</Text>
                        <TextInput style={styles.inputField} onChange={(e) => props.setNumMenHydroceles(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numMenHydroceles || '0').toString()} />
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
        textAlign: 'center',
        maxWidth: 300,
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
        marginHorizontal: 15,
        paddingHorizontal: 19,
        marginBottom: 210,
    },
    inputLabel: {
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir-Roman',
        fontSize: 11,
        lineHeight: 13,
        color: 'white',
        marginTop: 3,
    },
    inputLabelBigger: {
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir-Roman',
        fontSize: 17,
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
