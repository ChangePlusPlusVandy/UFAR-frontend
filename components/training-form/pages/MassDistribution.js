import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

// needs the yes/no and conditional rendering 
export default function MassDistributionForm(props) {
    const [date, setDate] = React.useState(new Date(Date.now()));

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
    };

    return (
        <View>
          <Text style={styles.header}>Distribution de masse de medicament</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Date du début de la DMM LF/OV/STH</Text>
            <TextInput
              onPressIn={() => {
                DateTimePickerAndroid.open({
                  value: props.LFOVSTHStartDate,
                  onChange: (event, selectedDate) => {
                    props.setLFOVSTHStartDate(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.LFOVSTHStartDate).toLocaleDateString()}
              placeholder="MM/DD/YYYY"
            />
            <Text style={styles.inputLabel}>Date de la fin de la DMM LF/OV/STH </Text>
            <TextInput
              onPressIn={() => {
                DateTimePickerAndroid.open({
                  value: props.validationASEndDateZS,
                  onChange: (event, selectedDate) => {
                    props.setLFOVSTHEndDate(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.LFOVSTHEndDate).toLocaleDateString()}
              placeholder="MM/DD/YYYY"
            />
            <Text style={styles.inputLabel}>Date du début de la DMM SCH</Text>
            <TextInput
              onPressIn={() => {
                DateTimePickerAndroid.open({
                  value: props.SCHStartDate,
                  onChange: (event, selectedDate) => {
                    props.setSCHStartDate(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.SCHStartDate).toLocaleDateString()}
              placeholder="MM/DD/YYYY"
            />
            <Text style={styles.inputLabel}>Date de la fin de la DMM SCH</Text>
            <TextInput
              onPressIn={() => {
                DateTimePickerAndroid.open({
                  value: props.SCHEndDate,
                  onChange: (event, selectedDate) => {
                    props.setSCHEndDate(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.SCHEndDate).toLocaleDateString()}
              placeholder="MM/DD/YYYY"
            />
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      header: {
        paddingVertical: 18,
        textAlign: "center",
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