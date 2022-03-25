import React, {useContext} from 'react';
import Hamburger from './Hamburger';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import { AuthContext } from '../../src/context/AuthContext';

const {height, width} = Dimensions.get('window');

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
    console.log("mapStateToProps: ", state);

    return {
      name: state.reducer.name,
      reports: state.reducer.reports,
    };
}


const styles = StyleSheet.create({
    container: {
        paddingTop: '7.7%',
        paddingHorizontal: '6%',
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
        fontSize: Math.floor(height*0.024),
        lineHeight: Math.round(height*0.029),
        color: '#707070',
    },
    name: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: Math.floor(height*0.036),
        lineHeight: Math.round(height*0.038),
    },
});
