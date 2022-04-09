import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

// done 
export default function DataValidationForm(props) {
    const [date, setDate] = React.useState(new Date(Date.now()));

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
    };

    return (
        <View>
          <Text style={styles.header}>Evaluation et validation de donnees</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
            Date du début de la validation des données au niveau AS (Niveau ZS)
            </Text>
            <TextInput
              onPressIn={() => {
                DateTimePickerAndroid.open({
                  value: props.validationASStartDateZS,
                  onChange: (event, selectedDate) => {
                    props.setValidationASStartDateZS(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.validationASStartDateZS).toLocaleDateString()}
              placeholder="MM/DD/YYYY"
            />
            <Text style={styles.inputLabel}>Date de la fin de la validation des données au niveau AS (Niveau ZS)</Text>
            <TextInput
              onPressIn={() => {
                DateTimePickerAndroid.open({
                  value: props.validationASEndDateZS,
                  onChange: (event, selectedDate) => {
                    props.setValidationASEndDateZS(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.validationASEndDateZS).toLocaleDateString()}
              placeholder="MM/DD/YYYY"
            />
            <Text style={styles.inputLabel}>Date du début de la validation des données au niveau AS (Niveau Coordination)</Text>
            <TextInput
              onPressIn={() => {
                DateTimePickerAndroid.open({
                  value: props.validationASStartDateCoordination,
                  onChange: (event, selectedDate) => {
                    props.setValidationASStartDateCoordination(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.validationASStartDateCoordination).toLocaleDateString()}
              placeholder="MM/DD/YYYY"
            />
            <Text style={styles.inputLabel}>Date de la fin de la validation des données au niveau AS (Niveau Coordination)</Text>
            <TextInput
              onPressIn={() => {
                DateTimePickerAndroid.open({
                  value: props.validationASEndDateCoordination,
                  onChange: (event, selectedDate) => {
                    props.setValidationASEndDateCoordination(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.validationASEndDateCoordination).toLocaleDateString()}
              placeholder="MM/DD/YYYY"
            />
          </View>
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