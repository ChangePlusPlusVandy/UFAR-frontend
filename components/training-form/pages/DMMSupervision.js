import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

// done 

export default function DMMSupervisionForm(props) {
  const options = ["Oui", "Non"];
  const [date, setDate] = React.useState(new Date(Date.now()));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <View>
      <Text style={styles.header}>SUPERVISION DE LA DMM</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          Date du début de la supervision de DMM dans les AS
        </Text>
        <TextInput
          onPressIn={() => {
            DateTimePickerAndroid.open({
              value: props.ASDMMDebutDate,
              onChange: (event, selectedDate) => {
                props.setASDMMDebutDate(selectedDate);
              },
              mode: "date",
              is24Hour: true,
            });
          }}
          editable={!props.validate}
          style={styles.inputField}
          value={new Date(props.ASDMMDebutDate).toLocaleDateString()}
          placeholder="MM/DD/YYYY"
        />
        <Text style={styles.inputLabel}>
          Date de la fin de la supervision de DMM dans les AS
        </Text>
        <TextInput
          onPressIn={() => {
            DateTimePickerAndroid.open({
              value: props.ASStartDate,
              onChange: (event, selectedDate) => {
                props.setASStartDate(selectedDate);
              },
              mode: "date",
              is24Hour: true,
            });
          }}
          editable={!props.validate}
          style={styles.inputField}
          value={new Date(props.ASStartDate).toLocaleDateString()}
          placeholder="MM/DD/YYYY"
        />
        <View style={styles.RNPickerSelectContainer}>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            style={{
              inputAndroid: styles.RNPickerSelectInput,
              iconContainer: styles.RNPickerSelectIconContainer,
              placeholder: styles.placeholder,
            }}
            onValueChange={(value) => {
              props.setDMMHierarchyVisits(value);
            }}
            items={options}
            value={props.DMMHierarchyVisits}
            placeholder={{
              label:
                "Visites de la supervision de la hierarchie cette annee lors de la DMM",
              value: null,
            }}
            Icon={() => <Chevron size={1.5} color="#9D9D9D" />}
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
