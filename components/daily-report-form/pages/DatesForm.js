import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function DatesForm(props) {
  const [date, setDate] = React.useState(new Date(Date.now()));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  
  return (
    <View>
      <Text style={styles.header}>Dates</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          Date de la fin de la formation des DCs
        </Text>
        {/* TODO: calendar/date picker? */}
        <TextInput
          onPressIn={() => {
            DateTimePickerAndroid.open({
              value: props.DCTrainingCompletionDate,
              onChange: (event, selectedDate) => {
                props.setDCTrainingCompletionDate(selectedDate);
              },
              mode: 'date',
              is24Hour: true
            })
          }
          }
          editable={!props.validate}
          style={styles.inputField}
          value={new Date(props.DCTrainingCompletionDate).toLocaleDateString()}
          placeholder="MM/DD/YYYY"
        />
        <Text style={styles.inputLabel}>Date d'arrivée de médicaments</Text>
        <TextInput
          onPressIn={() => {
            DateTimePickerAndroid.open({
              value: props.medicineArrivalDate,
              onChange: (event, selectedDate) => {
                props.setMedicineArrivalDate(selectedDate);
              },
              mode: 'date',
              is24Hour: true
            })
          }
          }
          editable={!props.validate}
          style={styles.inputField}
          value={new Date(props.medicineArrivalDate).toLocaleDateString()}
          // defaultValue={props.medicineArrivalDate}
          placeholder="MM/DD/YYYY"
        />
        <Text style={styles.inputLabel}>Date du début de la DMM</Text>
        <TextInput
          onPressIn={() => {
            DateTimePickerAndroid.open({
              value: props.MDDStartDate,
              onChange: (event, selectedDate) => {
                props.setMDDStartDate(selectedDate);
              },
              mode: 'date',
              is24Hour: true
            })
          }
          }
          editable={!props.validate}
          style={styles.inputField}
          value={new Date(props.MDDStartDate).toLocaleDateString()}
          // defaultValue={props.MDDStartDate}
          placeholder="MM/DD/YYYY"
        />
        <Text style={styles.inputLabel}>Date de la fin de la DMM</Text>
        <TextInput
          onPressIn={() => {
            DateTimePickerAndroid.open({
              value: props.DMMEndDate,
              onChange: (event, selectedDate) => {
                props.setDMMEndDate(selectedDate);
              },
              mode: 'date',
              is24Hour: true
            })
          }
          }
          editable={!props.validate}
          style={styles.inputField}
          value={new Date(props.DMMEndDate).toLocaleDateString()}
          placeholder="MM/DD/YYYY"
        />
        <Text style={styles.inputLabel}>
          Date de la transmission du rapport
        </Text>
        <TextInput
          onPressIn={() => {
            DateTimePickerAndroid.open({
              value: props.reportTransmissionDate,
              onChange: (event, selectedDate) => {
                props.setReportTransmissionDate(selectedDate);
              },
              mode: 'date',
              is24Hour: true
            })
          }
          }
          editable={!props.validate}
          style={styles.inputField}
          value={new Date(props.reportTransmissionDate).toLocaleDateString()}
          placeholder="MM/DD/YYYY"
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
