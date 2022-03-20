import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet , View} from 'react-native';
import GreetingHeader from './GreetingHeader';
import ToBeValidated from './pages/ToBeValidated';
import RecentlyValidated from './pages/RecentlyValidated';
import Dashboards from './pages/Dashboards';
import NetworkBar from '../nurse-landing-page/NetworkBar';
import TokenGenerationPage from './pages/UserManagement';

import { connect } from 'react-redux';




export default connect(mapStateToProps, mapDispatchToProps)(function Validation (props) {
    const [activePage, setActivePage] = React.useState(0);

    
    const page = [
        <ToBeValidated setActivePage={setActivePage} 
            reports={props.validationReports?.filter(report => report.is_validated === false)} 
        />,
        <RecentlyValidated setActivePage={setActivePage}
            reports={props.validationReports?.filter(report => report.is_validated === true)}
        />,
        <Dashboards/>,
        <TokenGenerationPage/>
    ]

    return (
        <View  style = {styles.admin}>
            <NetworkBar />
            <StatusBar style="auto" />
            <GreetingHeader navigation={props.navigation} name = "Jean DuPont" setActivePage={setActivePage}/>
            {page[activePage]}
        </View>
    );
});

function mapStateToProps(state) {
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