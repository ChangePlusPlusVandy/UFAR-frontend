import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function DistributorsForm(props) {
  return (
    <View>
      <Text style={styles.header}>DC distributeurs</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}># de DC homme</Text>
        <TextInput
          editable={!props.validate}
          style={styles.inputField}
          onChange={(e) =>
            props.setNumMenDistributors(parseInt(e.nativeEvent.text) || 0)
          }
          defaultValue={(props.numMenDistributors || "0").toString()}
        />
        <Text style={styles.inputLabel}># de DC femmes</Text>
        <TextInput
          editable={!props.validate}
          style={styles.inputField}
          onChange={(e) =>
            props.setNumWomenDistributors(parseInt(e.nativeEvent.text) || 0)
          }
          defaultValue={(props.numWomenDistributors || "0").toString()}
        />
        <Text style={styles.inputLabelBigger}>Total</Text>
        <TextInput
          editable={!props.validate}
          style={styles.inputField}
          value={props.totalNumDistributors.toString()}
          placeholder="Total de DCs"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 18,
    alignSelf: "center",
    textAlign: "center",
    maxWidth: 300,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Helvetica Neue",
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
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "sans-serif" : "Avenir-Roman",
    fontSize: 15,
    lineHeight: 18,
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
    color: "white",
    fontFamily:
      Platform.OS === "android" ? "sans-serif-medium" : "Avenir-Roman",
    fontSize: 12,
    lineHeight: 14,
  },
});
