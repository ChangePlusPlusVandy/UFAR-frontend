import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function TrainingITForm(props) {
    return (
        <View>
            <Text style={styles.header}>Formation des IT et ITA</Text>
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
      // justifyContent: "space-around",
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