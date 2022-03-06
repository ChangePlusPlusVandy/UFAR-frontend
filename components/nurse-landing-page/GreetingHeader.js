import React, {useContext} from 'react';
import Hamburger from './Hamburger';
import {StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { AuthContext } from '../../src/context/AuthContext';



export default connect(mapStateToProps)(function GreetingHeader(props) {

    const authContext = useContext(AuthContext);

    return (
        <View style = {styles.over}>
            <Hamburger navigation={props.navigation}/>
            <View style={styles.container}>
                <Text style={styles.greeting}>Bienvenue</Text>
                <Text style={styles.name}>{authContext.authState.user?.name || ""}</Text>
            </View>
        </View>
    );
});

function mapStateToProps(state) {

    return {
      name: state.reducer.name,
      reports: state.reducer.reports,
    };
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 24,
        flex: 1, 
    },
    over: {
        flexDirection: "row",
    },
    hamburgerBun: {
        flex: 1, 
    },
    greeting: {
        textAlign: 'right',
        // fontFamily: 'Helvetica Neue',
        fontSize: 20,
        lineHeight: 24,
        color: '#707070',
    },
    name: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 32,
    },
});
