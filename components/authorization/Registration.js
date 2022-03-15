import { getResolveDependencyFn } from 'metro/src/lib/transformHelpers';
import React, {useContext, useCallback, useEffect} from 'react';
import { StyleSheet, View, Text, Alert, TextInput, Image} from 'react-native';
import RegistrationButton from './RegistrationButton';
import SwitchSelector from 'react-native-switch-selector';

// authorization
import { AxiosContext } from '../../src/context/AxiosContext';

import ufar from './ufar.png';


const IMAGE_DEF = Image.resolveAssetSource(ufar).uri;

export default function Registration(props){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirm, setPasswordConfirm] = React.useState('');
    const [token, setToken] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    console.log("username: " + username);
    console.log("password: " + password);
    console.log("token: " + token);

    

    const {publicAxios} = useContext(AxiosContext);

    const options = [
        { label: 'Admin', value: 0 },
        { label: 'Nurse', value: 1 },
    ];


    useEffect(() => {

        if (passwordConfirm !== password) {
            setErrorMessage('Passwords do not match');
        } else {
            setErrorMessage('');
        }
    }, [passwordConfirm, password]);

    // todo: send request to backend:
        // - if account created, send user to login page
        // - if account already exists || token expired/invalid, 
                //return to this page with that error message
    
    const registerUser = async () => {
        try {
            const response = await publicAxios.post('/auth/register',
                JSON.stringify({name: username, uuid: token, password: password}),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            console.log("response: " + response.data);
            console.log("response.status: " + response.status);
                
            if (response.status == 201) { // todo: testing
                // alert user that account was created
                Alert.alert("Account Created", "Please login to continue");
                props.navigation.navigate('Home'); 
            } else {
                setErrorMessage("User Registration Failed: " + response.json().message);
                return;
            }

        } catch (error) {
            setErrorMessage("Cannot register user: " + error);
        }
    };

    

    return (
        <View style={styles.container}>
            <Image source={{uri: IMAGE_DEF}} style={styles.image} />
            <Text style={styles.title}>Welcome to UFAR</Text>
            <Text>{props.user}</Text>

            <TextInput style={styles.input} placeholder="Username" 
                onChangeText={text => setUsername(text)}
                value={username}
            />
             <TextInput style={styles.input} placeholder="Token"
                onChange = {e => setToken(e.nativeEvent.text)}
                // value = {password}
                secureTextEntry={true} 
            />
            <TextInput style={styles.input} placeholder="Password"
                onChange = {(e) => setPassword(e.nativeEvent.text)}
                // value = {password}
                secureTextEntry={true} 
            />
            <TextInput style={styles.input} placeholder="Verify Password"
                onChange = {(e) => {
                    setPasswordConfirm(e.nativeEvent.text);
                }}
                // value = {password}
                secureTextEntry={true} 
            />
            <TextInput style={styles.error}>{errorMessage}</TextInput>
            <RegistrationButton registerUser={registerUser} navigation={props.navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'scroll',
    },
    image: {
        height: 79,
        width: 360,
        bottom: 100,
        alignSelf:'center',
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

    switch: {
        width: 300,
        marginBottom: 20,  
    },

    error:{
        color: 'red',
        fontSize: 12,
        fontStyle: 'italic',
    }
})