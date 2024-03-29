import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function DrugManagementAlbendazoleForm(props) {
  return (
    <View>
      <View style={styles.rowContainer}>
        <View style={styles.inputFieldContainer}>
          <Text style={styles.inputLabel}>Reçue</Text>
          <TextInput
            editable={!props.validate}
            style={styles.inputField}
            onChange={(e) =>
              props.setAlbendazoleReceived(parseInt(e.nativeEvent.text) || 0)
            }
            defaultValue={(props.albendazoleReceived || "0").toString()}
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Text style={styles.inputLabel}>Utilisée</Text>
          <TextInput
            editable={!props.validate}
            style={styles.inputField}
            onChange={(e) =>
              props.setAlbendazoleUsed(parseInt(e.nativeEvent.text) || 0)
            }
            defaultValue={(props.albendazoleUsed || "0").toString()}
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Text style={styles.inputLabel}>Perdue</Text>
          <TextInput
            editable={!props.validate}
            style={styles.inputField}
            onChange={(e) =>
              props.setAlbendazoleLost(parseInt(e.nativeEvent.text) || 0)
            }
            defaultValue={(props.albendazoleLost || "0").toString()}
          />
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.inputFieldContainer}>
          <Text style={{ ...styles.inputLabelBigger, marginBottom: 0 }}>
            Restante
          </Text>
          <TextInput
            editable={!props.validate}
            style={styles.inputFieldBigger}
            value={props.albendazoleRemaining.toString()}
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Text style={{ ...styles.inputLabelBigger, marginBottom: 0 }}>
            Rendue au C.S.
          </Text>
          <TextInput
            editable={!props.validate}
            style={styles.inputFieldBigger}
            onChange={(e) =>
              props.setAlbendazoleReturned(parseInt(e.nativeEvent.text) || 0)
            }
            defaultValue={(props.albendazoleReturned || "0").toString()}
          />
        </View>
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
    fontFamily: Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 28,
    color: "white",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    lineHeight: 20,
    color: "white",
    marginVertical: 10,
  },
  inputFieldContainer: {
    alignItems: "center",
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
    width: 85,
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
  inputFieldBigger: {
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
    width: 125,
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
