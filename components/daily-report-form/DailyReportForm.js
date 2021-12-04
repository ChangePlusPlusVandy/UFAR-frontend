import React from 'react';
import {Platform, Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';

import CrossIcon from './CrossIcon';
import IdentificationForm from './IdentificationForm';
import ProgressBar from './ProgressBar';

const pages = [<IdentificationForm />];  // Ordered array of page componenets

export default function DailyReportForm ({activePage, setActivePage}) {
    const openForm = () => setActivePage(0);  // Opens form by setting currently active page to 0 (first page)

    return (
        <View style={activePage !== null ? styles.container : {...styles.container, ...styles.containerInactive}}>
            <CrossIcon activePage={activePage} setActivePage={setActivePage} />

            {  // Render active page component
                activePage !== null ? pages[activePage] :
                    // Special case: inactive form
                    <>
                        <Pressable onPress={openForm} style={styles.newReportPressable} >
                            <Text style={styles.newReportText}>New Report</Text>
                        </Pressable>
                    </>
            }

            {activePage !== null && <ProgressBar progress={(activePage + 1) / pages.length} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
    progressBarBackground: {
        backgroundColor: 'gray',
        height: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
});

