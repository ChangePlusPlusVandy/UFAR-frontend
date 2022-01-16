import React, {useState, useEffect} from 'react';
import {Platform, Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';

import BackButton from './BackButton';
import CrossIcon from './CrossIcon';
import NextButton from './NextButton';
import SubmitButton from './SubmitButton';
import ProgressBar from './ProgressBar';

import DatesForm from './pages/DatesForm';
import Denumber1Form from './pages/Denumber1Form';
import Denumber2Form from './pages/Denumber2Form';
import Denumber3Form from './pages/Denumber3Form';
import DistributorsForm from './pages/DistributorsForm';
import IdentificationForm from './pages/IdentificationForm';
import TreatmentInformationForm from './pages/TreatmentInformationForm';
import MorbidityCasesForm from './pages/MorbidityCasesForm';
import ProcessingForm from './pages/ProcessingForm';
import UntreatedForm from './pages/UntreatedForm';
import DrugManagementForm from './pages/DrugManagementForm';
import data from './pages/locations';
import { connect } from 'react-redux';



export default connect(mapStateToProps)(function DailyReportForm(props) {
    console.log("DailyReportForm props: ", props);
    const [activePage, setActivePage] = useState(0);


    // Identification state
    const [DMMDay, setDMMDay] = useState("");
    const [registeredNurse, setRegisteredNurse] = useState("");

    const [provinceName, setProvinceName] = useState("");
    const [provinceId, setProvinceId] = useState("");

    const [healthZoneName, setHealthZoneName] = useState("");
    const [healthZoneId, setHealthZoneId] = useState("");

    const [healthAreaName, setHealthAreaName] = useState("");
    const [healthAreaId, setHealthAreaId] = useState("");

    const [villageName, setVillageName] = useState("");
    const [villageId, setVillageId] = useState("");
    

    // Treatment Information state
    const [onchocerciasis, setOnchocerciasis] = useState(false);
    const [numCyclesOnchocerciasis, setNumCyclesOnchocerciasis] = useState(0);
    const [onchocerciasisFirst, setOnchocerciasisFirst] = useState(false);
    const [onchocerciasisSecond, setOnchocerciasisSecond] = useState(false);
    const [lymphaticFilariasis, setLymphaticFilariasis] = useState(false);
    const [LFMectizanAlbendazole, setLFMectizanAlbendazole] = useState(false);
    const [numCyclesLFMectizanAlbendazole, setNumCyclesLFMectizanAlbendazole] = useState(0);
    const [numCyclesLFAlbendazole, setNumCyclesLFAlbendazole] = useState(0);
    const [LFAlbendazoleFirst, setLFAlbendazoleFirst] = useState(false);
    const [LFAlbendazoleSecond, setLFAlbendazoleSecond] = useState(false);
    const [schistosomiasis, setSchistosomiasis] = useState(false);
    const [soilTransmittedHelminthiasis, setSoilTransmittedHelminthiasis] = useState(false);
    const [trachoma, setTrachoma] = useState(false);

    // Update onchocerciasis rounds when onchocerciasis is not selected
    useEffect(() => {
        if (!onchocerciasis) {
            setOnchocerciasisFirst(false);
            setOnchocerciasisSecond(false);
            setNumCyclesOnchocerciasis(0);
        }
    }, [onchocerciasis]);

    // Update LF rounds when LF is not selected
    useEffect(() => {
        if (!lymphaticFilariasis) {
            setLFMectizanAlbendazole(false);
            setLFAlbendazoleFirst(false);
            setLFAlbendazoleSecond(false);
            setNumCyclesLFMectizanAlbendazole(0);
            setNumCyclesLFAlbendazole(0);
        }
    }, [lymphaticFilariasis]);

    // Dates state
    const [DCTrainingCompletionDate, setDCTrainingCompletionDate] = useState("");
    const [medicineArrivalDate, setMedicineArrivalDate] = useState("");
    const [MDDStartDate, setMDDStartDate] = useState("");
    const [DMMEndDate, setDMMEndDate] = useState("");
    const [reportTransmissionDate, setReportTransmissionDate] = useState("");

    // Distributors state
    const [numMenDistributors, setNumMenDistributors] = useState(0);
    const [numWomenDistributors, setNumWomenDistributors] = useState(0);
    const [totalNumDistributors, setTotalNumDistributors] = useState(numMenDistributors + numWomenDistributors);

    // Update total anytime # men or # women is updated
    useEffect(() => {
        setTotalNumDistributors(numMenDistributors + numWomenDistributors)
    }, [numMenDistributors, numWomenDistributors]);

    // Denumber state
    const [menUnderSixMonths, setMenLessThanSixMonths] = useState(0);
    const [menSixMonthsToFiveYears, setMenSixMonthsToFiveYears] = useState(0);
    const [menFiveToFourteenYears, setMenFiveToFourteenYears] = useState(0);
    const [menFifteenAndOlder, setMenFifteenAndOlder] = useState(0);
    const [womenLessThanSixMonths, setWomenLessThanSixMonths] = useState(0);
    const [womenSixMonthsToFiveYears, setWomenSixMonthsToFiveYears] = useState(0);
    const [womenFiveToFourteenYears, setWomenFiveToFourteenYears] = useState(0);
    const [womenFifteenAndOlder, setWomenFifteenAndOlder] = useState(0);
    const [totalChildrenUnderSixMonths, setTotalChildrenUnderSixMonths] = useState(0);
    const [totalchilrenSixMonthsToveFiveYears, setTotalchilrenSixMonthsToveFiveYears] = useState(0);
    const [totalFiveToFourteenYears, setTotalFiveToFourteenYears] = useState(0);
    const [totalFifteenAndOlder, setTotalFifteenAndOlder] = useState(0);
    const [totalNumMen, setTotalNumMen] = useState(0);
    const [totalNumWomen, setTotalNumWomen] = useState(0);
    const [totalNumPersons, setTotalNumPersons] = useState(0);

    // Update totals
    useEffect(() => {
        setTotalNumMen(menUnderSixMonths + menSixMonthsToFiveYears + menFiveToFourteenYears + menFifteenAndOlder);
        setTotalNumWomen(womenLessThanSixMonths + womenSixMonthsToFiveYears + womenFiveToFourteenYears + womenFifteenAndOlder);
        setTotalNumPersons(totalNumMen + totalNumWomen);
        setTotalChildrenUnderSixMonths(menUnderSixMonths + womenLessThanSixMonths);
        setTotalchilrenSixMonthsToveFiveYears(menSixMonthsToFiveYears + womenSixMonthsToFiveYears);
        setTotalFiveToFourteenYears(menFiveToFourteenYears + womenFiveToFourteenYears);
        setTotalFifteenAndOlder(menFifteenAndOlder + womenFifteenAndOlder);
    }, [menUnderSixMonths, menSixMonthsToFiveYears, menFiveToFourteenYears, menFifteenAndOlder, womenLessThanSixMonths, womenSixMonthsToFiveYears, womenFiveToFourteenYears, womenFifteenAndOlder]);
        
    // Households
    const [numHouseholdsVisited, setNumHouseholdsVisited] = useState(0);
    const [numHouseholdsTreated, setNumHouseholdsTreated] = useState(0);
    const [geographicalCoverageOfHouseholds, setGeographicalCoverageOfHouseholds] = useState(0);

    // Update coverage
    useEffect(() => {
        setGeographicalCoverageOfHouseholds((numHouseholdsTreated / numHouseholdsVisited) * 100);
    }, [numHouseholdsVisited, numHouseholdsTreated]);

    // Morbidity Cases state
    const [numMenBlind, setNumMenBlind] = useState(0);
    const [numWomenBlind, setNumWomenBlind] = useState(0);
    const [totalNumBlind, setTotalNumBlind] = useState(numMenBlind + numWomenBlind);
    
    const [numMenLUpperLimbs, setNumMenLUpperLimbs] = useState(0);
    const [numMenRUpperLimbs, setNumMenRUpperLimbs] = useState(0);
    const [numMenLLowerMembers, setNumMenLLowerMembers] = useState(0);
    const [numMenRLowerMembers, setNumMenRLowerMembers] = useState(0);
    const [numWomenLUpperLimbs, setNumWomenLUpperLimbs] = useState(0);
    const [numWomenRUpperLimbs, setNumWomenRUpperLimbs] = useState(0);
    const [numWomenLLowerMembers, setNumWomenLLowerMembers] = useState(0);
    const [numWomenRLowerMembers, setNumWomenRLowerMembers] = useState(0);
    const [numWomenLeftBreast, setNumWomenLeftBreast] = useState(0);
    const [numWomenRightBreast, setNumWomenRightBreast] = useState(0);
    
    const [totalNumMenLymphedema, setTotalNumMenLymphedema] = useState(numMenLUpperLimbs + numMenRUpperLimbs + numMenLLowerMembers
        + numMenRLowerMembers);
    const [totalNumWomenLymphedema, setTotalNumWomenLymphedema] = useState(numWomenLUpperLimbs + numWomenRUpperLimbs + numWomenLLowerMembers
        + numWomenRLowerMembers + numWomenLeftBreast + numWomenRightBreast);
    const [totalNumLymphedema, setTotalNumLymphedema] = useState(totalNumMenLymphedema + totalNumWomenLymphedema);

    const [numMenTrichiasis, setNumMenTrichiasis] = useState(0);
    const [numWomenTrichiasis, setNumWomenTrichiasis] = useState(0);
    const [totalNumTrichiasis, setTotalNumTrichiasis] = useState(numMenTrichiasis + numWomenTrichiasis);
    const [numMenHydroceles, setNumMenHydroceles] = useState(0);
    const [numMenGuineaWorm, setNumMenGuineaWorm] = useState(0);
    const [numWomenGuineaWorm, setNumWomenGuineaWorm] = useState(0);
    const [totalNumGuineaWorm, setTotalNumGuineaWorm] = useState(numMenGuineaWorm + numWomenGuineaWorm);

    // Update total anytime # men or # women is updated
    useEffect(() => {
        setTotalNumBlind(numMenBlind + numWomenBlind);
        setTotalNumTrichiasis(numMenTrichiasis + numWomenTrichiasis);
        setTotalNumGuineaWorm(numMenGuineaWorm + numWomenGuineaWorm);
        setTotalNumMenLymphedema(numMenLUpperLimbs + numMenRUpperLimbs + numMenLLowerMembers
            + numMenRLowerMembers);
        setTotalNumWomenLymphedema(numWomenLUpperLimbs + numWomenRUpperLimbs + numWomenLLowerMembers
            + numWomenRLowerMembers + numWomenLeftBreast + numWomenRightBreast);
        setTotalNumLymphedema(numMenLUpperLimbs + numMenRUpperLimbs + numMenLLowerMembers
                + numMenRLowerMembers + numWomenLUpperLimbs + numWomenRUpperLimbs + numWomenLLowerMembers
                + numWomenRLowerMembers + numWomenLeftBreast + numWomenRightBreast);
    }, [numMenBlind, numWomenBlind, numMenTrichiasis, numWomenTrichiasis, numMenGuineaWorm, numWomenGuineaWorm,
        numMenLLowerMembers, numMenRLowerMembers, numMenLUpperLimbs, numMenRUpperLimbs, numWomenLLowerMembers, numWomenRLowerMembers,
        numWomenRUpperLimbs, numWomenLUpperLimbs, numWomenLeftBreast, numWomenRightBreast]);

    // Processing: Mectizan state
    const [numYoungMenMectizan, setNumYoungMenMectizan] = useState(0);
    const [numOldWomenMectizan, setNumOldWomenMectizan] = useState(0);
    const [numOldMenMectizan, setNumOldMenMectizan] = useState(0);
    const [numYoungWomenMectizan, setNumYoungWomenMectizan] = useState(0);
    const [totalNumMenMectizan, setTotalMenMectizan] = useState(numYoungMenMectizan + numOldMenMectizan);
    const [totalNumWomenMectizan, setTotalWomenMectizan] = useState(numYoungWomenMectizan + numOldWomenMectizan);
    const [totalNumMectizan, setTotalNumMectizan] = useState(totalNumMenMectizan + totalNumWomenMectizan);
    const [totalCoverageMectizan, setTotalCoverageMectizan] = useState((totalNumMectizan * 100) / totalNumPersons);

    // Update totals
    useEffect(() => {
        setTotalMenMectizan(numYoungMenMectizan + numOldMenMectizan);
        setTotalWomenMectizan(numYoungWomenMectizan + numOldWomenMectizan);
        setTotalNumMectizan(totalNumMenMectizan + totalNumWomenMectizan);
        setTotalCoverageMectizan((totalNumMectizan * 100) / totalNumPersons);
    }, [numYoungMenMectizan, numOldMenMectizan, numYoungWomenMectizan, numOldWomenMectizan, totalNumMenMectizan, totalNumWomenMectizan, totalNumMectizan, totalNumPersons]);

    // Processing: Mectizan and Albendazole state
    const [numYoungMenMectAlb, setNumYoungMenMectAlb] = useState(0);
    const [numOldWomenMectAlb, setNumOldWomenMectAlb] = useState(0);
    const [numOldMenMectAlb, setNumOldMenMectAlb] = useState(0);
    const [numYoungWomenMectAlb, setNumYoungWomenMectAlb] = useState(0);
    const [totalNumMenMectAlb, setTotalMenMectAlb] = useState(numYoungMenMectAlb + numOldMenMectAlb);
    const [totalNumWomenMectAlb, setTotalWomenMectAlb] = useState(numYoungWomenMectAlb + numOldWomenMectAlb);
    const [totalNumMectAlb, setTotalNumMectAlb] = useState(totalNumMenMectAlb + totalNumWomenMectAlb);
    const [totalCoverageMectAlb, setTotalCoverageMectAlb] = useState((totalNumMectAlb * 100) / totalNumPersons);

    // Update totals
    useEffect(() => {
        setTotalMenMectAlb(numYoungMenMectAlb + numOldMenMectAlb);
        setTotalWomenMectAlb(numYoungWomenMectAlb + numOldWomenMectAlb);
        setTotalNumMectAlb(totalNumMenMectAlb + totalNumWomenMectAlb);
        setTotalCoverageMectAlb((totalNumMectAlb * 100) / totalNumPersons);
    }, [numYoungMenMectAlb, numOldMenMectAlb, numYoungWomenMectAlb, numOldWomenMectAlb, totalNumMenMectAlb, totalNumWomenMectAlb, totalNumMectAlb, totalNumPersons]);

    // Processing: Albendazole (alone) state
    const [numYoungMenAlbendazoleTreat, setNumYoungMenAlbendazoleTreat] = useState(0);
    const [numOldWomenAlbendazoleTreat, setNumOldWomenAlbendazoleTreat] = useState(0);
    const [numOldMenAlbendazoleTreat, setNumOldMenAlbendazoleTreat] = useState(0);
    const [numYoungWomenAlbendazoleTreat, setNumYoungWomenAlbendazoleTreat] = useState(0);
    const [totalNumMenAlbendazoleTreat, setTotalMenAlbendazoleTreat] = useState(numYoungMenAlbendazoleTreat + numOldMenAlbendazoleTreat);
    const [totalNumWomenAlbendazoleTreat, setTotalWomenAlbendazoleTreat] = useState(numYoungWomenAlbendazoleTreat + numOldWomenAlbendazoleTreat);
    const [totalNumAlbendazoleTreat, setTotalNumAlbendazoleTreat] = useState(totalNumMenAlbendazoleTreat + totalNumWomenAlbendazoleTreat);
    const [totalCoverageAlbendazoleTreat, setTotalCoverageAlbendazoleTreat] = useState((totalNumAlbendazoleTreat * 100) / totalNumPersons);

    // Update totals
    useEffect(() => {
        setTotalMenAlbendazoleTreat(numYoungMenAlbendazoleTreat + numOldMenAlbendazoleTreat);
        setTotalWomenAlbendazoleTreat(numYoungWomenAlbendazoleTreat + numOldWomenAlbendazoleTreat);
        setTotalNumAlbendazoleTreat(totalNumMenAlbendazoleTreat + totalNumWomenAlbendazoleTreat);
        setTotalCoverageAlbendazoleTreat((totalNumAlbendazoleTreat * 100) / totalNumPersons);
    }, [numYoungMenAlbendazoleTreat, numOldMenAlbendazoleTreat, numYoungWomenAlbendazoleTreat, numOldWomenAlbendazoleTreat, totalNumMenAlbendazoleTreat, totalNumWomenAlbendazoleTreat, totalNumAlbendazoleTreat, totalNumPersons]);

    // Processing: Praziquantel state
    const [numMenPrazi, setNumMenPrazi] = useState(0);
    const [numWomenPrazi, setNumWomenPrazi] = useState(0);
    const [totalNumPrazi, setTotalNumPrazi] = useState(numMenPrazi + numWomenPrazi);
    const [totalCoveragePrazi, setTotalCoveragePrazi] = useState((totalNumPrazi * 100) / totalNumPersons);

    // Update total
    useEffect(() => {
        setTotalNumPrazi(numMenPrazi + numWomenPrazi);
        setTotalCoveragePrazi((totalNumPrazi * 100) / totalNumPersons);
    }, [numMenPrazi, numWomenPrazi, totalNumPrazi, totalNumPersons]);

    // Processing: Albendazole (Soil-transmitted helminthiasis)
    const [numMenAlbendazoleHelminthiasis, setNumMenAlbendazoleHelminthiasis] = useState(0);
    const [numWomenAlbendazoleHelminthiasis, setNumWomenAlbendazoleHelminthiasis] = useState(0);
    const [totalNumAlbendazoleHelminthiasis, setTotalNumAlbendazoleHelminthiasis] = useState(numMenAlbendazoleHelminthiasis + numWomenAlbendazoleHelminthiasis);
    const [totalCoverageAlbendazoleHelminthiasis, setTotalCoverageAlbendazoleHelminthiasis] = useState((totalNumAlbendazoleHelminthiasis * 100) / totalNumPersons);

    // Update total
    useEffect(() => {
        setTotalNumAlbendazoleHelminthiasis(numMenAlbendazoleHelminthiasis + numWomenAlbendazoleHelminthiasis);
        setTotalCoverageAlbendazoleHelminthiasis((totalNumAlbendazoleHelminthiasis * 100) / totalNumPersons);
    }, [numMenAlbendazoleHelminthiasis, numWomenAlbendazoleHelminthiasis, totalNumAlbendazoleHelminthiasis, totalNumPersons]);

    // Side effects state
    const [numSideEffectsReported, setNumSideEffectsReported] = useState(0);
    
     // Untreated state
     const [numInfants, setNumInfants] = useState(0);
     const [numPregnant, setNumPregnant] = useState(0);
     const [numBreastfeeding, setNumBreastfeeding] = useState(0);
     const [numBedridden, setNumBedridden] = useState(0);
     const [numRefused, setNumRefused] = useState(0);
     const [numAbsent, setNumAbsent] = useState(0);
     const [totalUntreated, setTotalUntreated] = useState(numInfants + numPregnant + numBreastfeeding + numBedridden
        + numRefused + numAbsent);

    // update total anytime the number is changed for any of the values
    useEffect(() => {
            setTotalUntreated(numInfants + numPregnant + numBreastfeeding + numBedridden
                + numRefused + numAbsent)
        }, [numInfants, numPregnant, numBreastfeeding, numBedridden, numRefused, numAbsent]);

     // Drug Management: Ivermectin
    const [ivermectinReceived, setIvermectinReceived] = useState(0);
    const [ivermectinUsed, setIvermectinUsed] = useState(0);
    const [ivermectinLost, setIvermectinLost] = useState(0);
    const [ivermectinReturned, setIvermectinReturned] = useState(0);
    const [ivermectinRemaining, setIvermectinRemaining] = useState(ivermectinReceived - ivermectinUsed - ivermectinLost);
    
    // update the total amount of ivermectin remaining once the other values change
    useEffect(() => {
        setIvermectinRemaining(prev => prev - (ivermectinUsed + ivermectinLost))
    }, [ivermectinUsed, ivermectinLost]);

    // Drug Management: Albendazole
    const [albendazoleReceived, setAlbendazoleReceived] = useState(0);
    const [albendazoleUsed, setAlbendazoleUsed] = useState(0);
    const [albendazoleLost, setAlbendazoleLost] = useState(0);
    const [albendazoleReturned, setAlbendazoleReturned] = useState(0);
    const [albendazoleRemaining, setAlbendazoleRemaining] = useState(albendazoleReceived - albendazoleUsed - albendazoleLost);
    
    // update the total amount of albendazole remaining once the other values change
    useEffect(() => {
        setAlbendazoleRemaining(prev => prev - (albendazoleUsed + albendazoleLost))
    }, [albendazoleUsed, albendazoleLost]);

    // Drug Management: Praziquantel
    const [praziquantelReceived, setPraziquantelReceived] = useState(0);
    const [praziquantelUsed, setPraziquantelUsed] = useState(0);
    const [praziquantelLost, setPraziquantelLost] = useState(0);
    const [praziquantelReturned, setPraziquantelReturned] = useState(0);
    const [praziquantelRemaining, setPraziquantelRemaining] = useState(praziquantelReceived - praziquantelUsed - praziquantelLost);
    
    // update the total amount of albendazole remaining once the other values change
    useEffect(() => {
        setPraziquantelRemaining(prev => prev - (praziquantelUsed + praziquantelLost))
    }, [praziquantelUsed, praziquantelLost]);

    const pages = [
        <IdentificationForm
            setDMMDay={setDMMDay}
            DMMDay={DMMDay}
            setRegisteredNurse={setRegisteredNurse}
            registeredNurse={registeredNurse}
            setProvinceName={setProvinceName}
            provinceName={provinceName}
            provinceId={provinceId}
            setProvinceId={setProvinceId}
            setHealthZoneName={setHealthZoneName}
            healthZoneName={healthZoneName}
            healthZoneId={healthZoneId}
            setHealthZoneId={setHealthZoneId}
            setHealthAreaName={setHealthAreaName}
            healthAreaName={healthAreaName}
            setHealthAreaId={setHealthAreaId}
            healthAreaId={healthAreaId}
            setVillageName={setVillageName}
            villageName={villageName}
            villageId={villageId}
            setVillageId={setVillageId}
        />,
        <TreatmentInformationForm
            setOnchocerciasis={setOnchocerciasis}
            onchocerciasis={onchocerciasis}
            setOnchocerciasisFirst={setOnchocerciasisFirst}
            onchocerciasisFirst={onchocerciasisFirst}
            setOnchocerciasisSecond={setOnchocerciasisSecond}
            onchocerciasisSecond={onchocerciasisSecond}

            setLymphaticFilariasis={setLymphaticFilariasis}
            lymphaticFilariasis={lymphaticFilariasis}
            setLFMectizanAlbendazole={setLFMectizanAlbendazole}
            LFMectizanAlbendazole={LFMectizanAlbendazole}
            setLFAlbendazoleFirst={setLFAlbendazoleFirst}
            LFAlbendazoleFirst={LFAlbendazoleFirst}
            setLFAlbendazoleSecond={setLFAlbendazoleSecond}
            LFAlbendazoleSecond={LFAlbendazoleSecond}

            setNumCyclesOnchocerciasis={setNumCyclesOnchocerciasis}
            numCyclesOnchocerciasis={numCyclesOnchocerciasis}
            setNumCyclesLFMectizanAlbendazole={setNumCyclesLFMectizanAlbendazole}
            numCyclesLFMectizanAlbendazole={numCyclesLFMectizanAlbendazole}
            setNumCyclesLFAlbendazole={setNumCyclesLFAlbendazole}
            numCyclesLFAlbendazole={numCyclesLFAlbendazole}
            
            setSchistosomiasis={setSchistosomiasis}
            schistosomiasis={schistosomiasis}
            setSoilTransmittedHelminthiasis={setSoilTransmittedHelminthiasis}
            soilTransmittedHelminthiasis={soilTransmittedHelminthiasis}
            setTrachoma={setTrachoma}
            trachoma={trachoma}
        />, 
        <DatesForm
            setDCTrainingCompletionDate={setDCTrainingCompletionDate}
            DCTrainingCompletionDate={DCTrainingCompletionDate}
            setMedicineArrivalDate={setMedicineArrivalDate}
            medicineArrivalDate={medicineArrivalDate}
            setMDDStartDate={setMDDStartDate}
            MDDStartDate={MDDStartDate}
            setDMMEndDate={setDMMEndDate}
            DMMEndDate={DMMEndDate}
            setReportTransmissionDate={setReportTransmissionDate}
            reportTransmissionDate={reportTransmissionDate}
        />, 
        <DistributorsForm
            setNumMenDistributors={setNumMenDistributors}
            numMenDistributors={numMenDistributors}
            setNumWomenDistributors={setNumWomenDistributors}
            numWomenDistributors={numWomenDistributors}
            totalNumDistributors={totalNumDistributors}
        />, 
        <Denumber1Form
            setMenLessThanSixMonths={setMenLessThanSixMonths}
            menUnderSixMonths={menUnderSixMonths}
            setMenSixMonthsToFiveYears={setMenSixMonthsToFiveYears}
            menSixMonthsToFiveYears={menSixMonthsToFiveYears}
            setMenFiveToFourteenYears={setMenFiveToFourteenYears}
            menFiveToFourteenYears={menFiveToFourteenYears}
            setMenFifteenAndOlder={setMenFifteenAndOlder}
            menFifteenAndOlder={menFifteenAndOlder}

            setWomenLessThanSixMonths={setWomenLessThanSixMonths}
            womenLessThanSixMonths={womenLessThanSixMonths}
            setWomenSixMonthsToFiveYears={setWomenSixMonthsToFiveYears}
            womenSixMonthsToFiveYears={womenSixMonthsToFiveYears}
            setWomenFiveToFourteenYears={setWomenFiveToFourteenYears}
            womenFiveToFourteenYears={womenFiveToFourteenYears}
            setWomenFifteenAndOlder={setWomenFifteenAndOlder}
            womenFifteenAndOlder={womenFifteenAndOlder}

            totalNumMen={totalNumMen}
            totalNumWomen={totalNumWomen}
        />, 
        <Denumber2Form
            totalChildrenUnderSixMonths={totalChildrenUnderSixMonths}
            totalchilrenSixMonthsToveFiveYears={totalchilrenSixMonthsToveFiveYears}
            totalFiveToFourteenYears={totalFiveToFourteenYears}
            totalFifteenAndOlder={totalFifteenAndOlder}
            totalNumPersons={totalNumPersons}
        />, 
        <Denumber3Form 
            setNumHouseholdsVisited={setNumHouseholdsVisited}
            numHouseholdsVisited={numHouseholdsVisited}
            setNumHouseholdsTreated={setNumHouseholdsTreated}
            numHouseholdsTreated={numHouseholdsTreated}
            geographicalCoverageOfHouseholds={geographicalCoverageOfHouseholds}
        />, 
        <MorbidityCasesForm
            setNumMenBlind={setNumMenBlind}
            numMenBlind={numMenBlind}
            setNumWomenBlind={setNumWomenBlind}
            numWomenBlind={numWomenBlind}
            totalNumBlind={totalNumBlind}
            
            setNumMenLUpperLimbs = {setNumMenLUpperLimbs}
            numMenLUpperLimbs = {numMenLUpperLimbs}
            setNumMenRUpperLimbs = {setNumMenRUpperLimbs}
            numMenRUpperLimbs = {numMenRUpperLimbs}
            setNumWomenLUpperLimbs = {setNumWomenLUpperLimbs}
            numWomenLUpperLimbs = {numWomenLUpperLimbs}
            setNumWomenRUpperLimbs = {setNumWomenRUpperLimbs}
            numWomenRUpperLimbs = {numWomenRUpperLimbs}
            setNumMenLLowerMembers = {setNumMenLLowerMembers}
            numMenLLowerMembers = {numMenLLowerMembers}
            setNumMenRLowerMembers = {setNumMenRLowerMembers}
            numMenRLowerMembers = {numMenRLowerMembers}
            setNumWomenLLowerMembers = {setNumWomenLLowerMembers}
            numWomenLLowerMembers = {numWomenLLowerMembers}
            setNumWomenRLowerMembers = {setNumWomenRLowerMembers}
            numWomenRLowerMembers = {numWomenRLowerMembers}
            setNumWomenLeftBreast = {setNumWomenLeftBreast}
            numWomenLeftBreast = {numWomenLeftBreast}
            setNumWomenRightBreast = {setNumWomenRightBreast}
            numWomenRightBreast = {numWomenRightBreast}
            setTotalNumMenLymphedema = {setTotalNumMenLymphedema}
            setTotalNumWomenLymphedema = {setTotalNumWomenLymphedema}
            setTotalNumLymphedema = {setTotalNumLymphedema}
            totalNumWomenLymphedema = {totalNumWomenLymphedema}
            totalNumMenLymphedema = {totalNumMenLymphedema}
            totalNumLymphedema = {totalNumLymphedema}
            
            
            setNumMenTrichiasis={setNumMenTrichiasis}
            numMenTrichiasis={numMenTrichiasis}
            setNumWomenTrichiasis={setNumWomenTrichiasis}
            numWomenTrichiasis={numWomenTrichiasis}
            totalNumTrichiasis={totalNumTrichiasis}
            setNumMenGuineaWorm={setNumMenGuineaWorm}
            numMenGuineaWorm={numMenGuineaWorm}
            setNumWomenGuineaWorm={setNumWomenGuineaWorm}
            numWomenGuineaWorm={numWomenGuineaWorm}
            totalNumGuineaWorm={totalNumGuineaWorm}
            numMenHydroceles = {numMenHydroceles}
            setNumMenHydroceles = {setNumMenHydroceles}
        />,
        <ProcessingForm
            // Mectizan
            setNumYoungMenMectizan={setNumYoungMenMectizan}
            setNumOldMenMectizan={setNumOldMenMectizan}
            setNumYoungWomenMectizan={setNumYoungWomenMectizan}
            setNumOldWomenMectizan={setNumOldWomenMectizan}
            numYoungMenMectizan={numYoungMenMectizan}
            numYoungWomenMectizan={numYoungWomenMectizan}
            numOldMenMectizan={numOldMenMectizan}
            numOldWomenMectizan={numOldWomenMectizan}
            totalNumWomenMectizan={totalNumWomenMectizan}
            totalNumMenMectizan={totalNumMenMectizan}
            totalNumMectizan={totalNumMectizan}
            totalCoverageMectizan={totalCoverageMectizan}

            // Mectizan and Albendazole
            setNumYoungMenMectAlb={setNumYoungMenMectAlb}
            setNumOldMenMectAlb={setNumOldMenMectAlb}
            setNumYoungWomenMectAlb={setNumYoungWomenMectAlb}
            setNumOldWomenMectAlb={setNumOldWomenMectAlb}
            numYoungMenMectAlb={numYoungMenMectAlb}
            numYoungWomenMectAlb={numYoungWomenMectAlb}
            numOldMenMectAlb={numOldMenMectAlb}
            numOldWomenMectAlb={numOldWomenMectAlb}
            totalNumWomenMectAlb={totalNumWomenMectAlb}
            totalNumMenMectAlb={totalNumMenMectAlb}
            totalNumMectAlb={totalNumMectAlb}
            totalCoverageMectAlb={totalCoverageMectAlb}

            // Albendazole (alone)
            setNumYoungMenAlbendazoleTreat={setNumYoungMenAlbendazoleTreat}
            setNumOldMenAlbendazoleTreat={setNumOldMenAlbendazoleTreat}
            setNumYoungWomenAlbendazoleTreat={setNumYoungWomenAlbendazoleTreat}
            setNumOldWomenAlbendazoleTreat={setNumOldWomenAlbendazoleTreat}
            numYoungMenAlbendazoleTreat={numYoungMenAlbendazoleTreat}
            numYoungWomenAlbendazoleTreat={numYoungWomenAlbendazoleTreat}
            numOldMenAlbendazoleTreat={numOldMenAlbendazoleTreat}
            numOldWomenAlbendazoleTreat={numOldWomenAlbendazoleTreat}
            totalNumWomenAlbendazoleTreat={totalNumWomenAlbendazoleTreat}
            totalNumMenAlbendazoleTreat={totalNumMenAlbendazoleTreat}
            totalNumAlbendazoleTreat={totalNumAlbendazoleTreat}
            totalCoverageAlbendazoleTreat={totalCoverageAlbendazoleTreat}
            
            // Praziquantel
            setNumMenPrazi={setNumMenPrazi}
            numMenPrazi={numMenPrazi}
            setNumWomenPrazi={setNumWomenPrazi}
            numWomenPrazi={numWomenPrazi}
            setTotalNumPrazi={setTotalNumPrazi}
            totalNumPrazi={totalNumPrazi}
            setTotalCoveragePrazi={setTotalCoveragePrazi}
            totalCoveragePrazi={totalCoveragePrazi}

            // Albendazole (Soil-transmitted helminthiasis)
            setNumMenAlbendazoleHelminthiasis={setNumMenAlbendazoleHelminthiasis}
            numMenAlbendazoleHelminthiasis={numMenAlbendazoleHelminthiasis}
            setNumWomenAlbendazoleHelminthiasis={setNumWomenAlbendazoleHelminthiasis}
            numWomenAlbendazoleHelminthiasis={numWomenAlbendazoleHelminthiasis}
            setTotalNumAlbendazoleHelminthiasis={setTotalNumAlbendazoleHelminthiasis}
            totalNumAlbendazoleHelminthiasis={totalNumAlbendazoleHelminthiasis}
            setTotalCoverageAlbendazoleHelminthiasis={setTotalCoverageAlbendazoleHelminthiasis}
            totalCoverageAlbendazoleHelminthiasis={totalCoverageAlbendazoleHelminthiasis}

            // Side effects
            setNumSideEffectsReported={setNumSideEffectsReported}
            numSideEffectsReported={numSideEffectsReported}
        />,
        <UntreatedForm
            setNumInfants={setNumInfants}
            numInfants={numInfants}
            setNumPregnant={setNumPregnant}
            numPregnant={numPregnant}
            setNumBreastfeeding={setNumBreastfeeding}
            numBreastfeeding={numBreastfeeding}
            setNumBedridden={setNumBedridden}
            numBedridden={numBedridden}
            setNumRefused={setNumRefused}
            numRefused={numRefused}
            setNumAbsent={setNumAbsent}
            numAbsent={numAbsent}
            totalUntreated={totalUntreated}
        />,
        <DrugManagementForm 
            // Ivermectin
            ivermectinReceived={ivermectinReceived}
            ivermectinUsed={ivermectinUsed}
            ivermectinLost={ivermectinLost}
            ivermectinRemaining={ivermectinRemaining}
            ivermectinReturned={ivermectinReturned}
            setIvermectinReceived={setIvermectinReceived}
            setIvermectinUsed={setIvermectinUsed}
            setIvermectinLost={setIvermectinLost}
            setIvermectinRemaining={setIvermectinRemaining}
            setIvermectinReturned={setIvermectinReturned}

            // Albendazole
            albendazoleReceived={albendazoleReceived}
            albendazoleUsed={albendazoleUsed}
            albendazoleLost={albendazoleLost}
            albendazoleRemaining={albendazoleRemaining}
            albendazoleReturned={albendazoleReturned}
            setAlbendazoleReceived={setAlbendazoleReceived}
            setAlbendazoleUsed={setAlbendazoleUsed}
            setAlbendazoleLost={setAlbendazoleLost}
            setAlbendazoleRemaining={setAlbendazoleRemaining}
            setAlbendazoleReturned={setAlbendazoleReturned}

            // Praziquantel
            praziquantelReceived={praziquantelReceived}
            praziquantelUsed={praziquantelUsed}
            praziquantelLost={praziquantelLost}
            praziquantelRemaining={praziquantelRemaining}
            praziquantelReturned={praziquantelReturned}
            setPraziquantelReceived={setPraziquantelReceived}
            setPraziquantelUsed={setPraziquantelUsed}
            setPraziquantelLost={setPraziquantelLost}
            setPraziquantelRemaining={setPraziquantelRemaining}
            setPraziquantelReturned={setPraziquantelReturned}
        />
    ];

    // resets all states to default values
    const resetAllStates = () => {
        setDMMDay("");
        setRegisteredNurse("");
        
        // Treatment Information state
        setOnchocerciasis(false);
        setNumCyclesOnchocerciasis(0);
        setOnchocerciasisFirst(false);
        setOnchocerciasisSecond(false);
        setLymphaticFilariasis(false);
        setLFMectizanAlbendazole(false);
        setNumCyclesLFMectizanAlbendazole(0);
        setNumCyclesLFAlbendazole(0);
        setLFAlbendazoleFirst(false);
        setLFAlbendazoleSecond(false);
        setSchistosomiasis(false);
        setSoilTransmittedHelminthiasis(false);
        setTrachoma(false);

        // Dates state
        setDCTrainingCompletionDate("");
        setMedicineArrivalDate("");
        setMDDStartDate("");
        setDMMEndDate("");
        setReportTransmissionDate("");
    
        // Distributors state
        setNumMenDistributors(0);
        setNumWomenDistributors(0);

        // Denumber state
        setMenLessThanSixMonths(0);
        setMenSixMonthsToFiveYears(0);
        setMenFiveToFourteenYears(0);
        setMenFifteenAndOlder(0);
        setWomenLessThanSixMonths(0);
        setWomenSixMonthsToFiveYears(0);
        setWomenFiveToFourteenYears(0);
        setWomenFifteenAndOlder(0);
        setTotalChildrenUnderSixMonths(0);
        setTotalchilrenSixMonthsToveFiveYears(0);
        setTotalFiveToFourteenYears(0);
        setTotalFifteenAndOlder(0);
        setTotalNumMen(0);
        setTotalNumWomen(0);
        setTotalNumPersons(0);

        // Households
        setNumHouseholdsVisited(0);
        setNumHouseholdsTreated(0);
        setGeographicalCoverageOfHouseholds(0);

        // Morbidity Cases state
        setNumMenBlind(0);
        setNumWomenBlind(0);
        setNumMenTrichiasis(0);
        setNumWomenTrichiasis(0);
        setNumMenHydroceles(0);
        setNumMenGuineaWorm(0);
        setNumWomenGuineaWorm(0);

        // Processing: Mectizan state
        setNumYoungMenMectizan(0);
        setNumOldWomenMectizan(0);
        setNumOldMenMectizan(0);
        setNumYoungWomenMectizan(0);

        // Processing: Mectizan and Albendazole state
        setNumYoungMenMectAlb(0);
        setNumOldWomenMectAlb(0);
        setNumOldMenMectAlb(0);
        setNumYoungWomenMectAlb(0);
        // todo: side effects

        // Processing: Albendazole (alone) state
        setNumYoungMenAlbendazoleTreat(0);
        setNumOldWomenAlbendazoleTreat(0);
        setNumOldMenAlbendazoleTreat(0);
        setNumYoungWomenAlbendazoleTreat(0);
 
        // Processing: Praziquantel state
        setNumMenPrazi(0);
        setNumWomenPrazi(0);

        // Processing: Albendazole (Soil-transmitted helminthiasis)
        setNumMenAlbendazoleHelminthiasis(0);
        setNumWomenAlbendazoleHelminthiasis(0);

        // todo: probably remove this

         // Untreated state
         setNumInfants(0);
         setNumPregnant(0);
         setNumBreastfeeding(0);
         setNumBedridden(0);
         setNumRefused(0);
         setNumAbsent(0);

         // Drug Management: Ivermectin
        setIvermectinReceived(0);
        setIvermectinUsed(0);
        setIvermectinLost(0);
        setIvermectinReturned(0);

        // Drug Management: Albendazole
        setAlbendazoleReceived(0);
        setAlbendazoleUsed(0);
        setAlbendazoleLost(0);
        setAlbendazoleReturned(0);
    
        // Drug Management: Praziquantel
        setPraziquantelReceived(0);
        setPraziquantelUsed(0);
        setPraziquantelLost(0);
        setPraziquantelReturned(0);
    }

    // report object to be sent to the server
    // todo: needs to be finished
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
        "treatment_circles": {
            "onchocerciasis": numCyclesOnchocerciasis,
            // todo: implement and correct the rest
            "lymphatic_filariasis": 0,
            "schistosomiasis": 0,
            "soil_transmitted_helminthiasis": 0,
            "trachoma": 0,
        },

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
        // TODO: state functionality not done yet
        // lymphedema: {
        //     men: {
        //         upper_limbs: {
        //             left: ,
        //             right:
        //         },
        //         lower_limbs: {
        //             left: ,
        //             right: 
        //         }
        //     },
        //     women: {
        //         upper_limbs: {
        //             left:,
        //             right:
        //         },
        //         lower_limbs: {
        //             left:,
        //             right:
        //         },
        //         breast:
        //     }
        // },
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
        side_effects_num: 0, // todo: fix the side effects states (only one is needed)

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
    }

    // Conditional rendering page navigation
    const renderPageContent = () => {
            return (
                <>
                    {pages[activePage]}
                    <View style={styles.buttonsContainer}>
                        {activePage > 0 && <BackButton setActivePage={setActivePage}/>}
                        {activePage < pages.length - 1 && <NextButton setActivePage={setActivePage}/>}
                        {activePage === pages.length - 1 && 
                        <SubmitButton 
                            setLandingPage={props.setLandingPage}
                            report={report}
                        />}
                    </View>
                    <ProgressBar progress={(activePage + 1) / pages.length} />
                </>
            );
    }

    
    return (
        <View style={styles.container}>
            <CrossIcon setLandingPage={props.setLandingPage} landingPage={props.landingPage}/>
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
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        top: Platform.OS === 'android' ? StatusBar.currentHeight : 45,
        bottom: 0,
        backgroundColor: '#EC1C24',
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
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 30
    }
});

