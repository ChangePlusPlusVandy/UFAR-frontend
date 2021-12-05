import React, {useState} from 'react';
import {Platform, Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';

import BackButton from './BackButton';
import CrossIcon from './CrossIcon';
import IdentificationForm from './IdentificationForm';
import NextButton from './NextButton';
import ProgressBar from './ProgressBar';

const pages = [<IdentificationForm />, null, null, null, null];  // Ordered array of page components

export default function DailyReportForm() {
    const [activePage, setActivePage] = useState(null);

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
        top: Platform.OS === 'android' ? StatusBar.currentHeight: 45,
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
        fontFamily: 'Helvetica Neue',
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

