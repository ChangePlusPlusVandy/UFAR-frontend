import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import CheckBox from '../CheckBox';

export default function MedicinalSupplyForm(props) {

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
};

  const toggleIvermectinArrival = () => props.setIvermectinArrival(prev => !prev);
  const toggleAlbendazoleArrival = () => props.setAlbendazoleArrival(prev => !prev);
  const togglePraziquantelArrival = () => props.setPraziquantelArrival(prev => !prev);

  return (
    <View>
      <Text style={styles.header}>Approvisionement en medicaments</Text>
      <ScrollView style={styles.inputContainer}>
          <Text style={styles.inputLabelBigger} >Quantité des medicants restant lors de la DMM antérieur</Text>
          <Text style={styles.inputLabel}>Mectizan</Text>
          <TextInput style={styles.inputField} value={props.numMectizanRemaining.toString()}  onChange={(e) => props.setNumMectizanRemaining(parseInt(e.nativeEvent.text) || 0)}/>
          <Text style={styles.inputLabel}>Albendazole</Text>
          <TextInput style={styles.inputField} value={props.numAlbendazoleRemaining.toString()}  onChange={(e) => props.setNumAlbendazoleRemaining(parseInt(e.nativeEvent.text) || 0)}/>
          <Text style={styles.inputLabel}>Praziquantel</Text>
          <TextInput style={styles.inputField} value={props.numPraziquantelRemaining.toString()}  onChange={(e) => props.setNumPraziquantelRemaining(parseInt(e.nativeEvent.text) || 0)}/>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={styles.inputLabel}>Arrivée de l’Ivermectine dans la zone de santé</Text>
              <CheckBox isChecked={props.ivermectinArrival} onPress={toggleIvermectinArrival} />
          </View>
          {props.ivermectinArrival && <> 
          <Text style={styles.inputLabel}>La date</Text>
          <TextInput
              onPressIn={() => {
                  DateTimePickerAndroid.open({
                  value: props.ivermectinArrivalDate,
                  onChange: (event, selectedDate) => {
                      props.setIvermectinArrivalDate(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                  })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.ivermectinArrivalDate).toLocaleDateString()}
              placeholder="MM/DD/YYYY"
          />
          <Text style={styles.inputLabel}>La quantité reçue (Comprimés) de l’Ivermectine</Text>
          <TextInput style={styles.inputField} value={props.numIvermectinReceived.toString()} onChange={(e) => props.setNumIvermectinReceived(parseInt(e.nativeEvent.text) || 0)}/>
          </>}
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={styles.inputLabel}>Arrivée de l’Albendazole (FL/STH)</Text>
              <CheckBox isChecked={props.albendazoleArrival} onPress={toggleAlbendazoleArrival} />
          </View>
          {props.albendazoleArrival && <> 
          <Text style={styles.inputLabel}>La date</Text>
          <TextInput
              onPressIn={() => {
                  DateTimePickerAndroid.open({
                  value: props.albendazoleArrivalDate,
                  onChange: (event, selectedDate) => {
                      props.setAlbendazoleArrivalDate(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                  })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.albendazoleArrivalDate).toLocaleDateString()}
              placeholder="MM/DD/YYYY"
          />
          <Text style={styles.inputLabel}>La quantité reçue (Comprimés) de l’Albendazole</Text>
          <TextInput style={styles.inputField} value={props.numAlbendazoleReceived.toString()} onChange={(e) => props.setNumAlbendazoleReceived(parseInt(e.nativeEvent.text) || 0)}/>
          </>}
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={styles.inputLabel}>Arrivée du Praziquantel (SCH)</Text>
              <CheckBox isChecked={props.praziquantelArrival} onPress={togglePraziquantelArrival} />
          </View>
          {props.praziquantelArrival && <> 
          <Text style={styles.inputLabel}>La date</Text>
          <TextInput
              onPressIn={() => {
                  DateTimePickerAndroid.open({
                  value: props.praziquantelArrivalDate,
                  onChange: (event, selectedDate) => {
                      props.setPraziquantelArrivalDate(selectedDate);
                  },
                  mode: 'date',
                  is24Hour: true
                  })
              }
              }
              editable={!props.validate}
              style={styles.inputField}
              value={new Date(props.praziquantelArrivalDate).toLocaleDateString()}
              placeholder="MM/DD/YYYY"
          />
          <Text style={styles.inputLabel}>La quantité reçue (Comprimés) de Praziquantel</Text>
          <TextInput style={styles.inputField} value={props.numPraziquantelReceived.toString()} onChange={(e) => props.setNumPraziquantelReceived(parseInt(e.nativeEvent.text) || 0)}/>
          </>}
        </ScrollView>
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
    paddingHorizontal: 8,
    marginHorizontal: 26,
    marginBottom: 215,
  },
  inputLabel: {
    fontFamily: Platform.OS === "android" ? "sans-serif" : "Avenir-Roman",
    fontSize: 12,
    lineHeight: 13,
    color: "white",
  },
  inputLabelBigger: {
    fontFamily: Platform.OS === "android" ? "sans-serif" : "Avenir-Roman",
    fontSize: 15,
    lineHeight: 22,
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
    minWidth: 100,

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
