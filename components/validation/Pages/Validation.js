import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet , View} from 'react-native';
import GreetingHeader from '../GreetingHeader';
import ToBeValidated from '../ToBeValidated';
import RecentlyValidated from '../RecentlyValidated';



export default function Validation (props) {

    const [activePage, setActivePage] = React.useState(0);

    const page = [
        <ToBeValidated setActivePage={setActivePage} />,
        <RecentlyValidated setActivePage={setActivePage} />
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