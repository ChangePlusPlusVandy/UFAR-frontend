import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';

export default connect(mapStateToProps)(function NetworkBar(props){
    return (
        <View style={props.isConnected? styles.online: styles.offline}>
            {!props.isConnected && <Text style={styles.text}>Mode Hors-Ligne</Text>}
        </View>
    );

});


function mapStateToProps(state) {
    return {
      isConnected: state.network.isConnected,
    };
}

const styles = StyleSheet.create({
    // a trasparent bar that is displayed when the user is offline
    offline: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        top: "0%",
        height: 40,
        borderRadius: 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -5,
    },
    // nothing if the user is online
    online: {},

    text: {
        color: 'white',
        fontSize: 12,
    }
});

