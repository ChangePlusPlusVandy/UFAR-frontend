import React, {useContext} from 'react';
import {StyleSheet, Text, View,  TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import { getReports } from '../../src/actions';
import { getReportsUser } from '../../src/actions';
import { AxiosContext } from '../../src/context/AxiosContext';
import { AuthContext } from '../../src/context/AuthContext';



/**
 * @description: FetchButton component, used to fetch reports from the server depending on the user
 * if admin, we call an action to fetch all reports from the specific healthzone
 * if nurse, we call an action to fetch unvalidated reports from a specific user
 */
export default connect(mapStateToProps, mapDispatchToProps)(function FetchButton (props) {

    const {authAxios} = useContext(AxiosContext);
    const authContext = useContext(AuthContext);

    return (
        <View style={styles.flexbox}>
            <TouchableOpacity style={styles.checkbadge} onPress={()=>{

                if(props.fetchReportsAdmin){
                    props.getReports(authContext.authState.user.health_zone, authAxios);
                } else if (props.fetchReportsUser){
                    props.getReportsUser(authContext.authState.user?._id, authAxios);
                } else if (props.fetchTrainingFormsAdmin){
                    props.getTrainingForms();
                }
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
        getReports: (healthZoneId, authAxios) => dispatch(getReports(healthZoneId, authAxios)),
        getReportsUser: (userId, authAxios) => dispatch(getReportsUser(userId, authAxios)),
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
