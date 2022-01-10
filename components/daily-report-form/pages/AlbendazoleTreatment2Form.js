import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function AlbendazoleTreatment2Form(props) {
    return (
        <View>
            <Text style={styles.header}>Traitement</Text>
            <Text style={styles.smallerHeader}>Albendazole (Géohelminthiases)</Text>
            <View style={styles.inputContainer}>
                <Text style={{...styles.inputLabel, fontSize: 19, lineHeight: 22}} ></Text>
                <Text style={styles.inputLabel}>Hommes 5-14 ans</Text>
                <TextInput style={styles.inputField} 
                    onChange={(e) => props.setNumMenAlb(parseInt(e.nativeEvent.text) || 0)}
                    defaultValue={(props.numMenAlb || '').toString()}   
                    placeholder='# Hommes'
                    />

                <Text style={styles.inputLabel}>Femmes 5-14 ans</Text>
                <TextInput style={styles.inputField} 
                    onChange={(e) => props.setNumWomenAlb(parseInt(e.nativeEvent.text) || 0)}
                    defaultValue={(props.numWomenAlb || '').toString()} 
                    placeholder='# Femmes' 
                />
                <Text style={styles.inputLabel}>Total général des personnes traitées (Albendazole)</Text>
                <TextInput style={styles.inputField} 
                    value={ (props.totalNumAlb || 0).toString()}
                />

                <Text style={styles.inputLabel}>Couverture thérapeutique (Géohelminthiases)</Text>
                <TextInput style={styles.inputField} 
                    value={ (props.totalGeohelminthiasesCoverage|| 0).toString() + "%"}
                />

            <Text style={styles.inputLabel}>Nombre d’effets secondaires notifies (général)</Text>
                <TextInput style={styles.inputField} 
                    onChange={(e) => props.setNumSideEffects(parseInt(e.nativeEvent.text) || 0)}
                    defaultValue={(props.numSideEffects || '').toString()} 
                    placeholder='# d’effets secondaires notifies' 
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
    smallerHeader: {
        paddingVertical: 18,
        alignSelf: 'center',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 24,
        color: 'white',
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
