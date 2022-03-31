import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import RNPickerSelect from "react-native-picker-select";
import { Chevron } from "react-native-shapes";
import CheckBox from '../CheckBox';

export default function ESPMForm(props) {
    const [date, setDate] = React.useState(new Date(Date.now()));

    const options = [{label: 'Oui'}, {label:'Non'}];
    
    const toggleImplementationESPM = () => props.setImplementationESPM(prev => !prev);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
    };

    return (
        <View>
          <Text style={styles.header}>ESPM</Text>
          <View style={styles.inputContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Text style={styles.inputLabel}>Mise en oeuvre des activités de ESPM</Text>
                  <CheckBox isChecked={props.implementationESPM} onPress={toggleImplementationESPM} />
              </View>
        </View>
            {props.implementationESPM && <> 
            <Text style={styles.inputLabel}>Date du début de la sensibilisation</Text>
            <TextInput
              onPressIn={() => {
                DateTimePickerAndroid.open({
                  value: props.awarenessStartDate,
                  onChange: (event, selectedDate) => {
                    props.setAwarenessStartDate(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.awarenessStartDate).toLocaleDateString()}
              placeholder="MM/DD/YYYY"
            />
            <Text style={styles.inputLabel}>Date de la fin de la sensibilisation</Text>
            <TextInput
              onPressIn={() => {
                DateTimePickerAndroid.open({
                  value: props.awarenessEndDate,
                  onChange: (event, selectedDate) => {
                    props.setAwarenessEndDate(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.awarenessEndDate).toLocaleDateString()}
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
              props.setOrganizedDMMCeremony(value);
            }}
            items={options}
            value={props.organizedDMMCeremony}
            placeholder={{
              label:"Organisation de la cérémonie de lancement de la DMM",
              value: null,
            }}
            Icon={() => <Chevron size={1.5} color="#9D9D9D" />}
          />
          </View>
          <Text style={styles.inputLabel}>Date du début de lancement de la DMM</Text>
            <TextInput
              onPressIn={() => {
                DateTimePickerAndroid.open({
                  value: props.DMMStartDate,
                  onChange: (event, selectedDate) => {
                    props.setDMMStartDate(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.DMMStartDate).toLocaleDateString()}
              placeholder="MM/DD/YYYY"
            /> 
           </> }
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