import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import LeftArrow from '../LeftArrow';
import { connect } from 'react-redux';

//uses material icons
import { convertFromYYYYMMDDToDDMMYYYY } from '../../../src/utils';

//uses material icons

export default connect(mapStateToProps)(function RecentlyValidated(props) {
    const renderItem = ({item, index}) => (
        <View style={(index == (props.reportIds.length - 1))? {...styles.listitem, ...styles.bottom}: (index == 0)? {...styles.top, ...styles.listitem}: {...styles.listitem} }>
            <Text style={styles.timelist}>{convertFromYYYYMMDDToDDMMYYYY((new Date(props.validationReports[item].report.date)).toISOString().split('T')[0])}</Text>
            {/**  */}
            <Text style={styles.namelist}>{`Jour ${!isNaN(props.validationReports[item].report.DMM_day)? 
                convertFromYYYYMMDDToDDMMYYYY((new Date(Date.now())).toISOString().split('T')[0]) : 
                convertFromYYYYMMDDToDDMMYYYY((new Date(props.validationReports[item].report.DMM_day)).toISOString().split('T')[0])}`}</Text>
            <TouchableOpacity style={styles.edit}>
                <Icon name="check" color = '#fff' style = {styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                {props.validationReports[item].isSubmitted ? 
                <Icon name="check" color = 'green' size = {25} /> :
                <Icon name="time-slot" color = 'green' size = {20} type="entypo" />}  
            </TouchableOpacity>
        </View>
    );



    return (
        <View style={styles.container}>
            <View style={styles.flexbox}>
                <LeftArrow setActivePage={props.setActivePage}/>
                <Text style={styles.header}>Récemment Validé</Text>
            </View>
            <FlatList data={props.reportIds} renderItem={renderItem} keyExtractor={id => id}/>
        </View>
    );
});

function mapStateToProps(state) {
    return {
        validationReports: state.reducer.validationReports,
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'scroll',
        flex: 1,
        marginTop: 20,
        paddingVertical: 20,

        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 5,
        shadowOpacity: 0.3,
    },
    header: {
        // fontFamily: 'Helvetica Neue',
        marginTop: 5,
        marginLeft: 60,
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 25,
        marginBottom: 5,
        alignSelf: "center",
        flex: 11,
    },
    listitem: {
        marginHorizontal: "2%",
        marginVertical: '1.2%',
        paddingHorizontal: '2.5%',
        paddingVertical: '2.5%',
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",

        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 5,
        shadowOpacity: 0.3,
    },
    bottom: {
        marginBottom: '5%',
    },
    top: {
        marginTop: '3%',
    },
    timelist: {
        color: '#555555',
        flex: 2,
        textAlignVertical: "center",
        marginTop: 5,
    },
    namelist: {
        color: '#000000',
        fontSize: 18,
        flex: 5,
    },
    edit: {
        flex: 0.55,
        backgroundColor: "#7DB415",
        borderRadius: 20,
        marginRight: 10,
    },
    icon: {
        size: 20,
        alignSelf: 'center',
    },
    flexbox: {
        flexDirection: "row",
    },
})
