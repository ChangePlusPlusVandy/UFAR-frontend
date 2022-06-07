import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import TokenGeneration from './TokenGeneration';
import ResetUserPassword from './ResetUserPassword';


export default function UserManagement(props){
    const [userPage, setUserPage] = useState(0);

    const options = [
        { label: 'Nouveau Jeton Utilisateur', value: 0 },
        { label: 'Réinitialiser le Jeton Utilisateur', value: 1 },
    ];

    const userManagement = [
        <TokenGeneration/>,
        <ResetUserPassword/>,
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Gestion des Utilisateurs</Text>
            <SwitchSelector 
                options={options} initial={userPage} 
                onPress={value => setUserPage(value)} 
                buttonColor='#cb0d00'
                style={styles.switch}
                textStyle={styles.switchText}
                selectedTextStyle={styles.switchSelectedText}
                backgroundColor='#d8d8d8'
            />
            <View>
               {userManagement[userPage]}
            </View>
        </View>
    );
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
        paddingHorizontal: 10,
        alignItems: 'center',

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
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 25,
        marginBottom: 5,
    },
    switch: {
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
    },
    switchText: {
        fontWeight: 'bold',
        color: '#9d9d9d',
    },
    switchSelectedText: {
        fontWeight: 'bold',
    },
    dashboardTitle: {
        fontWeight: 'bold',
        color: '#cb0d00',
        fontSize: 18,
    },
});

