import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import SlideshowPaginator from "../SlideshowPaginator";

import ProcessingIvermectineForm from "./processing-pages/ProcessingIvermectineForm";
import ProcessingMectAlbForm from "./processing-pages/ProcessingMectAlbForm";
import ProcessingAlbendazoleForm from "./processing-pages/ProcessingAlbendazoleForm";
import ProcessingPraziquantelForm from "./processing-pages/ProcessingPraziquantelForm";
import ProcessingAlbendazoleHelminthiasisForm from "./processing-pages/ProcessingAlbedazoleHelminthiasisForm";

export default function ProcessingForm(props) {
  const pages = [];

  // Ivermectine (Onchocercose) page
  if (props.onchocerciasis) {
    pages.push({
      title: "Ivermectine (Onchocercose)",
      content: (
        <ProcessingIvermectineForm
          setNumYoungMenIvermectine={props.setNumYoungMenIvermectine}
          setNumOldMenIvermectine={props.setNumOldMenIvermectine}
          setNumYoungWomenIvermectine={props.setNumYoungWomenIvermectine}
          setNumOldWomenIvermectine={props.setNumOldWomenIvermectine}
          numYoungMenIvermectine={props.numYoungMenIvermectine}
          numYoungWomenIvermectine={props.numYoungWomenIvermectine}
          numOldMenIvermectine={props.numOldMenIvermectine}
          numOldWomenIvermectine={props.numOldWomenIvermectine}
          totalNumWomenIvermectine={props.totalNumWomenIvermectine}
          totalNumMenIvermectine={props.totalNumMenIvermectine}
          totalNumIvermectine={props.totalNumIvermectine}
          totalCoverageIvermectine={props.totalCoverageIvermectine}
          numSideEffectsReportedIvermectine={props.numSideEffectsReportedIvermectine}
          validate={props.validate}
        />
      ),
    });
  }

  // Ivermectine et Albendazole (Filariose lymphatique) page
  if (props.LFIvermectineAlbendazole) {
    pages.push({
      title: "Ivermectine et Albendazole (Filariose lymphatique)",
      content: (
        <ProcessingMectAlbForm
          setNumYoungMenMectAlb={props.setNumYoungMenMectAlb}
          setNumOldMenMectAlb={props.setNumOldMenMectAlb}
          setNumYoungWomenMectAlb={props.setNumYoungWomenMectAlb}
          setNumOldWomenMectAlb={props.setNumOldWomenMectAlb}
          numYoungMenMectAlb={props.numYoungMenMectAlb}
          numYoungWomenMectAlb={props.numYoungWomenMectAlb}
          numOldMenMectAlb={props.numOldMenMectAlb}
          numOldWomenMectAlb={props.numOldWomenMectAlb}
          totalNumWomenMectAlb={props.totalNumWomenMectAlb}
          totalNumMenMectAlb={props.totalNumMenMectAlb}
          totalNumMectAlb={props.totalNumMectAlb}
          totalCoverageMectAlb={props.totalCoverageMectAlb}
          validate={props.validate}
        />
      ),
    });
  }

  // Albendazole seul (Filariose lymphatique) page
  if (props.LFAlbendazoleFirst || props.LFAlbendazoleSecond) {
    pages.push({
      title: "Albendazole seul (Filariose lymphatique)",
      content: (
        <ProcessingAlbendazoleForm
          setNumYoungMenAlbendazoleTreat={props.setNumYoungMenAlbendazoleTreat}
          setNumOldMenAlbendazoleTreat={props.setNumOldMenAlbendazoleTreat}
          setNumYoungWomenAlbendazoleTreat={
            props.setNumYoungWomenAlbendazoleTreat
          }
          setNumOldWomenAlbendazoleTreat={props.setNumOldWomenAlbendazoleTreat}
          numYoungMenAlbendazoleTreat={props.numYoungMenAlbendazoleTreat}
          numYoungWomenAlbendazoleTreat={props.numYoungWomenAlbendazoleTreat}
          numOldMenAlbendazoleTreat={props.numOldMenAlbendazoleTreat}
          numOldWomenAlbendazoleTreat={props.numOldWomenAlbendazoleTreat}
          totalNumWomenAlbendazoleTreat={props.totalNumWomenAlbendazoleTreat}
          totalNumMenAlbendazoleTreat={props.totalNumMenAlbendazoleTreat}
          totalNumAlbendazoleTreat={props.totalNumAlbendazoleTreat}
          totalCoverageAlbendazoleTreat={props.totalCoverageAlbendazoleTreat}
          validate={props.validate}
        />
      ),
    });
  }

  // Praziquantel (Schistosomiase) page
  if (props.schistosomiasis) {
    pages.push({
        title: "Praziquantel (Schistosomiase)",
        content: (
          <ProcessingPraziquantelForm
            setNumMenPrazi={props.setNumMenPrazi}
            numMenPrazi={props.numMenPrazi}
            setNumWomenPrazi={props.setNumWomenPrazi}
            numWomenPrazi={props.numWomenPrazi}
            setTotalNumPrazi={props.setTotalNumPrazi}
            totalNumPrazi={props.totalNumPrazi}
            setTotalCoveragePrazi={props.setTotalCoveragePrazi}
            totalCoveragePrazi={props.totalCoveragePrazi}
            validate={props.validate}
          />
        ),
    });
  }

  // Albendazole (Géohelminthiases) page
  if (props.soilTransmittedHelminthiasis) {
    pages.push({
      title: "Albendazole (Géohelminthiases)",
      content: (
        <ProcessingAlbendazoleHelminthiasisForm
          setNumMenAlbendazoleHelminthiasis={
            props.setNumMenAlbendazoleHelminthiasis
          }
          numMenAlbendazoleHelminthiasis={props.numMenAlbendazoleHelminthiasis}
          setNumWomenAlbendazoleHelminthiasis={
            props.setNumWomenAlbendazoleHelminthiasis
          }
          numWomenAlbendazoleHelminthiasis={
            props.numWomenAlbendazoleHelminthiasis
          }
          setTotalNumAlbendazoleHelminthiasis={
            props.setTotalNumAlbendazoleHelminthiasis
          }
          totalNumAlbendazoleHelminthiasis={
            props.totalNumAlbendazoleHelminthiasis
          }
          setTotalCoverageAlbendazoleHelminthiasis={
            props.setTotalCoverageAlbendazoleHelminthiasis
          }
          totalCoverageAlbendazoleHelminthiasis={
            props.totalCoverageAlbendazoleHelminthiasis
          }
          validate={props.validate}
        />
      ),
    });
  }

  return (
    <View>
      <Text style={styles.header}>Traitement</Text>
      <View style={styles.inputContainer}>
        <View style={styles.slideshowContainer}>
          <SlideshowPaginator pages={pages} />
          <View style={styles.rowContainer}>
            <View style={styles.inputFieldContainer}>
              <Text style={styles.inputLabelBigger}>
                Effets secondaires signalés
              </Text>
              <TextInput
                editable={!props.validate}
                style={styles.inputField}
                onChange={(e) =>
                  props.setNumSideEffectsReported(
                    parseInt(e.nativeEvent.text) || 0
                  )
                }
                defaultValue={(props.numSideEffectsReported || "0").toString()}
              />
            </View>
          </View>
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
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputFieldContainer: {
    alignItems: "center",
  },
  inputLabelBigger: {
    fontFamily: Platform.OS === "android" ? "sans-serif" : "Avenir-Roman",
    fontSize: 17,
    lineHeight: 20,
    color: "white",
    marginVertical: 10,
    marginBottom: 0,
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
    width: 95,
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
