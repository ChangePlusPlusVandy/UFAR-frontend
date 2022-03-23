import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import CheckBox from '../CheckBox';

export default function TrainingITForm(props) {

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
  };

  const toggleOrganizedTrainingIT = () => props.setOrganizedTrainingIT(prev => !prev);

  return (
      <View>
          <Text style={styles.header}>Formation Des IT et ITA</Text>
          <View style={styles.inputContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Text style={styles.inputLabel}>Organisation de la formation des IT et ITA</Text>
                  <CheckBox isChecked={props.organizedTrainingIT} onPress={toggleOrganizedTrainingIT} />
              </View>

              {props.organizedTrainingIT && <>
              <Text style={styles.inputLabel}>La date du debut de la formation des IT et ITA au niveau ZS</Text>
              <TextInput
                  onPressIn={() => {
                      DateTimePickerAndroid.open({
                      value: props.trainingITStartDate,
                      onChange: (event, selectedDate) => {
                          props.setTrainingITStartDate(selectedDate);
                      },
                      mode: 'date',
                      is24Hour: true
                      })
                  }
                  }
                  editable={!props.validate}
                  style={styles.inputField}
                  value={new Date(props.trainingITStartDate).toLocaleDateString()}
                  placeholder="MM/DD/YYYY"
              />
              <Text style={styles.inputLabel}>La date de la fin de la formation des IT et ITA  au niveau ZS</Text>
              <TextInput
                  onPressIn={() => {
                      DateTimePickerAndroid.open({
                      value: props.trainingITEndDate,
                      onChange: (event, selectedDate) => {
                          props.setTrainingITEndDate(selectedDate);
                      },
                      mode: 'date',
                      is24Hour: true
                      })
                  }
                  }
                  editable={!props.validate}
                  style={styles.inputField}
                  value={new Date(props.trainingITEndDate).toLocaleDateString()}
                  placeholder="MM/DD/YYYY"
              />
              <Text style={styles.inputLabel}>Nombre des formés de sexe masculin</Text>
              <TextInput style = {styles.inputField}
                  onChange={(e) => props.setNumMaleTrainersIT(parseInt(e.nativeEvent.text) || 0)}
                  defaultValue={(props.numMaleTrainersIT || '0').toString()}
              />
              <Text style={styles.inputLabel}>Nombre des formés de sexe feminin</Text>
              <TextInput style = {styles.inputField}
                  onChange={(e) => props.setNumFemaleTrainersIT(parseInt(e.nativeEvent.text) || 0)}
                  defaultValue={(props.numFemaleTrainersIT || '0').toString()}
              />
              <Text style={styles.inputLabelBigger}>Total des formés (IT et ITA)</Text>
                    <TextInput style={styles.inputField} value={props.numTotalTrainersIT.toString()} />
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