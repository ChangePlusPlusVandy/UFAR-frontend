import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import CheckBox from '../CheckBox';

export default function TrainingTrainersForm(props) {

    // done, just need yes/no option + conditional rendering

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const toggleIsTrainingTrainers = () => props.setIsTrainingTrainers(prev => !prev);

    return (
        <View>
            <Text style={styles.header}>Formation des formateurs</Text>
            <View style={styles.inputContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={styles.inputLabel}>Participation ala formation des formateurs</Text>
                    <CheckBox isChecked={props.isTrainingTrainers} onPress={toggleIsTrainingTrainers} />
                </View>

                {props.isTrainingTrainers && <>
                <Text style={styles.inputLabel}>La date du debut de la formation au niveau coordination</Text>
                <TextInput
                    onPressIn={() => {
                        DateTimePickerAndroid.open({
                        value: props.trainingStartDate,
                        onChange: (event, selectedDate) => {
                            props.setTrainingStartDate(selectedDate);
                        },
                        mode: 'date',
                        is24Hour: true
                        })
                    }
                    }
                    editable={!props.validate}
                    style={styles.inputField}
                    value={new Date(props.trainingStartDate).toLocaleDateString()}
                    placeholder="MM/DD/YYYY"
                />
                <Text style={styles.inputLabel}>La date de la fin de la formation au niveau coordination</Text>
                <TextInput
                    onPressIn={() => {
                        DateTimePickerAndroid.open({
                        value: props.trainingEndDate,
                        onChange: (event, selectedDate) => {
                            props.setTrainingEndDate(selectedDate);
                        },
                        mode: 'date',
                        is24Hour: true
                        })
                    }
                    }
                    editable={!props.validate}
                    style={styles.inputField}
                    value={new Date(props.trainingEndDate).toLocaleDateString()}
                    placeholder="MM/DD/YYYY"
                />
                <Text style={styles.inputLabel}>Nombre des formés de sexe masculin</Text>
                <TextInput style = {styles.inputField}
                    onChange={(e) => props.setNumMaleTrainers(parseInt(e.nativeEvent.text) || 0)}
                    defaultValue={(props.numMaleTrainers || '0').toString()}
                />
                <Text style={styles.inputLabel}>Nombre des formés de sexe feminin</Text>
                <TextInput style = {styles.inputField}
                    onChange={(e) => props.setNumFemaleTrainers(parseInt(e.nativeEvent.text) || 0)}
                    defaultValue={(props.numFemaleTrainers || '0').toString()}
                />
                </>}
            </View>
        </View>
    );
}
      
const styles = StyleSheet.create({
    header: {
        paddingVertical: 18,
        alignSelf: "center",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Helvetica Neue",
        fontWeight: "bold",
        fontSize: 23,
        lineHeight: 28,
        color: "white",
    },
    inputContainer: {
        marginHorizontal: 34,
    },
    inputLabel: {
        fontFamily: Platform.OS === "android" ? "sans-serif" : "Avenir-Roman",
        fontSize: 12,
        lineHeight: 13,
        color: "white",
    },
    inputField: {
        marginVertical: 5,
        paddingVertical: 5,
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
});