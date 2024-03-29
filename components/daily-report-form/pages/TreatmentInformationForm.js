import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';

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
    const toggleLFIvermectineAlbendazole = () => props.setLFIvermectineAlbendazole(prev => !prev);
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
        <View height={540}>
            <Text style={styles.header}>Maladies traitées</Text>
            <ScrollView style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Sélectionner</Text>
                <Pressable disabled={props.validate} style={styles.inputField} onPress={toggleOnchocerciasis}>
                    <CheckBox isChecked={props.onchocerciasis} style={styles.checkBox} onPress={toggleOnchocerciasis} disabled={props.validate}/>
                    <Text style={styles.choiceLabel}>Onchocercose</Text>
                </Pressable>
                {props.onchocerciasis && 
                    <View style={styles.inputSubfieldContainer}>
                        <View style={styles.singleRowContainer}>
                            <View style={styles.inputCyclesContainer}>
                                <Text style={styles.inputSubfieldLabel}># de cycle</Text>
                                <TextInput editable={!props.validate} style={styles.inputCycles} defaultValue={props.numCyclesOnchocerciasis.toString()} onChange={(e) => props.setNumCyclesOnchocerciasis(parseInt(e.nativeEvent.text) || 0)} />
                            </View>
                            <View style={styles.inputSubfieldDetailsContainer}>
                                <Text style={styles.choiceLabel}>Onchocercose</Text>
                                <View>
                                    <Text style={styles.inputSubfieldLabel}>1er tour</Text>
                                    <CheckBox isChecked={props.onchocerciasisFirst} style={styles.subfieldCheckBox} onPress={toggleOnchocerciasisFirst} fillColor='#cb0d00' disabled={props.validate}/>
                                </View>
                                <View>
                                    <Text style={styles.inputSubfieldLabel}>2e tour</Text>
                                    <CheckBox isChecked={props.onchocerciasisSecond} style={styles.subfieldCheckBox} onPress={toggleOnchocerciasisSecond} fillColor='#cb0d00' disabled={props.validate}/>
                             </View>
                            </View>
                        </View>
                    </View>
                }
                <Pressable disabled={props.validate} style={styles.inputField} onPress={toggleLymphaticFilariasis}>
                    <CheckBox isChecked={props.lymphaticFilariasis} style={styles.checkBox} onPress={toggleLymphaticFilariasis} disabled={props.validate}/>
                    <Text style={styles.choiceLabel}>Filariose lymphatique</Text>
                </Pressable>
                {props.lymphaticFilariasis && 
                    <View style={styles.inputSubfieldContainer}>
                        <View style={styles.singleRowContainer}>
                            <View style={styles.inputCyclesContainer}>
                                <Text style={styles.inputSubfieldLabel}># de cycle</Text>
                                <TextInput editable={!props.validate} style={styles.inputCycles} 
                                    defaultValue={props.numCyclesLymphaticFilariasis.toString()} 
                                    onChange={(e) => props.setNumCyclesLymphaticFilariasis(parseInt(e.nativeEvent.text) || 0)} 
                                />
                            </View>
                            <View style={styles.inputSubfieldDetailsContainer}>
                                <Text style={styles.choiceLabel}>Ivermectine + Albendazole</Text>
                                <View>
                                    <Text style={styles.inputSubfieldLabel}>Sélectionner</Text>
                                    <CheckBox isChecked={props.LFIvermectineAlbendazole} style={styles.subfieldCheckBox} onPress={toggleLFIvermectineAlbendazole} fillColor='#cb0d00' disabled={props.validate}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.horizontalDivider} />
                        <View style={styles.singleRowContainer}>
                            {/* <View style={styles.inputCyclesContainer}>
                                <Text style={styles.inputSubfieldLabel}># de cycle</Text>
                                <TextInput editable={!props.validate} style={styles.inputCycles} defaultValue={props.numCyclesLFAlbendazole.toString()} onChange={(e) => props.setNumCyclesLFAlbendazole(parseInt(e.nativeEvent.text) || 0)} />
                            </View> */}
                            <View style={{...styles.inputSubfieldDetailsContainer, marginLeft: "16%"}}>
                                <Text style={styles.choiceLabel}>Albendazole seul</Text>
                                <View>
                                    <Text style={styles.inputSubfieldLabel}>1er tour</Text>
                                    <CheckBox isChecked={props.LFAlbendazoleFirst} style={styles.subfieldCheckBox} onPress={toggleLFAlbendazoleFirst} fillColor='#cb0d00' disabled={props.validate}/>
                                </View>
                                <View>
                                    <Text style={styles.inputSubfieldLabel}>2e tour</Text>
                                    <CheckBox isChecked={props.LFAlbendazoleSecond} style={styles.subfieldCheckBox} onPress={toggleLFAlbendazoleSecond} fillColor='#cb0d00' disabled={props.validate}/>
                                </View>
                            </View>
                        </View>
                    </View>
                }

                <Pressable disabled={props.validate} style={styles.inputField} onPress={toggleSchistosomiasis}>
                    <CheckBox isChecked={props.schistosomiasis} style={styles.checkBox} onPress={toggleSchistosomiasis} disabled={props.validate}/>
                    <Text style={styles.choiceLabel}>Schistosomiase</Text>
                </Pressable>
                {props.schistosomiasis && 
                    <View style={styles.inputSubfieldContainer}>
                        <View style={styles.singleRowContainer}>
                            <View style={styles.inputCyclesContainer}>
                                <Text style={styles.inputSubfieldLabel}># de cycle</Text>
                                <TextInput editable={!props.validate} style={styles.inputCycles} defaultValue={props.numCyclesSchistosomiasis.toString()} onChange={(e) => props.setNumCyclesSchistosomiasis(parseInt(e.nativeEvent.text) || 0)} />
                            </View>
                        </View>
                    </View>
                }

                <Pressable disabled={props.validate} style={styles.inputField} onPress={toggleSoilTransmittedHelminthiasis}>
                    <CheckBox isChecked={props.soilTransmittedHelminthiasis} style={styles.checkBox} onPress={toggleSoilTransmittedHelminthiasis} disabled={props.validate} />
                    <Text style={styles.choiceLabel}>Géohelminthiases</Text>
                </Pressable>
                {props.soilTransmittedHelminthiasis && 
                    <View style={styles.inputSubfieldContainer}>
                        <View style={styles.singleRowContainer}>
                            <View style={styles.inputCyclesContainer}>
                                <Text style={styles.inputSubfieldLabel}># de cycle</Text>
                                <TextInput editable={!props.validate} style={styles.inputCycles} defaultValue={props.numCyclesSTH.toString()} onChange={(e) => props.setNumCyclesSTH(parseInt(e.nativeEvent.text) || 0)} />
                            </View>
                        </View>
                    </View>
                }

                <Pressable disabled={props.validate} style={styles.inputField} onPress={toggleTrachoma}>
                    <CheckBox isChecked={props.trachoma} style={styles.checkBox} onPress={toggleTrachoma} disabled={props.validate}/>
                    <Text style={styles.choiceLabel}>Trachome</Text>
                </Pressable>
                {props.trachoma && 
                    <View style={styles.inputSubfieldContainer}>
                        <View style={styles.singleRowContainer}>
                            <View style={styles.inputCyclesContainer}>
                                <Text style={styles.inputSubfieldLabel}># de cycle</Text>
                                <TextInput editable={!props.validate} style={styles.inputCycles} defaultValue={props.numCyclesTrachoma.toString()} onChange={(e) => props.setNumCyclesTrachoma(parseInt(e.nativeEvent.text) || 0)} />
                            </View>
                        </View>
                    </View>
                }

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
        fontSize: 12,
        lineHeight: 13,
        color: 'white',
        left: 5,
    },
    inputSubfieldLabel: {
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir-Roman',
        fontSize: 9,
        lineHeight: 13,
        color: '#cb0d00',
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
    inputSubfieldContainer: {
        zIndex: -1,
        top: -40,
        marginBottom: -35,
        paddingHorizontal: 15,
        paddingTop: 40,
        paddingBottom: 5,
        borderRadius: 17,
        backgroundColor: 'white',

        /* Android Drop Shadow Styling */
        elevation: 9,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 10,
        shadowOpacity: 0.3,
    },
    checkBox: {
        position: 'absolute',
        left: 10,
    },
    subfieldCheckBox: {
        borderColor: '#cb0d00',
    },
    choiceLabel: {
        color: '#cb0d00',
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Avenir-Roman',
        fontSize: 18,
        lineHeight: 25,
    },
    singleRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputCyclesContainer: {
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
    },
    inputCycles: {
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        textAlign: 'center',
        width: 25,
    },
    inputSubfieldDetailsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    horizontalDivider: {
        backgroundColor: '#cb0d00',
        height: 1,
        margin: 5,
        marginLeft: "15%",

    }
})
