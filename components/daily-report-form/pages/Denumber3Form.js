import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function Denumber3Form(props) {
    return (
        <View>
            <Text style={styles.header}>Denumber</Text>
            <View style={styles.inputContainer}>
                <Text style={{...styles.inputLabel, fontSize: 19, lineHeight: 22}} >Households</Text>
                <Text style={styles.inputLabel}>Number of households visited</Text>
                <TextInput style={styles.inputField} 
                    onChange={(e) => props.setNumHouseholdsVisited(parseInt(e.nativeEvent.text) || 0)}
                    defaultValue={(props.numHouseholdsVisited || '').toString()}   
                    placeholder='# visited'
                    />

                <Text style={styles.inputLabel}>Total number of households treated</Text>
                <TextInput style={styles.inputField} 
                    onChange={(e) => props.setNumHouseholdsTreated(parseInt(e.nativeEvent.text) || 0)}
                    defaultValue={(props.numHouseholdsTreated || '').toString()} 
                    placeholder='# treated' 
                />


                <Text style={styles.inputLabel}>Greographical coverage of the households</Text>
                <TextInput style={styles.inputField} 
                    value={ (props.geographicalCoverageOfHouseholds || 0).toString() + "%"}
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
})
