import React, { useState, useEffect, useContext, useRef } from "react";

import {
  StatusBar,
  StyleSheet,
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
import TrainingDCForm from "./pages/TrainingDC";
import TrainingSupervisionForm from "./pages/TrainingSupervision";
import ESPMForm from "./pages/ESPM";
import MassDistributionForm from "./pages/MassDistribution";
import DMMSupervisionForm from "./pages/DMMSupervision";
import DataValidationForm from "./pages/DataValidation";
import ProcessingForm from "./pages/Processing";
import { AuthContext } from "../../src/context/AuthContext";


export default connect(mapStateToProps)(function TrainingForm(props) {


  const authContext = useContext(AuthContext);
  const [activePage, setActivePage] = useState(0);
  const view = useRef(props.view);

  // Identification state
  const [chiefName, setChiefName] = useState(authContext.authState.user.name);
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
  // todo: No used?? which is used to calculate remaining stock?
  const [numMectizanRemaining, setNumMectizanRemaining] = useState(0);
  const [numAlbendazoleRemaining, setNumAlbendazoleRemaining] = useState(0);
  const [numPraziquantelRemaining, setNumPraziquantelRemaining] = useState(0);

  const [ivermectinArrival, setIvermectinArrival] = useState(false);
  const [ivermectinArrivalDate, setIvermectinArrivalDate] = useState(new Date(Date.now()));
  const [numIvermectinReceived, setNumIvermectinReceived] = useState(0);

  const [albendazoleArrival, setAlbendazoleArrival] = useState(false);
  const [albendazoleArrivalDate, setAlbendazoleArrivalDate] = useState(new Date(Date.now()));
  const [numAlbendazoleReceived, setNumAlbendazoleReceived] = useState(0);

  const [praziquantelArrival, setPraziquantelArrival] = useState(false);
  const [praziquantelArrivalDate, setPraziquantelArrivalDate] = useState(new Date(Date.now()));
  const [numPraziquantelReceived, setNumPraziquantelReceived] = useState(0);

  // Financial Resources
  const [fundsArrived, setFundsArrived] = useState(false);
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
  const [hasSupportingDocs, setHasSupportingDocs] = useState(false);

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
  const [isTrainingTrainers, setIsTrainingTrainers] = useState(false);
  // const [trainingParticipation, setTrainingParticipation] = useState(""); // TODO: not used
  const [trainingStartDate, setTrainingStartDate] = useState(new Date(Date.now()));
  const [trainingEndDate, setTrainingEndDate] = useState(new Date(Date.now()));
  const [numFemaleTrainers, setNumFemaleTrainers] = useState(0);
  const [numMaleTrainers, setNumMaleTrainers] = useState(0);

  // IT Training
  const [organizedTrainingIT, setOrganizedTrainingIT] = useState(false);
  const [trainingITStartDate, setTrainingITStartDate] = useState(new Date(Date.now()));
  const [trainingITEndDate, setTrainingITEndDate] = useState(new Date(Date.now()));
  const [numMaleTrainersIT, setNumMaleTrainersIT] = useState(0);
  const [numFemaleTrainersIT, setNumFemaleTrainersIT] = useState(0);
  const [numTotalTrainersIT, setNumTotalTrainersIT] = useState(
    numMaleTrainersIT + numFemaleTrainersIT
  );

  useEffect(() => {
    setNumTotalTrainersIT(numMaleTrainersIT + numFemaleTrainersIT);
  }, [numMaleTrainersIT, numFemaleTrainersIT]);

  // DC Training
  const [organizedTrainingDC, setOrganizedTrainingDC] = useState(false);
  const [trainingDCStartDate, setTrainingDCStartDate] = useState(new Date(Date.now()));
  const [trainingDCEndDate, setTrainingDCEndDate] = useState(new Date(Date.now()));
  const [numFemaleTrainersDC, setNumFemaleTrainersDC] = useState(0);
  const [numMaleTrainersDC, setNumMaleTrainersDC] = useState(0);
  const [numTotalTrainersDC, setNumTotalTrainersDC] = useState(
    numMaleTrainersDC + numFemaleTrainersDC
  );

  useEffect(() => {
    setNumTotalTrainersDC(numMaleTrainersDC + numFemaleTrainersDC);
  }, [numMaleTrainersDC, numFemaleTrainersDC]);

  // Training Supervision
  const [supervisionDCTraining, setSupervisionDCTraining] = useState(false);
  const [supervisionTrainingStartDate, setSupervisionTrainingStartDate] =
    useState(new Date(Date.now()));
  const [supervisionTrainingEndDate, setSupervisionTrainingEndDate] =
    useState(new Date(Date.now()));
  const [supervisionHierachyVisits, setSupervisionHierachyVisits] =
    useState(false);

  // ESPM
  const [implementationESPM, setImplementationESPM] = useState(false);
  const [awarenessStartDate, setAwarenessStartDate] = useState(new Date(Date.now()));
  const [awarenessEndDate, setAwarenessEndDate] = useState(new Date(Date.now()));
  const [organizedDMMCeremony, setOrganizedDMMCeremony] = useState(false);
  const [DMMStartDate, setDMMStartDate] = useState(new Date(Date.now()));

  // Mass Distribution of Medicinal Products
  const [ASDMMDebut, setASDMMDebut] = useState(false);
  const [LFOVSTHStartDate, setLFOVSTHStartDate] = useState(new Date(Date.now()));
  const [LFOVSTHEndDate, setLFOVSTHEndDate] = useState(new Date(Date.now()));
  const [SCHStartDate, setSCHStartDate] = useState(new Date(Date.now()));
  const [SCHEndDate, setSCHEndDate] = useState(new Date(Date.now()));

  // DMM Supervision
  const [ASDMMDebutDate, setASDMMDebutDate] = useState(new Date(Date.now()));
  const [ASStartDate, setASStartDate] = useState(new Date(Date.now()));
  const [DMMHierarchyVisits, setDMMHierarchyVisits] = useState(false);

  // Data Validation
  const [validationASStartDateZS, setValidationASStartDateZS] = useState(new Date(Date.now()));
  const [validationASEndDateZS, setValidationASEndDateZS] = useState(new Date(Date.now()));
  const [
    validationASStartDateCoordination,
    setValidationASStartDateCoordination,
  ] = useState(new Date(Date.now()));
  const [validationASEndDateCoordination, setValidationASEndDateCoordination] =
    useState(new Date(Date.now()));

  // Processing Start Date
  const [encodingStartDate, setEncodingStartDate] = useState(new Date(Date.now()));
  const [numVillagesAlreadyEncoded, setNumVillagesAlreadyEncoded] = useState(0);
  const [formTransmissionDate, setFormTransmissionDate] = useState(new Date(Date.now()));

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
      view={props.view}
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
      amountSupervision={amountSupervision}
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
      isTrainingTrainers={isTrainingTrainers}
      setIsTrainingTrainers={setIsTrainingTrainers}
      // trainingParticipation={trainingParticipation}
      // setTrainingParticipation={setTrainingParticipation}
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
      // trainingParticipation={trainingParticipation}
      // setTrainingParticipation={setTrainingParticipation}
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
    />,
    <TrainingDCForm
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
  const resetAllStates = (form) => {
    setContactNumber(form.identification.contactNumber);
    setChiefName(form.identification.chiefName);
    setIdentificationYear(form.identification.identificationYear);
    setASNumber(form.identification.ASNumber);
    setNumCommunities(form.identification.numCommunities);
    setReportingMonth(form.identification.reportingMonth);
    setReportingProvince(form.identification.reportingProvince);
    setCoordinatingProvince(form.identification.coordinatingProvince);
    setSupportingPartner(form.identification.supportingPartner);
    setMtnTreated(form.identification.mtnTreated);

    setActiveCovidCases(form.covidSituation.activeCovidCases);
    setNewActiveCovidCases(form.covidSituation.newActiveCovidCases);
    setCovidDeaths(form.covidSituation.covidDeaths);

    setIvermectinArrival(form.medicinalSupply.ivermectin.ivermectinArrival? true: false);
    setNumMectizanRemaining(form.medicinalSupply.ivermectin.numMectizanRemaining)
    setNumAlbendazoleRemaining(form.medicinalSupply.albendazole.numAlbendazoleRemaining)
    setNumPraziquantelRemaining(form.medicinalSupply.praziquantel.numPraziquantelRemaining)
    
    setIvermectinArrivalDate(new Date(form.medicinalSupply.ivermectin.ivermectinArrivalDate));
    setNumIvermectinReceived(form.medicinalSupply.ivermectin.numIvermectinReceived);
    setAlbendazoleArrival(form.medicinalSupply.albendazole.albendazoleArrival? true: false);
    setAlbendazoleArrivalDate(new Date(form.medicinalSupply.albendazole.albendazoleArrivalDate));
    setNumAlbendazoleReceived(form.medicinalSupply.albendazole.numAlbendazoleReceived);
    setPraziquantelArrival(form.medicinalSupply.praziquantel.praziquantelArrival? true: false);
    setPraziquantelArrivalDate(new Date(form.medicinalSupply.praziquantel.praziquantelArrivalDate));
    setNumPraziquantelReceived(form.medicinalSupply.praziquantel.numPraziquantelReceived);
    
    setFundsArrived(form.financialResources.fundsArrived);
    setAmountPlanning(form.financialResources.amountPlanning);
    setAmountTraining(form.financialResources.amountTraining);
    setAmountESPM(form.financialResources.amountESPM);
    setAmountDMM(form.financialResources.amountDMM);
    setAmountSupervision(form.financialResources.amountSupervision);
    setAmountManagement(form.financialResources.amountManagement);
    setAmountOther(form.financialResources.amountOther);
    setHasSupportingDocs(form.financialResources.hasSupportingDocs);

    // training of trainers
    setTrainingStartDate(new Date(form.trainingOfTrainers.trainingStartDate));
    setTrainingEndDate(new Date(form.trainingOfTrainers.trainingEndDate));
    setNumFemaleTrainers(form.trainingOfTrainers.numFemaleTrainers);
    setNumMaleTrainers(form.trainingOfTrainers.numMaleTrainers);
    setIsTrainingTrainers(form.trainingOfTrainers.isTrainingTrainers? true: false);


    // training it form
    setOrganizedTrainingIT(form.trainingIT.organizedTrainingIT);
    // setTrainingParticipation
    setTrainingITEndDate(new Date(form.trainingIT.trainingITEndDate));
    setNumFemaleTrainersIT(form.trainingIT.numFemaleTrainersIT);
    setNumMaleTrainersIT(form.trainingIT.numMaleTrainersIT);
    setOrganizedTrainingDC(form.trainingIT.organizedTrainingDC);
    setTrainingDCStartDate(new Date(form.trainingIT.trainingDCStartDate));
    setNumFemaleTrainersDC(form.trainingIT.numFemaleTrainersDC);
    setNumMaleTrainersDC(form.trainingIT.numMaleTrainersDC);

    // training supervision form
    setSupervisionDCTraining(form.trainingSupervision.supervisionDCTraining);
    setSupervisionTrainingStartDate(new Date(form.trainingSupervision.supervisionTrainingStartDate));
    setSupervisionTrainingEndDate(new Date(form.trainingSupervision.supervisionTrainingEndDate));
    setSupervisionHierachyVisits(form.trainingSupervision.supervisionHierachyVisits);
    
    // ESPM form
    setImplementationESPM(form.ESPM.implementationESPM);
    setAwarenessStartDate(new Date(form.ESPM.awarenessStartDate));
    setAwarenessEndDate(new Date(form.ESPM.awarenessEndDate));
    setOrganizedDMMCeremony(form.ESPM.organizedDMMCeremony);
    setDMMStartDate(new Date(form.ESPM.DMMStartDate));
    
    // Mass distribution form
    setASDMMDebut(form.massDistribution.ASDMMDebut);
    setLFOVSTHStartDate(new Date(form.massDistribution.LFOVSTHStartDate));
    setLFOVSTHEndDate(new Date(form.massDistribution.LFOVSTHEndDate));
    setSCHStartDate(new Date(form.massDistribution.SCHStartDate));
    setSCHEndDate(new Date(form.massDistribution.SCHEndDate));

    // DMM supervision form
    setASDMMDebutDate(new Date(form.DMMSupervision.ASDMMDebutDate));
    setASStartDate(new Date(form.DMMSupervision.ASStartDate));
    setDMMHierarchyVisits(form.DMMSupervision.DMMHierarchyVisits);
    
    // Data validation form
    setValidationASStartDateZS(new Date(form.dataValidation.validationASStartDateZS));
    setValidationASEndDateZS(new Date(form.dataValidation.validationASEndDateZS));
    setValidationASStartDateCoordination(new Date(form.dataValidation.validationASStartDateCoordination));
    setValidationASEndDateCoordination(new Date(form.dataValidation.validationASEndDateCoordination));

    // Processing form
    setEncodingStartDate(new Date(form.processing.encodingStartDate));
    setNumVillagesAlreadyEncoded(form.processing.numVillagesAlreadyEncoded);
    setFormTransmissionDate(new Date(form.processing.formTransmissionDate));
  };

  
    // report object to be sent to the server
  var trainingForm = {
    // DATE
    "date": Date.now(),

    // IDENTIFICATION
    "identification": {
      "chiefName": chiefName, 
      "contactNumber":contactNumber,
      "identificationYear": identificationYear,
      "ASNumber": ASNumber,
      "numCommunities": numCommunities,
      "reportingMonth": reportingMonth,
      "reportingProvince": reportingProvince,
      "coordinatingProvince": coordinatingProvince,
      "supportingPartner": supportingPartner,
      "mtnTreated": mtnTreated,
    },
      
      // Covid Situation Form
    "covidSituation": {
      "activeCovidCases": activeCovidCases,
      "newActiveCovidCases": newActiveCovidCases,
      "covidDeaths": covidDeaths,
    },
      
      // Medicinal Supply Form
    "medicinalSupply": {
      "praziquantel": {
        "praziquantelArrival": praziquantelArrival,
        "numPraziquantelRemaining": numPraziquantelRemaining,
        "praziquantelArrivalDate": praziquantelArrivalDate,
        "numPraziquantelReceived": numPraziquantelReceived,
      },
      "ivermectin": {
        "ivermectinArrival": ivermectinArrival,
        "numMectizanRemaining": numMectizanRemaining,
        "ivermectinArrivalDate": ivermectinArrivalDate, // todo: difference with above
        "numIvermectinReceived": numIvermectinReceived,
      },
      "albendazole": {
        "albendazoleArrival": albendazoleArrival,
        "numAlbendazoleRemaining": numAlbendazoleRemaining,
        "albendazoleArrivalDate": albendazoleArrivalDate,
        "numAlbendazoleReceived": numAlbendazoleReceived,
      },
    },

    // Financial resources form
    "financialResources": {
      "fundsArrived": fundsArrived,
      "amountPlanning": amountPlanning,
      "amountTraining": amountTraining,
      "amountESPM": amountESPM,
      "amountDMM": amountDMM,
      "amountSupervision": amountDMM, 
      "amountManagement": amountManagement,
      "amountOther": amountOther,
      "amountTotal": amountTotal,
      "hasSupportingDocs": hasSupportingDocs,
    },

    "trainingOfTrainers": {
      "isTrainingTrainers": isTrainingTrainers,
      "trainingStartDate": trainingStartDate,
      "trainingEndDate": trainingEndDate,
      "numFemaleTrainers": numFemaleTrainers,
      "numMaleTrainers": numMaleTrainers, 
    },

    // TrainingITForm
    "trainingIT": {
      "organizedTrainingIT": organizedTrainingIT,
      // "trainingParticipation": trainingParticipation,
      "trainingITStartDate": trainingITStartDate,
      "trainingITEndDate": trainingITEndDate,
      "numFemaleTrainersIT": numFemaleTrainersIT,
      "numMaleTrainersIT": numMaleTrainersIT, 
      "numTotalTrainersIT": numTotalTrainersIT,
      "organizedTrainingDC": organizedTrainingDC,
      "trainingDCStartDate": trainingDCStartDate,
      "numFemaleTrainersDC": numFemaleTrainersDC,
      "numMaleTrainersDC": numMaleTrainersDC, 
      "numTotalTrainersDC": numTotalTrainersDC,
    },

    // TrainingSupervisionForm
    "trainingSupervision": {
      "supervisionDCTraining": supervisionDCTraining,
      "supervisionTrainingStartDate": supervisionTrainingStartDate,
      "supervisionTrainingEndDate": supervisionTrainingEndDate,
      "supervisionHierachyVisits": supervisionHierachyVisits, 
    },

    // ESPMForm
    "ESPM": {
      "implementationESPM": implementationESPM,
      "awarenessStartDate": awarenessStartDate,
      "awarenessEndDate": awarenessEndDate,
      "organizedDMMCeremony": organizedDMMCeremony,
      "DMMStartDate": DMMStartDate,
    },

    // MassDistributionForm
    "massDistribution": {
      "ASDMMDebut": ASDMMDebut, 
      "LFOVSTHStartDate": LFOVSTHStartDate,
      "LFOVSTHEndDate": LFOVSTHEndDate,
      "SCHStartDate": SCHStartDate,
      "SCHEndDate": SCHEndDate, 
    },

    // DMMSupervisionForm
    "DMMSupervision": {
      "ASDMMDebutDate": ASDMMDebutDate,
      "ASStartDate": ASStartDate,
      "DMMHierarchyVisits": DMMHierarchyVisits,
    },

    // DataValidationForm
    "dataValidation": {
      "validationASStartDateZS": validationASStartDateZS,
      "validationASEndDateZS": validationASEndDateZS,
      "validationASStartDateCoordination": validationASStartDateCoordination,
      "validationASEndDateCoordination": validationASEndDateCoordination,
    },

    // ProcessingForm
    "processing": {
      "encodingStartDate": encodingStartDate,
      "numVillagesAlreadyEncoded": numVillagesAlreadyEncoded,
      "formTransmissionDate": formTransmissionDate,
    },
  } 

  // Conditional rendering page navigation
  const renderPageContent = () => {

    if (view.current){
      view.current = false;
      resetAllStates(props.currentForm);
    }

    return (
      <>
        {pages[activePage]}
        <View style={styles.buttonsContainer}>
          {activePage > 0 && <BackButton setActivePage={setActivePage} />}
          {activePage < pages.length - 1 && (
            <NextButton setActivePage={setActivePage} />
          )}
          {activePage === pages.length - 1 && !props.view  &&(
            <SubmitButton
              setLandingPage={props.setLandingPage}
              trainingForm={trainingForm}
            />
          )}
        </View>
        <ProgressBar progress={(activePage + 1) / pages.length} />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <CrossIcon setView={props.setView} setLandingPage={props.setLandingPage} />
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
