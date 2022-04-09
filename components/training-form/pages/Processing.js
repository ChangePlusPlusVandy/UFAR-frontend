import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

// done 

export default function ProcessingForm(props) {
    const [date, setDate] = React.useState(new Date(Date.now()));

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
    };

    return (
        <View>
          <Text style={styles.header}>Date de debut de L'encodage des donnees de traitement</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
            Date du debut de l'encodage et transmission des donnees des traitements
            </Text>
            <TextInput
              onPressIn={() => {
                DateTimePickerAndroid.open({
                  value: props.encodingStartDate,
                  onChange: (event, selectedDate) => {
                    props.setEncodingStartDate(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.encodingStartDate).toLocaleDateString()}
              placeholder="MM/DD/YYYY"
            />
            <Text style={styles.inputLabel}>Le nombre des villages deja encode et transmis</Text>
            <TextInput style = {styles.inputField}
                onChange={(e) => props.setNumVillagesAlreadyEncoded(parseInt(e.nativeEvent.text) || 0)}
                defaultValue={(props.numVillagesAlreadyEncoded || '0').toString()}
            />
            <Text style={styles.inputLabel}>Date de la transmission du formulaire</Text>
            <TextInput
              onPressIn={() => {
                DateTimePickerAndroid.open({
                  value: props.formTransmissionDate,
                  onChange: (event, selectedDate) => {
                    props.setFormTransmissionDate(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.formTransmissionDate).toLocaleDateString()}
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