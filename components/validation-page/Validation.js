import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet , View} from 'react-native';
import GreetingHeader from './GreetingHeader';
import ToBeValidated from './pages/ToBeValidated';
import RecentlyValidated from './pages/RecentlyValidated';
import Dashboards from './pages/Dashboards';


export default function Validation (props) {
    console.log("Validation navigation: ", props.navigation);

    const [activePage, setActivePage] = React.useState(0);

    const page = [
        <ToBeValidated setActivePage={setActivePage} />,
        <RecentlyValidated setActivePage={setActivePage} />,
        <Dashboards/>
    ]

    return (
        <View  style = {styles.admin}>
            <StatusBar style="auto" />
            <GreetingHeader navigation={props.navigation} name = "Jean DuPont" setActivePage={setActivePage}/>
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