import { StyleSheet, Text, TextInput, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Chevron } from "react-native-shapes";
import data from "../../daily-report-form/pages/locations.js";
import { AuthContext } from '../../../src/context/AuthContext';
import React, {useContext} from 'react';

const getProvinces = () => {
  var provinces = [];
  Object.keys(data.provinces).forEach((province) => {
    provinces.push({ label: province, value: data.provinces[province].id });
  });
  return provinces;
};

export default function IdentificationForm(props) {

  const authContext = useContext(AuthContext);
  const partners = [{label: 'END Fund', value: 'END Fund'}, {label: 'SCIF', value: 'SCIF'}, {label:'Sightsavers', value: 'Sightsavers'}, {label:'GiveWell', value: 'GiveWell'}, {label:'Other', value: 'Other'}];
  const diseases = [{label:'Onchocercose', value: 'Onchocercose'}, {label:'Filariose lymphatique', value: 'Filariose lymphatique'}, {label:'Schistosomiase', value: 'Schmistosomiase'}, {label:'Géohelminthiases', value: 
'Géohelminthiases'}];
  const months = [{label:'Janvier', value: 'Janvier'}, {label:'Fevrier', value: 'Fevrier'}, {label:'Mars', value: 'Mars'}, {label:'Avril', value: 'Avril'}, {label:'Mai', value: 'Mai'}, {label:'Juin', value: 'Juin'}, {label:'Juillet', value: 'Juillet'}, {label:'Aout', value: 'Auot'},
    {label:'Septembre', value: 'Septembre'}, {label:'Octobre', value: 'Octobre'}, {label:'Novembre', value: 'Novembre'}, {label:'Decembre', value:'Decembre'}];

  return (
    <View>
      <Text style={styles.header}>Identification</Text>
      <View style={styles.inputContainer}>
        <TextInput
          // editable={!props.view}
          style={styles.inputField}
          onChange={(e) => props.setContactNumber(parseInt(e.nativeEvent.text || 0))}
          defaultValue={props.contactNumber.toString()}
          value={props.contactNumber && props.contactNumber.toString()}
          placeholder="Numero de contact"
        />
        <TextInput
          // editable={false}
          style={styles.inputField}
          onChange={(e) => props.setChiefName(e.nativeEvent.text)}
          defaultValue={props.chiefName}
          placeholder="Nom du Medecin Chef de zone"
        />
        <Text style={styles.inputField}>{authContext.authState.user?.health_zone.name || ""}</Text>
        <TextInput
          style={styles.inputField}
          onChange={(e) => props.setASNumber(parseInt(e.nativeEvent.text || 0))}
          defaultValue={props.ASNumber}
          value={props.ASNumber && props.ASNumber.toString()}
          placeholder="Nombre de AS"
        />
        <TextInput
          style={styles.inputField}
          onChange={(e) => props.setIdentificationYear(parseInt(e.nativeEvent.text || 0))}
          defaultValue={props.identificationYear && props.identificationYear.toString()}
          placeholder="Annee de mise en oeuvre"
        />
        <TextInput
          style={styles.inputField}
          onChange={(e) => props.setNumCommunities(parseInt(e.nativeEvent.text || 0))}
          defaultValue={props.numCommunities && props.numCommunities.toString()}
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
          <Text style={{position: 'absolute', bottom: 0, left: 0}}>{''}</Text>
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
