import React, {useState, useEffect} from 'react';
import {Platform, Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';

import BackButton from './BackButton';
import CrossIcon from './CrossIcon';
import NextButton from './NextButton';
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
import IvermectinForm from './pages/IvermectinForm';
import AlbendazoleForm from './pages/AlbendazoleForm';
import PraziquantelForm from './pages/PraziquantelForm';
import Summary from './pages/Summary';

export default function DailyReportForm() {
    const [activePage, setActivePage] = useState(null);

    // Identification state
    const [DMMDay, setDMMDay] = useState("");
    const [registeredNurse, setRegisteredNurse] = useState("");
    const [provinceName, setProvinceName] = useState("");
    const [healthZoneName, setHealthZoneName] = useState("");
    const [healthArea, setHealthArea] = useState("");
    const [villageName, setVillageName] = useState("");

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
    }, [numMenBlind, numWomenBlind, numMenTrichiasis, numWomenTrichiasis, numMenGuineaWorm, numWomenGuineaWorm]);

    // Processing: Mectizan state
    const [numYoungMenMectizan, setNumYoungMenMectizan] = useState(0);
    const [numOldWomenMectizan, setNumOldWomenMectizan] = useState(0);
    const [numOldMenMectizan, setNumOldMenMectizan] = useState(0);
    const [numYoungWomenMectizan, setNumYoungWomenMectizan] = useState(0);
    const [totalNumMenMectizan, setTotalMenMectizan] = useState(numYoungMenMectizan + numOldMenMectizan);
    const [totalNumWomenMectizan, setTotalWomenMectizan] = useState(numYoungWomenMectizan + numOldWomenMectizan);
    const [totalNumMectizan, setTotalNumMectizan] = useState(totalNumMenMectizan + totalNumWomenMectizan);
    const [totalCoverageMectizan, setTotalCoverageMectizan] = useState((totalNumMectizan * 100) / totalNumPersons);
    const [numSideEffectsReportedMectizan, setNumSideEffectsReportedMectizan] = useState(0);

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
    const [numSideEffectsReportedMectAlb, setNumSideEffectsReportedMectAlb] = useState(0);

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
    const [numSideEffectsReportedAlbendazoleTreat, setNumSideEffectsReportedAlbendazoleTreat] = useState(0);

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
    const [numSideEffectsReportedPrazi, setNumSideEffectsReportedPrazi] = useState(0);

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
    const [numSideEffectsReportedAlbendazoleHelminthiasis, setNumSideEffectsReportedAlbendazoleHelminthiasis] = useState(0);

    // Update total
    useEffect(() => {
        setTotalNumAlbendazoleHelminthiasis(numMenAlbendazoleHelminthiasis + numWomenAlbendazoleHelminthiasis);
        setTotalCoverageAlbendazoleHelminthiasis((totalNumAlbendazoleHelminthiasis * 100) / totalNumPersons);
    }, [numMenAlbendazoleHelminthiasis, numWomenAlbendazoleHelminthiasis, totalNumAlbendazoleHelminthiasis, totalNumPersons]);

    // updates for praziquantel totals
    // useEffect(() => {
    //     setTotalNumAlb(numMenAlb + numWomenAlb)
    // }, [numMenAlb, numWomenAlb]);

    // useEffect(() => {
    //     setTotalGeohelminthiasesCoverage((totalNumAlb * 100) / totalNumPersons)
    // }, [totalNumAlb, totalNumPersons]);
    
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

     // Ivermectin updated
    const [ivermectinReceived, setIvermectinReceived] = useState(0);
    const [ivermectinUsed, setIvermectinUsed] = useState(0);
    const [ivermectinLost, setIvermectinLost] = useState(0);
    const [ivermectinReturned, setIvermectinReturned] = useState(0);
    const [ivermectinRemaining, setIvermectinRemaining] = useState(ivermectinReceived - ivermectinUsed - ivermectinLost);
    
    // update the total amount of ivermectin remaining once the other values change
    useEffect(() => {
        setIvermectinRemaining(ivermectinReceived - (ivermectinUsed + ivermectinLost))
    }, [ivermectinReceived, ivermectinUsed, ivermectinLost]);

    // Albendazole updated
    const [albendazoleReceived, setAlbendazoleReceived] = useState(0);
    const [albendazoleUsed, setAlbendazoleUsed] = useState(0);
    const [albendazoleLost, setAlbendazoleLost] = useState(0);
    const [albendazoleReturned, setAlbendazoleReturned] = useState(0);
    const [albendazoleRemaining, setAlbendazoleRemaining] = useState(albendazoleReceived - albendazoleUsed - albendazoleLost);
    
    // update the total amount of albendazole remaining once the other values change
    useEffect(() => {
        setAlbendazoleRemaining(albendazoleReceived - (albendazoleUsed + albendazoleLost))
    }, [albendazoleReceived, albendazoleUsed, albendazoleLost]);

    // Praziquantel updated
    const [praziquantelReceived, setPraziquantelReceived] = useState(0);
    const [praziquantelUsed, setPraziquantelUsed] = useState(0);
    const [praziquantelLost, setPraziquantelLost] = useState(0);
    const [praziquantelReturned, setPraziquantelReturned] = useState(0);
    const [praziquantelRemaining, setPraziquantelRemaining] = useState(praziquantelReceived - praziquantelUsed - praziquantelLost);
    
    // update the total amount of albendazole remaining once the other values change
    useEffect(() => {
        setPraziquantelRemaining(praziquantelReceived - (praziquantelUsed + praziquantelLost))
    }, [praziquantelReceived, praziquantelUsed, praziquantelLost]);

    const pages = [
        <IdentificationForm
            setDMMDay={setDMMDay}
            DMMDay={DMMDay}
            setRegisteredNurse={setRegisteredNurse}
            registeredNurse={registeredNurse}
            setProvinceName={setProvinceName}
            provinceName={provinceName}
            setHealthZoneName={setHealthZoneName}
            healthZoneName={healthZoneName}
            setHealthArea={setHealthArea}
            healthArea={healthArea}
            setVillageName={setVillageName}
            villageName={villageName}
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
            setNumSideEffectsReportedMectizan={setNumSideEffectsReportedMectizan}
            numYoungMenMectizan={numYoungMenMectizan}
            numYoungWomenMectizan={numYoungWomenMectizan}
            numOldMenMectizan={numOldMenMectizan}
            numOldWomenMectizan={numOldWomenMectizan}
            totalNumWomenMectizan={totalNumWomenMectizan}
            totalNumMenMectizan={totalNumMenMectizan}
            totalNumMectizan={totalNumMectizan}
            totalCoverageMectizan={totalCoverageMectizan}
            numSideEffectsReportedMectizan={numSideEffectsReportedMectizan}

            // Mectizan and Albendazole
            setNumYoungMenMectAlb={setNumYoungMenMectAlb}
            setNumOldMenMectAlb={setNumOldMenMectAlb}
            setNumYoungWomenMectAlb={setNumYoungWomenMectAlb}
            setNumOldWomenMectAlb={setNumOldWomenMectAlb}
            setNumSideEffectsReportedMectAlb={setNumSideEffectsReportedMectAlb}
            numYoungMenMectAlb={numYoungMenMectAlb}
            numYoungWomenMectAlb={numYoungWomenMectAlb}
            numOldMenMectAlb={numOldMenMectAlb}
            numOldWomenMectAlb={numOldWomenMectAlb}
            totalNumWomenMectAlb={totalNumWomenMectAlb}
            totalNumMenMectAlb={totalNumMenMectAlb}
            totalNumMectAlb={totalNumMectAlb}
            totalCoverageMectAlb={totalCoverageMectAlb}
            numSideEffectsReportedMectAlb={numSideEffectsReportedMectAlb}

            // Albendazole (alone)
            setNumYoungMenAlbendazoleTreat={setNumYoungMenAlbendazoleTreat}
            setNumOldMenAlbendazoleTreat={setNumOldMenAlbendazoleTreat}
            setNumYoungWomenAlbendazoleTreat={setNumYoungWomenAlbendazoleTreat}
            setNumOldWomenAlbendazoleTreat={setNumOldWomenAlbendazoleTreat}
            setNumSideEffectsReportedAlbendazoleTreat={setNumSideEffectsReportedAlbendazoleTreat}
            numYoungMenAlbendazoleTreat={numYoungMenAlbendazoleTreat}
            numYoungWomenAlbendazoleTreat={numYoungWomenAlbendazoleTreat}
            numOldMenAlbendazoleTreat={numOldMenAlbendazoleTreat}
            numOldWomenAlbendazoleTreat={numOldWomenAlbendazoleTreat}
            totalNumWomenAlbendazoleTreat={totalNumWomenAlbendazoleTreat}
            totalNumMenAlbendazoleTreat={totalNumMenAlbendazoleTreat}
            totalNumAlbendazoleTreat={totalNumAlbendazoleTreat}
            totalCoverageAlbendazoleTreat={totalCoverageAlbendazoleTreat}
            numSideEffectsReportedAlbendazoleTreat={numSideEffectsReportedAlbendazoleTreat}
            
            // Praziquantel
            setNumMenPrazi={setNumMenPrazi}
            numMenPrazi={numMenPrazi}
            setNumWomenPrazi={setNumWomenPrazi}
            numWomenPrazi={numWomenPrazi}
            setTotalNumPrazi={setTotalNumPrazi}
            totalNumPrazi={totalNumPrazi}
            setTotalCoveragePrazi={setTotalCoveragePrazi}
            totalCoveragePrazi={totalCoveragePrazi}
            setNumSideEffectsReportedPrazi={setNumSideEffectsReportedPrazi}
            numSideEffectsReportedPrazi={numSideEffectsReportedPrazi}

            // Albendazole (Soil-transmitted helminthiasis)
            setNumMenAlbendazoleHelminthiasis={setNumMenAlbendazoleHelminthiasis}
            numMenAlbendazoleHelminthiasis={numMenAlbendazoleHelminthiasis}
            setNumWomenAlbendazoleHelminthiasis={setNumWomenAlbendazoleHelminthiasis}
            numWomenAlbendazoleHelminthiasis={numWomenAlbendazoleHelminthiasis}
            setTotalNumAlbendazoleHelminthiasis={setTotalNumAlbendazoleHelminthiasis}
            totalNumAlbendazoleHelminthiasis={totalNumAlbendazoleHelminthiasis}
            setTotalCoverageAlbendazoleHelminthiasis={setTotalCoverageAlbendazoleHelminthiasis}
            totalCoverageAlbendazoleHelminthiasis={totalCoverageAlbendazoleHelminthiasis}
            setNumSideEffectsReportedAlbendazoleHelminthiasis={setNumSideEffectsReportedAlbendazoleHelminthiasis}
            numSideEffectsReportedAlbendazoleHelminthiasis={numSideEffectsReportedAlbendazoleHelminthiasis}
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
        <IvermectinForm
            setIvermectinReceived={setIvermectinReceived}
            ivermectinReceived={ivermectinReceived}
            setIvermectinUsed={setIvermectinUsed}
            ivermectinUsed={ivermectinUsed}
            setIvermectinLost={setIvermectinLost}
            ivermectinLost={ivermectinLost}
            setIvermectinReturned={setIvermectinReturned}
            ivermectinReturned={ivermectinReturned}
            ivermectinRemaining={ivermectinRemaining}
        />,
        <AlbendazoleForm
            setAlbendazoleReceived={setAlbendazoleReceived}
            albendazoleReceived={albendazoleReceived}
            setAlbendazoleUsed={setAlbendazoleUsed}
            albendazoleUsed={albendazoleUsed}
            setAlbendazoleLost={setAlbendazoleLost}
            albendazoleLost={albendazoleLost}
            setAlbendazoleReturned={setAlbendazoleReturned}
            albendazoleReturned={albendazoleReturned}
            albendazoleRemaining={albendazoleRemaining}
        />,
        <PraziquantelForm
            setPraziquantelReceived={setPraziquantelReceived}
            praziquantelReceived={praziquantelReceived}
            setPraziquantelUsed={setPraziquantelUsed}
            praziquantelUsed={praziquantelUsed}
            setPraziquantelLost={setPraziquantelLost}
            praziquantelLost={praziquantelLost}
            setPraziquantelReturned={setPraziquantelReturned}
            praziquantelReturned={praziquantelReturned}
            praziquantelRemaining={praziquantelRemaining}
        />,
        <Summary />
    ];

    const openForm = () => setActivePage(0);  // Opens form by setting currently active page to 0 (first page)

    // Conditional rendering page navigation
    const renderPageContent = () => {
        if (activePage === null) {
            return (
                <>
                    <Pressable onPress={openForm} style={styles.newReportPressable} >
                        <Text style={styles.newReportText}>New Report</Text>
                    </Pressable>
                </>
            );
        } else {
            return (
                <>
                    {pages[activePage]}
                    <View style={styles.buttonsContainer}>
                        {activePage > 0 && <BackButton setActivePage={setActivePage}/>}
                        {activePage < pages.length - 1 && <NextButton setActivePage={setActivePage}/>}
                    </View>
                    <ProgressBar progress={(activePage + 1) / pages.length} />
                </>
            );
        }
    }

    // Render form component
    return (
        <View style={activePage !== null ? styles.container : {...styles.container, ...styles.containerInactive}}>
            <CrossIcon activePage={activePage} setActivePage={setActivePage} />
            {renderPageContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        position: 'absolute',
        left: 0,
        right: 0,
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
    containerInactive: {
        top: null,
        height: 67,
        justifyContent: 'center',
    },
    newReportPressable: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    newReportText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 23,
        lineHeight: 28,
    },
    buttonsContainer: {
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 30
    }
});

