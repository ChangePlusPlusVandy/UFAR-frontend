import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Chevron } from "react-native-shapes";
import CheckBox from '../CheckBox';
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export default function TrainingSupervisionForm(props) {
  const [date, setDate] = React.useState(new Date(Date.now()));

  const options = [{label: 'Oui', value: 'Oui'}, {label: 'Non', value: 'Oui'}];

  const toggleSupervisionDCTraining = () => props.setSupervisionDCTraining(prev => !prev);

  console.log("props.supervisionHierachyVisits", props.supervisionHierachyVisits);

  return (
    <View>
      <Text style={styles.header}>Supervision de la formation</Text>
      <View style={styles.inputContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Text style={styles.inputLabel}>Organisation de la supervision de la formation des DCs</Text>
                  <CheckBox isChecked={props.supervisionDCTraining} onPress={toggleSupervisionDCTraining} />
              </View>
      </View>
      {props.supervisionDCTraining && <> 
      <View style={styles.inputContainer}>
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
              props.setSupervisionHierachyVisits(value);
            }}
            items={options}
            value={props.supervisionHierachyVisits}
            placeholder={{
              label: "Visites de la supervision de la hierarchie cette annee lors de la formation",
              value: null,
            }}
            Icon={() => <Chevron size={1.5} color="#9D9D9D" />}
          />
        </View>
      </View>
      </>}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 18,
    marginHorizontal: 45,
    textAlign: 'center',
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
