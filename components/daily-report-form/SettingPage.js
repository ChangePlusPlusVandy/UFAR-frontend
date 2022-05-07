import { AuthContext } from '../../src/context/AuthContext';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

export default function SettingsPage(){

  const authContext = useContext(AuthContext);
    
  console.log(authContext.authState.user);

    return (
        <View style = {styles.container}>
            <Text style={styles.header}>Paramètres</Text>
            <Text style={styles.inputLabelBigger}>Nom</Text>
            <Text style={styles.inputField}>{authContext.authState.user?.name || ""}</Text>
            <Text style={styles.inputLabelBigger}>Rôle</Text>
            <Text style={styles.inputField}>{authContext.authState.user?.role || ""}</Text>
            <Text style={styles.inputLabelBigger}>Zone de Santé</Text>
            <Text style={styles.inputField}>{authContext.authState.user?.health_zone.name || ""}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 18,
        alignSelf: "center",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
        fontSize: 30,
        lineHeight: 28,
        color: "red",
      },
      inputContainer: {
        marginHorizontal: 30,
      },
      inputLabel: {
        fontFamily: Platform.OS === "android" ? "sans-serif" : "Avenir-Roman",
        fontSize: 12,
        lineHeight: 13,
        color: "red",
      },
      inputLabelBigger: {
        fontFamily: Platform.OS === "android" ? "sans-serif" : "Avenir-Roman",
        fontSize: 20,
        lineHeight: 22,
        color: "red",
        marginBottom: 5,
        alignSelf: 'center',
        fontWeight: 'bold',
      },
      inputField: {
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginBottom: 25,
        borderRadius: 30,
        alignSelf: 'center',
        backgroundColor: "white",
        fontFamily:
          Platform.OS === "android" ? "sans-serif-medium" : "Avenir-Roman",
        fontSize: 20,
        lineHeight: 20,
        color: "black",
        textAlign: "center",
        minWidth: 200,
        maxWidth: 300,
    
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
    });