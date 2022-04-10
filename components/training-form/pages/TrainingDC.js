import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import CheckBox from '../CheckBox';

export default function TrainingDCForm(props) {

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
  };

  const toggleOrganizedTrainingDC = () => props.setOrganizedTrainingDC(prev => !prev);

  return (
      <View>
          <Text style={styles.header}>Formation Des DC</Text>
          <View style={styles.inputContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Text style={styles.inputLabel}>Organisation de la formation des DCs</Text>
                  <CheckBox isChecked={props.organizedTrainingDC} onPress={toggleOrganizedTrainingDC} />
              </View>
              {props.organizedTrainingDC && <>
              <Text style={styles.inputLabel}>La date du debut de la formation des DCs</Text>
              <TextInput
                  onPressIn={() => {
                      DateTimePickerAndroid.open({
                      value: props.trainingDCStartDate,
                      onChange: (event, selectedDate) => {
                          props.setTrainingDCStartDate(selectedDate);
                      },
                      mode: 'date',
                      is24Hour: true
                      })
                  }
                  }
                  editable={!props.validate}
                  style={styles.inputField}
                  value={new Date(props.trainingDCStartDate).toLocaleDateString()}
                  placeholder="MM/DD/YYYY"
              />
              <Text style={styles.inputLabel}>La date de la fin de la formation des DCs</Text>
              <TextInput
                  onPressIn={() => {
                      DateTimePickerAndroid.open({
                      value: props.trainingDCEndDate,
                      onChange: (event, selectedDate) => {
                          props.setTrainingDCEndDate(selectedDate);
                      },
                      mode: 'date',
                      is24Hour: true
                      })
                  }
                  }
                  editable={!props.validate}
                  style={styles.inputField}
                  value={new Date(props.trainingDCEndDate).toLocaleDateString()}
                  placeholder="MM/DD/YYYY"
              />
              <Text style={styles.inputLabel}>Nombre des formés de sexe masculin</Text>
              <TextInput style = {styles.inputField}
                  onChange={(e) => props.setNumMaleTrainersDC(parseInt(e.nativeEvent.text) || 0)}
                  defaultValue={(props.numMaleTrainersDC || '0').toString()}
              />
              <Text style={styles.inputLabel}>Nombre des formés de sexe feminin</Text>
              <TextInput style = {styles.inputField}
                  onChange={(e) => props.setNumFemaleTrainersDC(parseInt(e.nativeEvent.text) || 0)}
                  defaultValue={(props.numFemaleTrainersDC || '0').toString()}
              />
              <Text style={styles.inputLabel}>Total des formés (DCs)</Text>
                    <TextInput style={styles.inputField} value={props.numTotalTrainersDC.toString()} />
              </>
              }
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