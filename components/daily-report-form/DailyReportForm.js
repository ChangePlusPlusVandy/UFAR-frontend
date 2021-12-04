import React, { useState } from 'react';
import {Platform, Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';

import CrossIcon from './CrossIcon';
import IdentificationForm from './IdentificationForm';

export default function DailyReportForm () {
    const [activePage, setActivePage] = useState(null);

    const handlePress = () => setActivePage(0);

    return (
        <View style={activePage !== null ? styles.container : {...styles.container, ...styles.containerInactive}}>
            <CrossIcon activePage={activePage} setActivePage={setActivePage} />
            {activePage !== null ? pages[activePage] 
                : <>
                    <Pressable onPress={handlePress} style={{position: 'absolute', height: '100%', width: '100%', justifyContent: 'center'}} >
                        <Text style={styles.newReportText}>New Report</Text>
                    </Pressable>
                </>}
            {/* <View style={{backgroundColor: 'gray', height: 4, position: 'absolute', bottom: 0, left: 0, right: 0}}></View> */}
        </View>
    );
}

const pages = [<IdentificationForm />];

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 32,
        backgroundColor: '#EC1C24',
        borderTopLeftRadius: 11,
        borderTopRightRadius: 11,
    },
    containerInactive: {
        height: 67,
        justifyContent: 'center',
    },
    newReportText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 23,
        lineHeight: 28,
    }
});

