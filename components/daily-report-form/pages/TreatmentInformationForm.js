import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import CheckBox from '../CheckBox';

export default function TreatmentInformationForm(props) {
    const toggleOnchocerciasis = () => props.setOnchocerciasis(prev => !prev);
    const toggleOnchocerciasisFirst = () => props.setOnchocerciasisFirst(prev => {
        props.setOnchocerciasisSecond(prev); 
        return !prev;
    });
    const toggleOnchocerciasisSecond = () => props.setOnchocerciasisSecond(prev => {
        props.setOnchocerciasisFirst(prev);
        return !prev;
    });

    const toggleLymphaticFilariasis = () => props.setLymphaticFilariasis(prev => !prev);
    const toggleLFMectizanAlbendazole = () => props.setLFMectizanAlbendazole(prev => !prev);
    const toggleLFAlbendazoleFirst = () => props.setLFAlbendazoleFirst(prev => {
        props.setLFAlbendazoleSecond(prev); 
        return !prev;
    });
    const toggleLFAlbendazoleSecond = () => props.setLFAlbendazoleSecond(prev => {
        props.setLFAlbendazoleFirst(prev);
        return !prev;
    });

    const toggleSchistosomiasis = () => props.setSchistosomiasis(prev => !prev);
    const toggleSoilTransmittedHelminthiasis = () => props.setSoilTransmittedHelminthiasis(prev => !prev);
    const toggleTrachoma = () => props.setTrachoma(prev => !prev);

    return (
        <View>
            <Text style={styles.header}>Treatment Information</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Select</Text>
                <Pressable style={styles.inputField} onPress={toggleOnchocerciasis}>
                    <CheckBox isChecked={props.onchocerciasis} style={styles.checkBox} />
                    <Text style={styles.choiceLabel}>Onchocerciasis</Text>
                </Pressable>
                {props.onchocerciasis && 
                    <View style={styles.inputSubfield1}>
                        <View style={styles.singleRowContainer1}>
                            <View>
                                <Text style={styles.inputSubfieldLabel}>1st Round</Text>
                                <CheckBox isChecked={props.onchocerciasisFirst} style={styles.subfieldCheckBox} onPress={toggleOnchocerciasisFirst} />
                            </View>
                            <View>
                                <Text style={styles.inputSubfieldLabel}>2nd Round</Text>
                                <CheckBox isChecked={props.onchocerciasisSecond} style={styles.subfieldCheckBox} onPress={toggleOnchocerciasisSecond} />
                            </View>
                        </View>
                    </View>
                }
                <Pressable style={styles.inputField} onPress={toggleLymphaticFilariasis}>
                    <CheckBox isChecked={props.lymphaticFilariasis} style={styles.checkBox} />
                    <Text style={styles.choiceLabel}>Lymphatic filariasis</Text>
                </Pressable>
                {props.lymphaticFilariasis && 
                    <View style={styles.inputSubfield2}>
                        <View style={styles.cyclesInputContainer}>
                            <Text style={styles.inputSubfieldLabel}>Cycles</Text>
                            <TextInput style={styles.cyclesInput} defaultValue={props.numCyclesLFMectizanAlbendazole.toString()} onChange={(e) => props.setNumCyclesLFMectizanAlbendazole(parseInt(e.nativeEvent.text) || 0)} />
                            <TextInput style={{...styles.cyclesInput, marginTop: 22}} defaultValue={props.numCyclesLFAlbendazole.toString()} onChange={(e) => props.setNumCyclesLFAlbendazole(parseInt(e.nativeEvent.text) || 0)} />
                        </View>
                        <View style={{flex: 1}}>
                            <View style={{...styles.singleRowContainer2, borderBottomColor: '#EC1C24', borderBottomWidth: 1, marginBottom: 5, paddingBottom: 5}}>
                                <Text style={styles.choiceLabel}>Mectizan + Albendazole</Text>
                                <View style={{marginHorizontal: 12}}>
                                    <Text style={styles.inputSubfieldLabel}>Select</Text>
                                    <CheckBox isChecked={props.LFMectizanAlbendazole} style={styles.subfieldCheckBox} onPress={toggleLFMectizanAlbendazole} />
                                </View>
                            </View>
                            <View style={styles.singleRowContainer2}>
                                <Text style={styles.choiceLabel}>Albendazole</Text>
                                <View>
                                    <Text style={styles.inputSubfieldLabel}>1st Round</Text>
                                    <CheckBox isChecked={props.LFAlbendazoleFirst} style={styles.subfieldCheckBox} onPress={toggleLFAlbendazoleFirst} />
                                </View>
                                <View>
                                    <Text style={styles.inputSubfieldLabel}>2nd Round</Text>
                                    <CheckBox isChecked={props.LFAlbendazoleSecond} style={styles.subfieldCheckBox} onPress={toggleLFAlbendazoleSecond} />
                                </View>
                            </View>
                        </View>
                    </View>
                }
                <Pressable style={styles.inputField} onPress={toggleSchistosomiasis}>
                    <CheckBox isChecked={props.schistosomiasis} style={styles.checkBox} />
                    <Text style={styles.choiceLabel}>Schistosomiasis</Text>
                </Pressable>
                <Pressable style={styles.inputField} onPress={toggleSoilTransmittedHelminthiasis}>
                    <CheckBox isChecked={props.soilTransmittedHelminthiasis} style={styles.checkBox} />
                    <Text style={styles.choiceLabel}>Soil-transmitted helminthiasis</Text>
                </Pressable>
                <Pressable style={styles.inputField} onPress={toggleTrachoma}>
                    <CheckBox isChecked={props.trachoma} style={styles.checkBox} />
                    <Text style={styles.choiceLabel}>Trachoma</Text>
                </Pressable>
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
        left: 5,
    },
    inputSubfieldLabel: {
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir-Roman',
        fontSize: 11,
        lineHeight: 13,
        color: '#EC1C24',
    },
    inputField: {
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 17,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    inputSubfield1: {
        top: -40,
        marginBottom: -35,
        zIndex: -1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 17,
        backgroundColor: 'white',
        width: '100%',
        height: 90,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    inputSubfield2: {
        top: -40,
        marginBottom: -35,
        zIndex: -1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 17,
        backgroundColor: 'white',
        width: '100%',
        height: 140,
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    checkBox: {
        position: 'absolute',
        left: 10,
    },
    subfieldCheckBox: {
        borderColor: '#EC1C24',
        fillColor: '#EC1C24',
    },
    choiceLabel: {
        color: '#EC1C24',
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir-Roman',
        fontSize: 18,
        lineHeight: 25,
    },
    singleRowContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    singleRowContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    cyclesInputContainer: {
        marginHorizontal: 5,
        alignItems: 'center',
    },
    cyclesInput: {
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        textAlign: 'center',
        width: 25,
    },
})
