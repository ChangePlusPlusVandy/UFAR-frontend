import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function MorbidityEstimationForm(props) {
    return (
        <View>
            <Text style={styles.header}>Estimation of Morbidity Cases</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabelBigger}>Blind</Text>
                <View style={styles.rowContainer}>
                    <TextInput style={styles.inputField} onChange={(e) => props.setNumMenBlind(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numMenBlind || '').toString()} placeholder="# of Men" />
                    <Text style={styles.text}>+</Text>
                    <TextInput style={styles.inputField} onChange={(e) => props.setNumWomenBlind(parseInt(e.nativeEvent.text) || 0)} defaultValue={(props.numWomenBlind || '').toString()} placeholder="# of Women" />
                    <Text style={styles.text}>=</Text>
                    <TextInput style={styles.inputField} value={props.totalNumBlind.toString()} placeholder="Total" />
                </View>
                <Text style={{...styles.inputLabelBigger, marginVertical: 10}}>Lymphedema</Text>
                <View>
                    <Text style={styles.inputLabel}>Men</Text>
                    <View>
                        <View style={styles.rowContainer}>
                            <TextInput style={styles.inputFieldBigger} placeholder="Upper Left Limb"/>
                            <TextInput style={styles.inputFieldBigger} placeholder="Upper Right Limb"/>
                        </View>
                        <View style={styles.rowContainer}>
                            <TextInput style={styles.inputFieldBigger} placeholder="Lower Left Limb"/>
                            <TextInput style={styles.inputFieldBigger} placeholder="Lower Right Limb"/>
                        </View>
                    </View>
                    <Text style={styles.inputLabel}>Women</Text>
                    <View>
                        <View style={styles.rowContainer}>
                            <TextInput style={styles.inputFieldBigger} placeholder="Upper Left Limb"/>
                            <TextInput style={styles.inputFieldBigger} placeholder="Upper Right Limb"/>
                        </View>
                        <View style={styles.rowContainer}>
                            <TextInput style={styles.inputFieldBigger} placeholder="Lower Left Limb"/>
                            <TextInput style={styles.inputFieldBigger} placeholder="Lower Right Limb"/>
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
        maxWidth: 178,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 23,
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
    },
    text: {
        color: 'white',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 12,
        lineHeight: 14,
    }
})
