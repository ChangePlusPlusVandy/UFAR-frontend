import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import GeographicalDashboard from './GeographicalDashboard';
import TherapeuticalDashboard from './TherapeuticalDashboard';
import DrugsUsedDashboard from './DrugsUsedDashboard';

export default function Dashboards() {
    const options = [
        { label: 'Geographical', value: 0 },
        { label: 'Therapeutical', value: 1 },
        { label: 'Drugs Used', value: 2 },
    ];

    const dashboards = [
        {
            title: "Geographical Coverage",
            graph: <GeographicalDashboard/>,
        },
        {
            title: "Therapeutical Coverage",
            graph: <TherapeuticalDashboard/>,
        },
        {
            title: "Drugs Used",
            graph: <DrugsUsedDashboard/>,
        },
    ];

    const [activeDashboard, setActiveDashboard] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Dashboard</Text>
            <SwitchSelector 
                options={options} initial={activeDashboard} 
                onPress={value => setActiveDashboard(value)} 
                buttonColor='#EC1C24'
                style={styles.switch}
                textStyle={styles.switchText}
                selectedTextStyle={styles.switchSelectedText}
                backgroundColor='#d8d8d8'
            />
            <Text style={styles.dashboardTitle}>{dashboards[activeDashboard].title}</Text>
            <View style={styles.dashboardContainer}>
                {dashboards[activeDashboard].graph}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'scroll',
        flex: 1,
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center',

        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 5,
        shadowOpacity: 0.3,
    },
    header: {
        // fontFamily: 'Helvetica Neue',
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 25,
        marginBottom: 5,
    },
    switch: {
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
    },
    switchText: {
        fontWeight: 'bold',
        color: '#9d9d9d',
    },
    switchSelectedText: {
        fontWeight: 'bold',
    },
    dashboardTitle: {
        fontWeight: 'bold',
        color: '#EC1C24',
        fontSize: 18,
    },
    dashboardContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        paddingVertical: 20,
        flex: 1,

        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 5,
    }
});
