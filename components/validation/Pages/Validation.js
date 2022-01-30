import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet , View} from 'react-native';
import GreetingHeader from '../GreetingHeader';
import ToBeValidated from '../ToBeValidated';
import RecentlyValidated from '../RecentlyValidated';

import { connect } from 'react-redux';
import { getReports } from '../../../src/actions';



export default connect(mapStateToProps, mapDispatchToProps)(function Validation (props) {
    console.log("Validationm props: ", props);

    const [activePage, setActivePage] = React.useState(0);

    // if there's no non validated reports remaining, we make a call to the backend to get new data
    if( props.validationReports.filter(report => report.is_validated === false).length === 0 ){

        // todo: replace with a real id and figure out a way to get it here. 
        props.getReports("618b21eb8453970bd916764c");
    }

    const page = [
        <ToBeValidated setActivePage={setActivePage} 
            reports={props.validationReports.filter(report => report.is_validated === false)} 
        />,
        <RecentlyValidated setActivePage={setActivePage}
            reports={props.validationReports.filter(report => report.is_validated === true)}
        />
    ]

    return (
        <View  style = {styles.admin}>
            <StatusBar style="auto" />
            <GreetingHeader navigation={props.navigation} name = "Jean DuPont"/>
            {page[activePage]}
        </View>
    );
});

function mapStateToProps(state) {
    console.log("mapStateToProps", state);
    return {
        name: state.reducer.name,
        validationReports: state.reducer.validationReports,
    };
}

function mapDispatchToProps(dispatch){
    return {
        getReports: (healthZoneId) => dispatch(getReports(healthZoneId))
    };
}

const styles = StyleSheet.create({
    admin: {
        flex: 1,
        backgroundColor: '#EC1C24',
    },
})