import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet , View} from 'react-native';
import GreetingHeader from '../GreetingHeader';
import ToBeValidated from '../ToBeValidated';
import RecentlyValidated from '../RecentlyValidated';



export default function Validation (props) {
    const [activePage, setActivePage] = React.useState(0);

    // fixme: for testing
    const REPORT = [
        {
            id: "3ac68afc-c605-8d-a4f8-fbd91aa97f63",
            date: "12/12",
            dayNumber: "Jour 1",
            validated: false,
            DMMDay: "1",
            nurse: "Nurse 1",
        },
        {
            id: "3ac68afc-c605-8d-a4f8-fbd91aa963",
            date: "12/12",
            dayNumber: "Jour 2",
            validated: true,
        },
        {
            id: "3ac68afc-c605-8d-f8-fbd91aa97f63",
            date: "12/12",
            dayNumber: "Jour 3",
            validated: true,
        },
    ];

    const page = [
        <ToBeValidated setActivePage={setActivePage} 
            reports={REPORT.filter(report => report.validated === false)} 
        />,
        <RecentlyValidated setActivePage={setActivePage}
            reports={REPORT.filter(report => report.validated === true)}
        />
    ]

    return (
        <View  style = {styles.admin}>
            <StatusBar style="auto" />
            <GreetingHeader navigation={props.navigation} name = "Jean DuPont"/>
            {page[activePage]}
        </View>
    );
}

const styles = StyleSheet.create({
    admin: {
        flex: 1,
        backgroundColor: '#EC1C24',
    },
})