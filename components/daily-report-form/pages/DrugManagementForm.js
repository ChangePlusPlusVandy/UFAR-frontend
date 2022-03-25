import React from "react";
import { StyleSheet, Text, View } from "react-native";

import SlideshowPaginator from "../SlideshowPaginator";

import DrugManagementIvermectinForm from "./drug-management-pages/DrugManagementIvermectinForm";
import DrugManagementAlbendazoleForm from "./drug-management-pages/DrugManagementAlbendazoleForm";
import DrugManagementPraziquantelForm from "./drug-management-pages/DrugManagementPraziquantelForm";

export default function DrugManagementForm(props) {
  const pages = [
    {
      title: "Ivermectine (Oncho/FL)",
      content: (
        <DrugManagementIvermectinForm
          ivermectinReceived={props.ivermectinReceived}
          ivermectinUsed={props.ivermectinUsed}
          ivermectinLost={props.ivermectinLost}
          ivermectinRemaining={props.ivermectinRemaining}
          ivermectinReturned={props.ivermectinReturned}
          setIvermectinReceived={props.setIvermectinReceived}
          setIvermectinUsed={props.setIvermectinUsed}
          setIvermectinLost={props.setIvermectinLost}
          setIvermectinRemaining={props.setIvermectinRemaining}
          setIvermectinReturned={props.setIvermectinReturned}
          validate={props.validate}
        />
      ),
    },
    {
      title: "Albendazole (FL/STH)",
      content: (
        <DrugManagementAlbendazoleForm
          albendazoleReceived={props.albendazoleReceived}
          albendazoleUsed={props.albendazoleUsed}
          albendazoleLost={props.albendazoleLost}
          albendazoleRemaining={props.albendazoleRemaining}
          albendazoleReturned={props.albendazoleReturned}
          setAlbendazoleReceived={props.setAlbendazoleReceived}
          setAlbendazoleUsed={props.setAlbendazoleUsed}
          setAlbendazoleLost={props.setAlbendazoleLost}
          setAlbendazoleRemaining={props.setAlbendazoleRemaining}
          setAlbendazoleReturned={props.setAlbendazoleReturned}
          validate={props.validate}
        />
      ),
    },
    {
      title: "Praziquantel (SCH)",
      content: (
        <DrugManagementPraziquantelForm
          praziquantelReceived={props.praziquantelReceived}
          praziquantelUsed={props.praziquantelUsed}
          praziquantelLost={props.praziquantelLost}
          praziquantelRemaining={props.praziquantelRemaining}
          praziquantelReturned={props.praziquantelReturned}
          setPraziquantelReceived={props.setPraziquantelReceived}
          setPraziquantelUsed={props.setPraziquantelUsed}
          setPraziquantelLost={props.setPraziquantelLost}
          setPraziquantelRemaining={props.setPraziquantelRemaining}
          setPraziquantelReturned={props.setPraziquantelReturned}
          validate={props.validate}
        />
      ),
    },
  ];

  return (
    <View>
      <Text style={styles.header}>Gestion des médicaments</Text>
      <View style={styles.inputContainer}>
        <View style={styles.slideshowContainer}>
          <SlideshowPaginator pages={pages} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 18,
    alignSelf: "center",
    textAlign: "center",
    maxWidth: 300,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 28,
    color: "white",
  },
  inputContainer: {
    marginHorizontal: 34,
  },
  slideshowContainer: {
    marginBottom: 20,
  },
});
