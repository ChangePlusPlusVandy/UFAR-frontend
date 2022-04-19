import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Denumber3Form(props) {

  function handleNumHouseholdsTreated(e) {
      var currValue = parseInt(e.nativeEvent.text);
      if (currValue > props.numHouseholdsVisited) {
          props.setNumHouseholdsTreated(0);
      }
  }

  return (
    <View>
      <Text style={styles.header}>Ménages</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabelBigger}>Ménages</Text>
        <Text style={styles.inputLabel}>Total des ménages visités</Text>
        <TextInput
          editable={!props.validate}
          style={styles.inputField}
          onChange={(e) =>
            props.setNumHouseholdsVisited(parseInt(e.nativeEvent.text) || 0)
          }
          defaultValue={(props.numHouseholdsVisited || "0").toString()}
        />

        <Text style={styles.inputLabel}>Total des ménages traités</Text>
        <TextInput
          editable={!props.validate}
          style={styles.inputField}
          onChange = {handleNumHouseholdsTreated}
          defaultValue={(props.numHouseholdsTreated || "0").toString()}
        />

        <Text style={styles.inputLabel}>
          Couverture géographique des ménages
        </Text>
        <TextInput
          editable={!props.validate}
          style={styles.inputField}
          value={(props.geographicalCoverageOfHouseholds || 0).toString() + "%"}
        />
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
    marginBottom: 5,
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
});
