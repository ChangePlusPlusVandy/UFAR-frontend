import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import {Icon} from 'react-native-elements';

export default function DateRangeFilter({filterData}){
    const [startDate, setStartDate] = useState(
        // set start date to one year in the past from today
        new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 365))
    );

    const [endDate, setEndDate] = useState(new Date(Date.now()));

    return (
        <View style={styles.inputContainer}>
                    <View style={styles.inputBlock}>
                        <TextInput
                            onPressIn={() => {
                                DateTimePickerAndroid.open({
                                    value: startDate,
                                    onChange: (event, selectedDate) => {
                                        setStartDate(selectedDate);
                                    },
                                    mode: 'date',
                                    is24Hour: true
                                })
                            }}
                            style={styles.inputField}
                            value={startDate.toLocaleDateString()}
                        />
                    </View>
                    <Text style={styles.inputLabel}>
                            To
                    </Text>
                    <View style={styles.inputBlock}>
                        <TextInput
                            onPressIn={() => {
                                DateTimePickerAndroid.open({
                                    value: endDate,
                                    onChange: (event, selectedDate) => {
                                        setEndDate(selectedDate);
                                    },
                                    mode: 'date',
                                    is24Hour: true
                                })
                            }}
                            style={styles.inputField}
                            value={endDate.toLocaleDateString()}
                        />
                    </View>
                    <TouchableOpacity style={{alignSelf: "center", margin: "2%"}} 
                        onPressIn={() => {
                            console.log("filtering");
                            filterData(startDate, endDate)
                        }}
                    >
                        <Icon name="filter" type="foundation" color = 'black' size = {30} iconStyle = {styles.icon} />
                    </TouchableOpacity>
                </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: "row",
        width: "100%",
        padding:"1%",
    },
    inputBlock: {
        width: "43%",
    },
    inputLabel: {
        alignSelf: "center",
    },
    inputField: {
        margin: 5,
        padding: 5,
        paddingHorizontal: 15,
        borderRadius: 17,
        backgroundColor: "white",
        fontFamily:
          Platform.OS === "android" ? "sans-serif-medium" : "Avenir-Roman",
        fontSize: 11,
        lineHeight: 13,
        color: "black",
        textAlign: "center",
    
        /* Android Drop Shadow Styling */
        elevation: 10,
    
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowRadius: 10,
        shadowOpacity: 0.3,
    }, 
})