import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Summary() {
    return (
        <View>
            <Text style={styles.header}>Sommaire</Text>
            <Text style={styles.line}>________________________</Text>
            <View style={styles.marginedView}>
                <Text style={styles.bod}>Nom: Varun Sangal</Text>
                <Text style={styles.bod}>Total de DCs: 100</Text>
                <Text style={styles.bod}>Couverture géographique: 10%</Text>
                <Text style={styles.bod}>Nbre total des hommes: 53</Text>
                <Text style={styles.bod}> </Text>
                <Text style={styles.bod}>Province/Région: Kwango</Text>
                <Text style={styles.bod}>Zone de santé: Koshibanda</Text>
                <Text style={styles.bod}>Aire de santé: Bamba</Text>
                <Text style={styles.bod}>Village/Communauté: Munga</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    marginedView: {
        paddingVertical: 10,
    },
    header: {
        paddingTop: 84,
        paddingBottom: 0,
        alignSelf: 'center',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 40,
        lineHeight: 50,
        color: 'white',
    },
    line: {
        paddingVertical: 3,
        alignSelf: 'flex-start',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Sans-Serif',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 10,
        color: 'white',
        padding: "10%"
    },
    bod: {
        paddingVertical: 14,
        alignSelf: 'flex-start',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Sans-Serif',
        fontWeight: 'normal',
        fontSize: 23,
        padding: "10%",
        lineHeight: 8,
        color: "white"
    }

})
