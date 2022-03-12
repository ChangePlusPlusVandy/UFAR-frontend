import React, {useEffect, useContext} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import ResetUserPasswordButton from '../ResetUserPasswordButton';

// authorization
import { AxiosContext } from '../../../src/context/AxiosContext';


export default function ResetUserPassword(props){
    const [username, setUsername] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [successMessage, setSuccessMessage] = React.useState('');
    const [passwordConfirm, setPasswordConfirm] = React.useState('');

    const {authAxios} = useContext(AxiosContext);

    const resetUserPassword = async () => {
        try {
            const response = await authAxios.post('/auth/update_password',
                JSON.stringify({name: username, password: newPassword}),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
                
            if (response && response.status == 201) {
                // todo: Testing
                setSuccessMessage("Password Reset Successfully");
                setUsername('');
                setNewPassword('');
                setPasswordConfirm('');
                setErrorMessage('');
            } else {
                setErrorMessage("User Password Reset Failed: " + response.json().message);
                return;
            }

        } catch (error) {
            setErrorMessage("Cannot reset password: " + error);
        }
    };

    useEffect(() => {
        if (passwordConfirm !== newPassword) {
            setErrorMessage('Passwords do not match');
        } else {
            setErrorMessage('');
        }
    }, [passwordConfirm, newPassword]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset User Password</Text>
            <TextInput style={styles.input} placeholder="Username" 
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <TextInput style={styles.input} placeholder="New Password"
                onChange = {(e) => setNewPassword(e.nativeEvent.text)}
                secureTextEntry={true} 
            />
            <TextInput style={styles.input} placeholder="Verify New Password"
                onChange = {(e) => {
                    setPasswordConfirm(e.nativeEvent.text);
                }}
                secureTextEntry={true} 
            />
            <TextInput style={errorMessage? styles.error: styles.success}>
                {errorMessage? errorMessage: successMessage}
            </TextInput>
            <ResetUserPasswordButton resetUserPassword={resetUserPassword}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFF",
    },
    input: {
        height: 50,
        width: 300,
        borderColor: 'gray',
        borderWidth: 0.5,
        margin: 10,
        padding: 10,
        borderRadius: 20,
    },
    error:{
        color: 'red',
        fontSize: 12,
        fontStyle: 'italic',
    },
    success:{
        color: 'green',
        fontSize: 12,
        fontStyle: 'italic',
    },
    title: {
        fontWeight: 'bold',
        color: '#EC1C24',
        fontSize: 18,
        alignSelf: 'center',
    },
});