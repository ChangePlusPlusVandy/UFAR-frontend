import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Denumber1Form() {
    return (
        <View>
            <Text style={styles.header}>Denumber</Text>
            <ScrollView style={styles.inputContainer}>
                <View style={styles.rowContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={{...styles.inputLabel, fontSize: 19, lineHeight: 22}} >Men</Text>
                        <Text style={styles.inputLabel}># of children {'<'} 6 months</Text>
                        <TextInput style={styles.inputField} />
                        <Text style={styles.inputLabel}># of children 6 months - {'<'}5 years</Text>
                        <TextInput style={styles.inputField} />
                        <Text style={styles.inputLabel}># of children 5 - {'<'}15 years</Text>
                        <TextInput style={styles.inputField} />
                        <Text style={styles.inputLabel}># of Persons 15 years and older</Text>
                        <TextInput style={styles.inputField} />
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.inputLabel}>Total Number of Men</Text>
                        <TextInput style={styles.inputField} />
                    </View>
                </View>
                <View style={{...styles.rowContainer, marginTop: 20}}>
                    <View style={styles.leftContainer}>
                        <Text style={{...styles.inputLabel, fontSize: 17, lineHeight: 20}} >Women</Text>
                        <Text style={styles.inputLabel}># of children {'<'} 6 months</Text>
                        <TextInput style={styles.inputField} />
                        <Text style={styles.inputLabel}># of children 6 months - {'<'}5 years</Text>
                        <TextInput style={styles.inputField} />
                        <Text style={styles.inputLabel}># of children 5 - {'<'}15 years</Text>
                        <TextInput style={styles.inputField} />
                        <Text style={styles.inputLabel}># of Persons 15 years and older</Text>
                        <TextInput style={styles.inputField} />
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.inputLabel}>Total Number of Women</Text>
                        <TextInput style={styles.inputField} />
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
        marginBottom: 175,
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
