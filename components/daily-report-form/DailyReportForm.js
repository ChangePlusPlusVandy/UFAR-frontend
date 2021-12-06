import React, {useState} from 'react';
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
import Summary from './pages/Summary';

export default function DailyReportForm() {
    const [activePage, setActivePage] = useState(null);
    const [DMMDay, setDMMDay] = useState("");
    const [registeredNurse, setRegisteredNurse] = useState("");
    const [provinceName, setProvinceName] = useState("");
    const [healthZoneName, setHealthZoneName] = useState("");
    const [healthArea, setHealthArea] = useState("");
    const [villageName, setVillageName] = useState("");

    const pages = [
        <IdentificationForm setActivePage={setActivePage} setDMMDay={setDMMDay} setRegisteredNurse={setRegisteredNurse} setProvinceName={setProvinceName} setHealthZoneName={setHealthZoneName} setHealthArea={setHealthArea} setVillageName={setVillageName}
        DMMDay={DMMDay} registeredNurse={registeredNurse} provinceName={provinceName} healthZoneName={healthZoneName} healthArea={healthArea} villageName={villageName}/>,
        <TreatmentInformationForm />, 
        <DatesForm />, 
        <DistributorsForm />, 
        <Denumber1Form />, 
        <Denumber2Form />, 
        <Denumber3Form />, 
        <MorbidityEstimationForm />, 
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

