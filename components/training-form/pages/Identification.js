import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Chevron } from "react-native-shapes";
import data from "../../daily-report-form/pages/locations.js";

const getProvinces = () => {
  var provinces = [];
  Object.keys(data.provinces).forEach((province) => {
    provinces.push({ label: province, value: data.provinces[province].id });
  });
  return provinces;
};

export default function IdentificationForm(props) {
  const partners = [{label: 'END Fund'}, {label: 'SCIF'}, {label:'Sightsavers'}, {label:'GiveWell'}];
  const diseases = [{label:'Onchocercose'}, {label:'Filariose lymphatique'}, {label:'Schistosomiase'}, {label:'Géohelminthiases'}];
  const months = [{label:'Janvier'}, {label:'Fevrier'}, {label:'Mars'}, {label:'Avril'}, {label:'Mai'}, {label:'Juin'}, {label:'Juillet'}, {label:'Aout'},
    {label:'Septembre'}, {label:'Octobre'}, {label:'Novembre'}, {label:'Decembre'}];

  console.log("province", props.reportingProvince);

  return (
    <View>
      <Text style={styles.header}>Identification</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          onChange={(e) => props.setContactNumber(e.nativeEvent.text)}
          defaultValue={props.contactNumber}
          value={props.contactNumber}
          placeholder="Numero de contact"
        />
        <TextInput
          style={styles.inputField}
          onChange={(e) => props.setChiefName(e.nativeEvent.text)}
          defaultValue={props.chiefName}
          placeholder="Nom du Medecin Chef de zone"
        />
        <TextInput
          style={styles.inputField}
          onChange={(e) => props.setASNumber(e.nativeEvent.text)}
          defaultValue={props.ASNumber}
          placeholder="Nombre de AS"
        />
        <TextInput
          style={styles.inputField}
          onChange={(e) => props.setIdentificationYear(e.nativeEvent.text)}
          defaultValue={props.identificationYear}
          placeholder="Annee de mise en oeuvre"
        />
        <TextInput
          style={styles.inputField}
          onChange={(e) => props.setNumCommunities(e.nativeEvent.text)}
          defaultValue={props.numCommunities}
          placeholder="Nombre de communautes/villages"
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
              props.setReportingMonth(value);
            }}
            items={months}
            value={props.reportingMonth}
            placeholder={{ label: "Mois de rapportage", value: null }}
            Icon={() => <Chevron size={1.5} color="#9D9D9D" />}
          />
        </View>
        <View style={styles.RNPickerSelectContainer}>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            style={{
              inputAndroid: styles.RNPickerSelectInput,
              iconContainer: styles.RNPickerSelectIconContainer,
              placeholder: styles.placeholder,
            }}
            onValueChange={(value) => {
              props.setReportingProvince(value);
            }}
            items={getProvinces()}
            value={props.reportingProvince}
            placeholder={{ label: "Province", value: null }}
            Icon={() => <Chevron size={1.5} color="#9D9D9D" />}
          />
        </View>
        <View style={styles.RNPickerSelectContainer}>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            style={{
              inputAndroid: styles.RNPickerSelectInput,
              iconContainer: styles.RNPickerSelectIconContainer,
              placeholder: styles.placeholder,
            }}
            onValueChange={(value) => {
              props.setCoordinatingProvince(value);
            }}
            items={getProvinces()}
            value={props.coordinatingProvince}
            placeholder={{ label: "Coordination", value: null }}
            Icon={() => <Chevron size={1.5} color="#9D9D9D" />}
          />
        </View>
        <View style={styles.RNPickerSelectContainer}>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            style={{
              inputAndroid: styles.RNPickerSelectInput,
              iconContainer: styles.RNPickerSelectIconContainer,
              placeholder: styles.placeholder,
            }}
            onValueChange={(value) => {
              props.setSupportingPartner(value);
            }}
            items={partners}
            value={props.supportingPartner}
            placeholder={{ label: "Partenaires d'appui", value: null }}
            Icon={() => <Chevron size={1.5} color="#9D9D9D" />}
          />
        </View>
        <View style={styles.RNPickerSelectContainer}>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            style={{
              inputAndroid: styles.RNPickerSelectInput,
              iconContainer: styles.RNPickerSelectIconContainer,
              placeholder: styles.placeholder,
            }}
            onValueChange={(value) => {
              props.setMtnTreated(value);
            }}
            items={diseases}
            value={props.mtnTreated}
            placeholder={{ label: "MTN-CTP à traiter", value: null }}
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
    // justifyContent: "space-around",
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
