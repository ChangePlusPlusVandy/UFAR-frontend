import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function TrainingSupervisionForm(props) {
  const [date, setDate] = React.useState(new Date(Date.now()));

  const options = ["Oui", "Non"];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <View>
      <Text style={styles.header}>SUPERVISION DE LA FORMATION</Text>
      <View style={styles.inputContainer}>
        <View style={styles.RNPickerSelectContainer}>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            style={{
              inputAndroid: styles.RNPickerSelectInput,
              iconContainer: styles.RNPickerSelectIconContainer,
              placeholder: styles.placeholder,
            }}
            onValueChange={(value) => {
              props.setSupervisionDCTraining(value);
            }}
            items={options}
            value={props.supervisionDCTraining}
            placeholder={{
              label: "Organisation de la supervision de la formation des DCs",
              value: null,
            }}
            Icon={() => <Chevron size={1.5} color="#9D9D9D" />}
          />
        </View>
        <Text style={styles.inputLabel}>La date du debut de la supervision de la formation des DCs</Text>
        <TextInput
          onPressIn={() => {
            DateTimePickerAndroid.open({
              value: props.supervisionTrainingStartDate,
              onChange: (event, selectedDate) => {
                props.setSupervisionTrainingStartDate(selectedDate);
              },
              mode: "date",
              is24Hour: true,
            });
          }}
          editable={!props.validate}
          style={styles.inputField}
          value={new Date(props.supervisionTrainingStartDate).toLocaleDateString()}
          placeholder="MM/DD/YYYY"
        />
        <Text style={styles.inputLabel}>La date de la fin de la supervision de la formation des DCs</Text>
        <TextInput
          onPressIn={() => {
            DateTimePickerAndroid.open({
              value: props.supervisionTrainingEndDate,
              onChange: (event, selectedDate) => {
                props.setSupervisionTrainingEndDate(selectedDate);
              },
              mode: "date",
              is24Hour: true,
            });
          }}
          editable={!props.validate}
          style={styles.inputField}
          value={new Date(props.supervisionTrainingEndDate).toLocaleDateString()}
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
              props.setSupervisionHierarchyVisits(value);
            }}
            items={options}
            value={props.supervisionHierarchyVisits}
            placeholder={{
              label: "Visites de la supervision de la hierarchie cette annee lors de la formation",
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
