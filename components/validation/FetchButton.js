import React from 'react';
import {StyleSheet, Text, View,  TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import { getReports } from '../../src/actions';

export default connect(mapStateToProps, mapDispatchToProps)(function FetchButton (props) {

    console.log("fetch button props", props);
    return (
        <View style={styles.flexbox}>
            <TouchableOpacity style={styles.checkbadge} onPress={()=>{
                // todo: make it so that you display a pop up if a use tries to fetch data when current
                // todo: reports are not validated
                
                props.getReports("618b21eb8453970bd916764c");
                

                // console.log("fetch button pressed");
            }}>
                <Icon name="cycle" color = '#FFFFFF' size = {25} iconStyle = {styles.icon} type="entypo" />
            </TouchableOpacity>
        </View>
    );
});

function mapStateToProps(state) {
    return {
        validationReports: state.reducer.validationReports,
    };
}

function mapDispatchToProps(dispatch){
    return {
        getReports: (healthZoneId) => dispatch(getReports(healthZoneId))
    };
}

const styles = StyleSheet.create({
    checkbadge: {
        height: 35,
        width: 35,
        backgroundColor: '#76B5C5',
        borderRadius: 27,
        alignContent: "center",
        // marginLeft: 20,
        marginBottom: 10,
        marginRight: 30,

        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowRadius: 5,
        shadowOpacity: 0.2,
    },
    icon:{
        marginTop: 4,
    },
    flexbox:{
        alignContent: "center",
        flex: 1,
    },
})
