import React, { useState, useEffect } from "react";
import DatePicker from 'react-native-date-picker'
import {
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import BackButton from "./BackButton";
import CrossIcon from "./CrossIcon";
import NextButton from "./NextButton";
import SubmitButton from "./SubmitButton";
import ProgressBar from "./ProgressBar";

import { connect } from "react-redux";
import IdentificationForm from "./pages/Identification";
import CovidSituationForm from "./pages/CovidSituation";
import MedicinalSupplyForm from "./pages/MedicinalSupply";
import FinancialResourcesForm from "./pages/FinancialResources";
import TrainingTrainersForm from "./pages/TrainingTrainers";
import TrainingITForm from "./pages/TrainingIT";
import TrainingSupervisionForm from "./pages/TrainingSupervision";
import ESPMForm from "./pages/ESPM";
import MassDistributionForm from "./pages/MassDistribution";
import DMMSupervisionForm from "./pages/DMMSupervision";
import DataValidationForm from "./pages/DataValidation";
import ProcessingForm from "./pages/Processing";

export default connect(mapStateToProps)(function TrainingForm(props) {
  console.log("TrainingForm props: ", props);
  const [activePage, setActivePage] = useState(0);

  // Identification state
  const [chiefName, setChiefName] = useState("");
  const [contactNumber, setContactNumber] = useState(0);
  const [identificationYear, setIdentificationYear] = useState(0);
  const [reportingMonth, setReportingMonth] = useState("");
  const [reportingProvince, setReportingProvince] = useState("");
  const [coordinatingProvince, setCoordinatingProvince] = useState("");
  const [supportingPartner, setSupportingPartner] = useState("");
  const [ASNumber, setASNumber] = useState(0);
  const [numCommunities, setNumCommunities] = useState(0);
  const [mtnTreated, setMtnTreated] = useState("");

  // Covid Situation state
  const [activeCovidCases, setActiveCovidCases] = useState(0);
  const [newActiveCovidCases, setNewActiveCovidCases] = useState(0);
  const [covidDeaths, setCovidDeaths] = useState(0);

  // Medicinal Supply
  const [numMectizanRemaining, setNumMectizanRemaining] = useState(0);
  const [numAlbendazoleRemaining, setNumAlbendazoleRemaining] = useState(0);
  const [numPraziquantelRemaining, setNumPraziquantelRemaining] = useState(0);

  const [ivermectinArrival, setIvermectinArrival] = useState("");
  const [ivermectinArrivalDate, setIvermectinArrivalDate] = useState("");
  const [numIvermectinReceived, setNumIvermectinReceived] = useState(0);

  const [albendazoleArrival, setAlbendazoleArrival] = useState("");
  const [albendazoleArrivalDate, setAlbendazoleArrivalDate] = useState("");
  const [numAlbendazoleReceived, setNumAlbendazoleReceived] = useState(0);

  const [praziquantelArrival, setPraziquantelArrival] = useState("");
  const [praziquantelArrivalDate, setPraziquantelArrivalDate] = useState("");
  const [numPraziquantelReceived, setNumPraziquantelReceived] = useState(0);

  // Financial Resources
  const [fundsArrived, setFundsArrived] = useState("");
  const [amountPlanning, setAmountPlanning] = useState(0);
  const [amountTraining, setAmountTraining] = useState(0);
  const [amountESPM, setAmountESPM] = useState(0);
  const [amountDMM, setAmountDMM] = useState(0);
  const [amountSupervision, setAmountSupervision] = useState(0);
  const [amountManagement, setAmountManagement] = useState(0);
  const [amountOther, setAmountOther] = useState(0);
  const [amountTotal, setAmountTotal] = useState(
    amountPlanning +
      amountTraining +
      amountESPM +
      amountDMM +
      amountSupervision +
      amountManagement +
      amountOther
  );
  const [hasSupportingDocs, setHasSupportingDocs] = useState("");

  useEffect(() => {
    setAmountTotal(
      amountPlanning +
        amountTraining +
        amountESPM +
        amountDMM +
        amountSupervision +
        amountManagement +
        amountOther
    );
  }, [amountPlanning, amountTraining, amountESPM, amountDMM, amountSupervision, amountManagement, amountOther]);

  // Training of Trainers
  const [trainingParticipation, setTrainingParticipation] = useState("");
  const [trainingStartDate, setTrainingStartDate] = useState("");
  const [trainingEndDate, setTrainingEndDate] = useState("");
  const [numFemaleTrainers, setNumFemaleTrainers] = useState(0);
  const [numMaleTrainers, setNumMaleTrainers] = useState(0);

  // IT Training
  const [organizedTrainingIT, setOrganizedTrainingIT] = useState("");
  const [trainingITStartDate, setTrainingITStartDate] = useState("");
  const [trainingITEndDate, setTrainingITEndDate] = useState("");
  const [numMaleTrainersIT, setNumMaleTrainersIT] = useState(0);
  const [numFemaleTrainersIT, setNumFemaleTrainersIT] = useState(0);
  const [numTotalTrainersIT, setNumTotalTrainersIT] = useState(
    numMaleTrainersIT + numFemaleTrainersIT
  );

  useEffect(() => {
    setNumTotalTrainersIT(numMaleTrainersIT + numFemaleTrainersIT);
  }, [numMaleTrainersIT, numFemaleTrainersIT]);

  const [organizedTrainingDC, setOrganizedTrainingDC] = useState("");
  const [trainingDCStartDate, setTrainingDCStartDate] = useState("");
  const [trainingDCEndDate, setTrainingDCEndDate] = useState("");
  const [numFemaleTrainersDC, setNumFemaleTrainersDC] = useState(0);
  const [numMaleTrainersDC, setNumMaleTrainersDC] = useState(0);
  const [numTotalTrainersDC, setNumTotalTrainersDC] = useState(
    numMaleTrainersDC + numFemaleTrainersDC
  );

  useEffect(() => {
    setNumTotalTrainersDC(numMaleTrainersDC + numFemaleTrainersDC);
  }, [numMaleTrainersDC, numFemaleTrainersDC]);

  // Training Supervision
  const [supervisionDCTraining, setSupervisionDCTraining] = useState("");
  const [supervisionTrainingStartDate, setSupervisionTrainingStartDate] =
    useState("");
  const [supervisionTrainingEndDate, setSupervisionTrainingEndDate] =
    useState("");
  const [supervisionHierachyVisits, setSupervisionHierachyVisits] =
    useState("");

  // ESPM
  const [implementationESPM, setImplementationESPM] = useState("");
  const [awarenessStartDate, setAwarenessStartDate] = useState("");
  const [awarenessEndDate, setAwarenessEndDate] = useState("");
  const [organizedDMMCeremony, setOrganizedDMMCeremony] = useState("");
  const [DMMStartDate, setDMMStartDate] = useState("");

  // Mass Distribution of Medicinal Products
  const [ASDMMDebut, setASDMMDebut] = useState("");
  const [LFOVSTHStartDate, setLFOVSTHStartDate] = useState("");
  const [LFOVSTHEndDate, setLFOVSTHEndDate] = useState("");
  const [SCHStartDate, setSCHStartDate] = useState("");
  const [SCHEndDate, setSCHEndDate] = useState("");

  // DMM Supervision
  const [ASDMMDebutDate, setASDMMDebutDate] = useState("");
  const [ASStartDate, setASStartDate] = useState("");
  const [DMMHierarchyVisits, setDMMHierarchyVisits] = useState("");

  // Data Validation
  const [validationASStartDateZS, setValidationASStartDateZS] = useState(new Date());
  const [validationASEndDateZS, setValidationASEndDateZS] = useState(new Date());
  const [
    validationASStartDateCoordination,
    setValidationASStartDateCoordination,
  ] = useState(new Date());
  const [validationASEndDateCoordination, setValidationASEndDateCoordination] =
    useState(new Date());

  // Processing Start Date
  const [encodingStartDate, setEncodingStartDate] = useState("");
  const [numVillagesAlreadyEncoded, setNumVillagesAlreadyEncoded] = useState(0);
  const [formTransmissionDate, setFormTransmissionDate] = useState("");

  const pages = [
    <IdentificationForm
      chiefName={chiefName}
      setChiefName={setChiefName}
      contactNumber={contactNumber}
      setContactNumber={setContactNumber}
      identificationYear={identificationYear}
      setIdentificationYear={setIdentificationYear}
      ASNumber={ASNumber}
      setASNumber={setASNumber}
      numCommunities={numCommunities}
      setNumCommunities={setNumCommunities}
      reportingMonth={reportingMonth}
      setReportingMonth={setReportingMonth}
      reportingProvince={reportingProvince}
      setReportingProvince={setReportingProvince}
      coordinatingProvince={coordinatingProvince}
      setCoordinatingProvince={setCoordinatingProvince}
      supportingPartner={supportingPartner}
      setSupportingPartner={setSupportingPartner}
      mtnTreated={mtnTreated}
      setMtnTreated={setMtnTreated}
    />,
    <CovidSituationForm
      activeCovidCases={activeCovidCases}
      setActiveCovidCases={setActiveCovidCases}
      newActiveCovidCases={newActiveCovidCases}
      setNewActiveCovidCases={setNewActiveCovidCases}
      covidDeaths={covidDeaths}
      setCovidDeaths={setCovidDeaths}
    />,
    <MedicinalSupplyForm
      numMectizanRemaining={numMectizanRemaining}
      setNumMectizanRemaining={setNumMectizanRemaining}
      numAlbendazoleRemaining={numAlbendazoleRemaining}
      setNumAlbendazoleRemaining={setNumAlbendazoleRemaining}
      numPraziquantelRemaining={numPraziquantelRemaining}
      setNumPraziquantelRemaining={setNumPraziquantelRemaining}
      ivermectinArrival={ivermectinArrival}
      setIvermectinArrival={setIvermectinArrival}
      ivermectinArrivalDate={ivermectinArrivalDate}
      setIvermectinArrivalDate={setIvermectinArrivalDate}
      numIvermectinReceived={numIvermectinReceived}
      setNumIvermectinReceived={setNumIvermectinReceived}
      albendazoleArrival={albendazoleArrival}
      setAlbendazoleArrival={setAlbendazoleArrival}
      albendazoleArrivalDate={albendazoleArrivalDate}
      setAlbendazoleArrivalDate={setAlbendazoleArrivalDate}
      numAlbendazoleReceived={numAlbendazoleReceived}
      setNumAlbendazoleReceived={setNumAlbendazoleReceived}
      praziquantelArrival={praziquantelArrival}
      setPraziquantelArrival={setPraziquantelArrival}
      praziquantelArrivalDate={praziquantelArrivalDate}
      setPraziquantelArrivalDate={setPraziquantelArrivalDate}
      numPraziquantelReceived={numPraziquantelReceived}
      setNumPraziquantelReceived={setNumPraziquantelReceived}
    />,
    <FinancialResourcesForm
      fundsArrived={fundsArrived}
      setFundsArrived={setFundsArrived}
      amountPlanning={amountPlanning}
      setAmountPlanning={setAmountPlanning}
      amountTraining={amountTraining}
      setAmountTraining={setAmountTraining}
      amountESPM={amountESPM}
      setAmountESPM={setAmountESPM}
      amountDMM={amountDMM}
      setAmountDMM={setAmountDMM}
      amountSupervision={amountDMM}
      setAmountSupervision={setAmountSupervision}
      amountManagement={amountManagement}
      setAmountManagement={setAmountManagement}
      amountOther={amountOther}
      setAmountOther={setAmountOther}
      amountTotal={amountTotal}
      setAmountTotal={setAmountTotal}
      hasSupportingDocs={hasSupportingDocs}
      setHasSupportingDocs={setHasSupportingDocs}
    />,
    <TrainingTrainersForm
      trainingParticipation={trainingParticipation}
      setTrainingParticipation={setTrainingParticipation}
      trainingStartDate={trainingStartDate}
      setTrainingStartDate={setTrainingStartDate}
      trainingEndDate={trainingEndDate}
      setTrainingEndDate={setTrainingEndDate}
      numFemaleTrainers={numFemaleTrainers}
      setNumFemaleTrainers={setNumFemaleTrainers}
      numMaleTrainers={numMaleTrainers}
      setNumMaleTrainers={setNumMaleTrainers}
    />,
    <TrainingITForm
      organizedTrainingIT={organizedTrainingIT}
      setOrganizedTrainingIT={setOrganizedTrainingIT}
      trainingParticipation={trainingParticipation}
      setTrainingParticipation={setTrainingParticipation}
      trainingITStartDate={trainingITStartDate}
      setTrainingITStartDate={setTrainingITStartDate}
      trainingITEndDate={trainingITEndDate}
      setTrainingITEndDate={setTrainingITEndDate}
      numFemaleTrainersIT={numFemaleTrainersIT}
      setNumFemaleTrainersIT={setNumFemaleTrainersIT}
      numMaleTrainersIT={numMaleTrainersIT}
      setNumMaleTrainersIT={setNumMaleTrainersIT}
      numTotalTrainersIT={numTotalTrainersIT}
      setNumTotalTrainersIT={setNumTotalTrainersIT}
      organizedTrainingDC={organizedTrainingDC}
      setOrganizedTrainingDC={setOrganizedTrainingDC}
      trainingDCStartDate={trainingDCStartDate}
      setTrainingDCStartDate={setTrainingDCStartDate}
      trainingDCEndDate ={trainingDCEndDate}
      setTrainingDCEndDate={setTrainingDCEndDate}
      numFemaleTrainersDC={numFemaleTrainersDC}
      setNumFemaleTrainersDC={setNumFemaleTrainersDC}
      numMaleTrainersDC={numMaleTrainersDC}
      setNumMaleTrainersDC={setNumMaleTrainersDC}
      numTotalTrainersDC={numTotalTrainersDC}
      setNumTotalTrainersDC={setNumTotalTrainersDC}
    />,
    <TrainingSupervisionForm
      supervisionDCTraining={supervisionDCTraining}
      setSupervisionDCTraining={setSupervisionDCTraining}
      supervisionTrainingStartDate={supervisionTrainingStartDate}
      setSupervisionTrainingStartDate={setSupervisionTrainingStartDate}
      supervisionTrainingEndDate={supervisionTrainingEndDate}
      setSupervisionTrainingEndDate={setSupervisionTrainingEndDate}
      supervisionHierachyVisits={supervisionHierachyVisits}
      setSupervisionHierachyVisits={setSupervisionHierachyVisits}
    />,
    <ESPMForm
      implementationESPM={implementationESPM}
      setImplementationESPM={setImplementationESPM}
      awarenessStartDate={awarenessStartDate}
      setAwarenessStartDate={setAwarenessStartDate}
      awarenessEndDate={awarenessEndDate}
      startAwarenessEndDate={setAwarenessEndDate}
      organizedDMMCeremony={organizedDMMCeremony}
      setOrganizedDMMCeremony={setOrganizedDMMCeremony}
      DMMStartDate={DMMStartDate}
      setDMMStartDate={setDMMStartDate}
    />,
    <MassDistributionForm
      ASDMMDebut={ASDMMDebut}
      setASDMMDebut={setASDMMDebut}
      LFOVSTHStartDate={LFOVSTHStartDate}
      setLFOVSTHStartDate={setLFOVSTHStartDate}
      LFOVSTHEndDate={LFOVSTHEndDate}
      setLFOVSTHEndDate={setLFOVSTHEndDate}
      SCHStartDate={SCHStartDate}
      setSCHStartDate={setSCHStartDate}
      SCHEndDate={SCHEndDate}
      setSCHEndDate={setSCHEndDate}
    />,
    <DMMSupervisionForm
      ASDMMDebutDate={ASDMMDebutDate}
      setASDMMDebutDate={setASDMMDebutDate}
      ASStartDate={ASStartDate}
      setASStartDate={setASStartDate}
      DMMHierarchyVisits={DMMHierarchyVisits}
      setDMMHierarchyVisits={setDMMHierarchyVisits}
    />,
    <DataValidationForm
      validationASStartDateZS={validationASStartDateZS}
      setValidationASStartDateZS={setValidationASStartDateZS}
      validationASEndDateZS={validationASEndDateZS}
      setValidationASEndDateZS={setValidationASEndDateZS}
      validationASStartDateCoordination={validationASStartDateCoordination}
      setValidationASStartDateCoordination={
        setValidationASStartDateCoordination
      }
      validationASEndDateCoordination={validationASEndDateCoordination}
      setValidationASEndDateCoordination={setValidationASEndDateCoordination}
    />,
    <ProcessingForm
      encodingStartDate={encodingStartDate}
      setEncodingStartDate={setEncodingStartDate}
      numVillagesAlreadyEncoded={numVillagesAlreadyEncoded}
      setNumVillagesAlreadyEncoded={setNumVillagesAlreadyEncoded}
      formTransmissionDate={formTransmissionDate}
      setFormTransmissionDate={setFormTransmissionDate}
    />,
  ];

  // resets all states to default values
  const resetAllStates = () => {};

  /*
    // report object to be sent to the server
    var report = {
        // IDENTIFICATION
        "DMM_day": DMMDay,
        "nurse": registeredNurse,
        "village": villageId,
        "health_area": healthAreaId,
        "health_zone": healthZoneId,
        // DATE
        "date": Date.now(),
        // 1.11 diseases treated
        "onchocerciasis": {
            "first_round": onchocerciasisFirst,
            "second_round": onchocerciasisSecond,
        },
        "lymphatic_filariasis": {
            "mectizan_and_albendazole": LFMectizanAlbendazole,
            "albendazole_alone": {
                "first_round": LFAlbendazoleFirst,
                "second_round": LFAlbendazoleSecond,
            },
        },
        "schistosomiasis": schistosomiasis,
        "soil_transmitted_helminthiasis": soilTransmittedHelminthiasis,
        "trachoma": trachoma,

        // 1.12 number of treatment cycles 
        // todo: Embeded within 1.11: delete if not needed later
        // "treatment_circles": {
        //     "onchocerciasis": numCyclesOnchocerciasis,
        //     // todo: implement and correct the rest
        //     "lymphatic_filariasis": 0,
        //     "schistosomiasis": 0,
        //     "soil_transmitted_helminthiasis": 0,
        //     "trachoma": 0,
        // },

        "dcs_training_completion_date": DCTrainingCompletionDate,
        "medicines_arrival_date": medicineArrivalDate,
        "MDD_start_date": MDDStartDate,
        "MDD_end_date": DMMEndDate,
        "date_of_transmission": reportTransmissionDate,
        "distributors": {
            "men": numMenDistributors,
            "women": numWomenDistributors
        },
        // II. DENUMBER
        "patients": {
            "men": {
                "lessThanSixMonths": menUnderSixMonths,
                "sixMonthsToFiveYears": menSixMonthsToFiveYears,
                "fiveToFourteen": menFiveToFourteenYears,
                "fifteenAndAbove": menFifteenAndOlder,
            },
            "women": {
                "lessThanSixMonths": womenLessThanSixMonths,
                "sixMonthsToFiveYears": womenSixMonthsToFiveYears,
                "fiveToFourteen": womenFiveToFourteenYears,
                "fifteenAndAbove": womenFifteenAndOlder
            }
        },
        "households": {
            "visited": numHouseholdsVisited,
            "treated": numHouseholdsTreated
        },
        // III. MORBIDITY
        "blind": {
            "men": numMenBlind,
            "women": numWomenBlind
        },
        "lymphedema": {
            "men": {
                "upper_limbs": {
                    "left": numMenLUpperLimbs,
                    "right": numMenRUpperLimbs
                },
                "lower_limbs": {
                    "left": numMenLLowerMembers,
                    "right": numMenRLowerMembers
                }
            },
            "women": {
                "upper_limbs": {
                    "left": numWomenLUpperLimbs,
                    "right": numWomenRUpperLimbs
                },
                "lower_limbs": {
                    "left": numWomenLLowerMembers,
                    "right": numWomenRLowerMembers
                },
                "breast": {
                    "left": numWomenLeftBreast,
                    "right": numWomenRightBreast
                }
            }
        },

        "hydroceles": {
            "men": numMenHydroceles
        },
        "trichiasis": {
            "men": numMenTrichiasis, 
            "women": numWomenTrichiasis
        },
        "guinea_worm": {
            "men": numMenGuineaWorm,
            "women": numWomenGuineaWorm
        },

        // IV. PROCESSING
        "mectizan": {
            "men": {
                "fiveToFourteen": numYoungMenMectizan,
                "fifteenAndOver": numOldMenMectizan
            },
            "women": {
                "fiveToFourteen": numYoungWomenMectizan,
                "fifteenAndOver": numOldWomenMectizan
            }, 
        },
        "mectizan_and_albendazole": {
            "men": {
                "fiveToFourteen": numYoungMenMectAlb,
                "fifteenAndOver": numOldMenMectAlb
            },
            "women": {
                "fiveToFourteen": numYoungWomenMectAlb,
                "fifteenAndOver": numOldWomenMectAlb
            },
            
        },
        "albendazole": {
            "men": {
                "fiveToFourteen": numYoungMenAlbendazoleTreat,
                "fifteenAndOver": numOldMenAlbendazoleTreat
            },
            "women": {
                "fiveToFourteen": numYoungWomenAlbendazoleTreat,
                "fifteenAndOver": numOldWomenAlbendazoleTreat
            },
            
        },
        "praziquantel": {
            "men": {
                "fiveToFourteen": numMenPrazi
            },
            "women": {
                "fiveToFourteen": numWomenPrazi
            }
        },
        "albendazole_soil_transmitted": {
            "men": {
                "fiveToFourteen": numMenAlbendazoleHelminthiasis
            },
            "women": {
                "fiveToFourteen": numWomenAlbendazoleHelminthiasis
            }
        },
        "side_effects_num": numSideEffectsReported,

        // V. UNTREATED PERSONS
        "untreated_persons": {
            "childrenYoungerThanFive": numInfants,
            "pregnantWomen": numPregnant,
            "breastfeedingWomen": numBreastfeeding,
            "bedriddenPatients": numBedridden,
            "refusals": numRefused,
            "absent": numAbsent,
        },
        // VI. DRUG management is done by the DRUG model
        "ivermectin_management": {
            "quantityReceived": ivermectinReceived,
            "quantityUsed": ivermectinUsed,
            "amountLost": ivermectinLost,
            "quantityReturnedToCS": ivermectinReturned,        
        },
        "albendazole_management": {
            "quantityReceived": albendazoleReceived,
            "quantityUsed": albendazoleUsed,
            "amountLost": albendazoleLost,
            "quantityReturnedToCS": albendazoleReturned      
        },
        "praziquantel_management": {
            "quantityReceived": praziquantelReceived,
            "quantityUsed": praziquantelUsed,
            "amountLost": praziquantelLost,
            "quantityReturnedToCS": praziquantelReturned        
        },
    } */

  // Conditional rendering page navigation
  const renderPageContent = () => {
    return (
      <>
        {pages[activePage]}
        <View style={styles.buttonsContainer}>
          {activePage > 0 && <BackButton setActivePage={setActivePage} />}
          {activePage < pages.length - 1 && (
            <NextButton setActivePage={setActivePage} />
          )}
          {activePage === pages.length - 1 && (
            <SubmitButton
              setLandingPage={props.setLandingPage}
              report={report}
            />
          )}
        </View>
        <ProgressBar progress={(activePage + 1) / pages.length} />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <CrossIcon
        setLandingPage={props.setLandingPage}
        landingPage={props.landingPage}
      />
      {renderPageContent()}
    </View>
  );
});

function mapStateToProps(state) {
  return {
    name: state.reducer.name,
    reports: state.reducer.reports,
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    top: Platform.OS === "android" ? StatusBar.currentHeight : 45,
    bottom: 0,
    backgroundColor: "#EC1C24",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,

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

  buttonsContainer: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: 30,
  },
});
