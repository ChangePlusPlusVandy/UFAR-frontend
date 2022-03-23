import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function MedicinalSupplyForm(props) {
  return (
    <View>
      <Text style={styles.header}>Approvisionement en medicaments</Text>
      <View style={styles.inputContainer}>
                <Text style={styles.inputLabelBigger} >Quantité des medicants restant lors de la DMM antérieur</Text>
                <Text style={styles.inputLabel}>Mectizan</Text>
                <TextInput style={styles.inputField} value={props.numMectizanRemaining.toString()}  onChange={(e) => props.setNumMectizanRemaining(parseInt(e.nativeEvent.text) || 0)}/>
                <Text style={styles.inputLabel}>Albendazole</Text>
                <TextInput style={styles.inputField} value={props.numAlbendazoleRemaining.toString()}  onChange={(e) => props.setNumAlbendazoleRemaining(parseInt(e.nativeEvent.text) || 0)}/>
                <Text style={styles.inputLabel}>Praziquantel</Text>
                <TextInput style={styles.inputField} value={props.numPraziquantelRemaining.toString()}  onChange={(e) => props.setNumPraziquantelRemaining(parseInt(e.nativeEvent.text) || 0)}/>
            </View>
            </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 18,
    alignSelf: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
    fontWeight: "bold",
    fontSize: 23,
    lineHeight: 28,
    color: "white",
  },
  inputContainer: {
    marginHorizontal: 34,
  },
  inputLabel: {
    fontFamily: Platform.OS === "android" ? "sans-serif" : "Avenir-Roman",
    fontSize: 12,
    lineHeight: 13,
    color: "white",
  },
  inputLabelBigger: {
    fontFamily: Platform.OS === "android" ? "sans-serif" : "Avenir-Roman",
    fontSize: 15,
    lineHeight: 22,
    color: "white",
  },
  inputField: {
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 17,
    backgroundColor: "white",
    fontFamily:
      Platform.OS === "android" ? "sans-serif-medium" : "Avenir-Roman",
    fontSize: 11,
    lineHeight: 13,
    color: "black",
    textAlign: "center",
    minWidth: 100,

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
  RNPickerSelectInput: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 17,
    backgroundColor: "white",
    fontFamily:
      Platform.OS === "android" ? "sans-serif-medium" : "Avenir-Roman",
    fontSize: 11,
    lineHeight: 13,
    color: "black",
  },
  RNPickerSelectContainer: {
    marginVertical: 5,
    borderRadius: 17,
    backgroundColor: "white",

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
  RNPickerSelectIconContainer: {
    justifyContent: "center",
    right: 15,
    height: 37,
    borderLeftColor: "#D6D6D6",
    borderLeftWidth: 0.5,
    paddingTop: 4,
    paddingLeft: 10,
  },
  placeholder: {
    color: "#9D9D9D",
  },
});
