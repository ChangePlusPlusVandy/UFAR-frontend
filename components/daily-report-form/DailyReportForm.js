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
import MorbidityEstimationForm from './pages/MorbidityEstimationForm';
import TrichiasisForm from './pages/TrichiasisForm';
import GuineaWormForm from './pages/GuineaWormForm';
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

    // DENUMBER
    // women and men count
    const [menUnderSixMonths, setMenLessThanSixMonths] = useState(0);
    const [menSixMonthsToFiveYears, setMenSixMonthsToFiveYears] = useState(0);
    const [menFiveToFourteenYears, setMenFiveToFourteenYears] = useState(0);
    const [menFifteenAndOlder, setMenFifteenAndOlder] = useState(0);

    const [womenLessThanSixMonths, setWomenLessThanSixMonths] = useState(0);
    const [womenSixMonthsToFiveYears, setWomenSixMonthsToFiveYears] = useState(0);
    const [womenFiveToFourteenYears, setWomenFiveToFourteenYears] = useState(0);
    const [womenFifteenAndOlder, setWomenFifteenAndOlder] = useState(0);

    // total count
    const [totalChildrenUnderSixMonths, setTotalChildrenUnderSixMonths] = useState(0);
    const [totalchilrenSixMonthsToveFiveYears, setTotalchilrenSixMonthsToveFiveYears] = useState(0);
    const [totalFiveToFourteenYears, setTotalFiveToFourteenYears] = useState(0);
    const [totalFifteenAndOlder, setTotalFifteenAndOlder] = useState(0);

    const [totalNumMen, setTotalNumMen] = useState(0);
    const [totalNumWomen, setTotalNumWomen] = useState(0);

    const [totalNumPersons, setTotalNumPersons] = useState(0);

    // set all totals depending on their variables
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
    // calculating the theurapical coverage of households
    useEffect(() => {
        setGeographicalCoverageOfHouseholds((numHouseholdsTreated / numHouseholdsVisited) * 100);
    }, [numHouseholdsVisited, numHouseholdsTreated]);


    // Estimation of Morbidity Cases state
    const [numMenBlind, setNumMenBlind] = useState(0);
    const [numWomenBlind, setNumWomenBlind] = useState(0);
    const [totalNumBlind, setTotalNumBlind] = useState(numMenBlind + numWomenBlind);

    // Update total anytime # men or # women is updated
    useEffect(() => {
        setTotalNumBlind(numMenBlind + numWomenBlind)
    }, [numMenBlind, numWomenBlind]);
    // TODO: Insert state

    // Estimation of Trichiasis
    const [numMenTrichiasis, setNumMenTrichiasis] = useState(0);
    const [numWomenTrichiasis, setNumWomenTrichiasis] = useState(0);
    const [totalNumTrichiasis, setTotalNumTrichiasis] = useState(numMenTrichiasis + numWomenTrichiasis);

    // update total anytime the number of men or women is updated
    useEffect(() => {
        setTotalNumTrichiasis(numMenTrichiasis + numWomenTrichiasis)
    }, [numMenTrichiasis, numWomenTrichiasis]);

     // Estimation of Guinea Worm
     const [numMenGuineaWorm, setNumMenGuineaWorm] = useState(0);
     const [numWomenGuineaWorm, setNumWomenGuineaWorm] = useState(0);
     const [totalNumGuineaWorm, setTotalNumGuineaWorm] = useState(numMenGuineaWorm + numWomenGuineaWorm);
 
     // update total anytime the number of men or women is updated
     useEffect(() => {
         setTotalNumGuineaWorm(numMenGuineaWorm + numWomenGuineaWorm)
     }, [numMenGuineaWorm, numWomenGuineaWorm]);

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

    // Albendazole updated
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
        <MorbidityEstimationForm
            setNumMenBlind={setNumMenBlind}
            numMenBlind={numMenBlind}
            setNumWomenBlind={setNumWomenBlind}
            numWomenBlind={numWomenBlind}
            totalNumBlind={totalNumBlind}
        />, 
        <TrichiasisForm
            setNumMenTrichiasis={setNumMenTrichiasis}
            numMenTrichiasis={numMenTrichiasis}
            setNumWomenTrichiasis={setNumWomenTrichiasis}
            numWomenTrichiasis={numWomenTrichiasis}
            totalNumTrichiasis={totalNumTrichiasis}
        />,
        <GuineaWormForm
            setNumMenGuineaWorm={setNumMenGuineaWorm}
            numMenGuineaWorm={numMenGuineaWorm}
            setNumWomenGuineaWorm={setNumWomenGuineaWorm}
            numWomenGuineaWorm={numWomenGuineaWorm}
            totalNumGuineaWorm={totalNumGuineaWorm}
        />,
        <IvermectinForm
            setIvermectinReceived={setIvermectinReceived}
            ivermectinReceived={ivermectinReceived}
            setIvermectinUsed={setIvermectinUsed}
            ivermectinUsed={ivermectinUsed}
            setIvermectinLost ={setIvermectinLost}
            ivermectinLost = {ivermectinLost}
            setIvermectinReturned = {setIvermectinReturned}
            ivermectinReturned = {ivermectinReturned}
            ivermectinRemaining = {ivermectinRemaining}
        />,
        <AlbendazoleForm
            setAlbendazoleReceived={setAlbendazoleReceived}
            albendazoleReceived={albendazoleReceived}
            setAlbendazoleUsed={setAlbendazoleUsed}
            albendazoleUsed={albendazoleUsed}
            setAlbendazoleLost ={setAlbendazoleLost}
            albendazoleLost = {albendazoleLost}
            setAlbendazoleReturned = {setAlbendazoleReturned}
            albendazoleReturned = {albendazoleReturned}
            albendazoleRemaining = {albendazoleRemaining}
        />,
        <PraziquantelForm
            setPraziquantelReceived={setPraziquantelReceived}
            praziquantelReceived={praziquantelReceived}
            setPraziquantelUsed={setPraziquantelUsed}
            praziquantelUsed={praziquantelUsed}
            setPraziquantelLost ={setPraziquantelLost}
            praziquantelLost = {praziquantelLost}
            setPraziquantelReturned = {setPraziquantelReturned}
            praziquantelReturned = {praziquantelReturned}
            praziquantelRemaining = {praziquantelRemaining}
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

