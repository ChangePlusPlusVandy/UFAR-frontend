import { getResolveDependencyFn } from 'metro/src/lib/transformHelpers';
import React, {useContext, useCallback, useEffect} from 'react';
import { StyleSheet, View, Text, Alert, TextInput, Image, Dimensions} from 'react-native';
import RegistrationButton from './RegistrationButton';
import SwitchSelector from 'react-native-switch-selector';

// authorization
import { AuthContext } from '../../src/context/AuthContext';
import * as SecureStore from 'expo-secure-store'
import { AxiosContext } from '../../src/context/AxiosContext';

import ufar from './ufar.png';

const {height, width} = Dimensions.get('window');

const IMAGE_DEF = Image.resolveAssetSource(ufar).uri;

export default function Registration(props){
    // todo: send request to backend:
        // - if accouunt created, send user to login page
        // - if account already exists || token expired/invalid, 
                //return to this page with that error message

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirm, setPasswordConfirm] = React.useState('');
    const [token, setToken] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');


    const authContext = useContext(AuthContext);
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
    

    return (
        <View style={styles.container}>
            <Image source={{uri: IMAGE_DEF}} style={styles.image} />
            <Text style={styles.title}>Welcome to UFAR</Text>
            <Text>{props.user}</Text>

            <TextInput style={styles.input} placeholder="Username" 
                onChangeText={(e) => setUsername(e.nativeEvent.text)}
                value={username}
            />
             <TextInput style={styles.input} placeholder="Token"
                onChange = {(e) => setToken(e.nativeEvent.text)}
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
                    console.log(e.nativeEvent.text);
                    setPasswordConfirm(e.nativeEvent.text);
                }}
                // value = {password}
                secureTextEntry={true} 
            />
            <TextInput style={styles.error}>{errorMessage}</TextInput>
            <RegistrationButton navigation={props.navigation}/>
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
        height: '9.5%',
        width: '92%',
        bottom: '12%',
        alignSelf:'center',
    },

    input: {
        height: '7.3%',// 50
        width: '76.5%', // 300
        borderColor: 'gray',
        borderWidth: 0.5,
        margin: 10,
        padding: 10,
        borderRadius: Math.round(height * 0.024),
    },

    switch: {
        width: '76.5%',
        marginBottom: 20,  
    },

    error:{
        color: 'red',
        fontSize: 12,
        fontStyle: 'italic',
    }
})