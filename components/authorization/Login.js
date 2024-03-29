import { getResolveDependencyFn } from 'metro/src/lib/transformHelpers';
import React, {useContext, useCallback} from 'react';
import { StyleSheet, View, Text, Alert, TextInput, Image, Dimensions} from 'react-native';
import LoginButton from './LoginButton';
import SwitchSelector from 'react-native-switch-selector';

// authorization
import { AuthContext } from '../../src/context/AuthContext';
import * as SecureStore from 'expo-secure-store'
import { AxiosContext } from '../../src/context/AxiosContext';
import jwt_decode from "jwt-decode"; // todo: to decode tokens


import ufar from './ufar.png';

const {height, width} = Dimensions.get('window');

const IMAGE_DEF = Image.resolveAssetSource(ufar).uri;

export default function Login(props){

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState(props.errorMessage||'');
    // note: initial can be 0 or 1, so logic is reversed because 0 is always false
    const [userOption, setUserOption] = React.useState(props.initial? 1:props.initial);


    const authContext = useContext(AuthContext);
    const {publicAxios} = useContext(AxiosContext);

    const options = [
        { label: 'Admin', value: 0 },
        { label: 'Normal', value: 1 },

    ];


    const onLogin = async () => {
        try {
            const response = await publicAxios.post('/auth/login',
                JSON.stringify({name: username, password: password}),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
                
            if (response.status == 200) {
                
                const accessToken = response.data; 

                const user = jwt_decode(accessToken);

                console.log("user: ", user);

                if (user.user.role.toLowerCase() === options.filter(o => o.value === userOption)[0].label.toLowerCase()) {
                    authContext.setAuthState({
                        accessToken,
                        authenticated: true,
                        user: user.user,
                    });

                    await SecureStore.setItemAsync('jwt', accessToken);
                    props.setStatus&&props.setStatus('success');
                    await props.navigation.navigate(userOption? 'NurseApp':'AdminApp');
                } else {
                    setErrorMessage('Utilisateur non autorisé : sélectionnez le bon type');
                }
            
            } else {
                setErrorMessage("Échec de la connexion: " + response.json().message);
                return;
            }

        } catch (error) {
            setErrorMessage("Échec de la connexion: " + error.response.data.message);
            // Alert.alert('Login Failed', error.response?.data?.message);
        }
    };

    
    return (
        <View style={styles.container}>
            <Image source={{uri: IMAGE_DEF}} style={styles.image} />
            <SwitchSelector 
                options={options} initial={props.initial? 1:props.initial} 
                onPress={ value => 
                    setUserOption(value)
                } 
                buttonColor='#cb0d00'
                style={styles.switch}
                fontSize={15}
                backgroundColor='#C7C6C1'
            />

            <Text>{props.user}</Text>

            <TextInput style={styles.input} placeholder="Nom d'utilisateur" 
                onChangeText={text => setUsername(text)}
                // value={username}
            />
            <TextInput style={styles.input} placeholder="Mot de passe"
                onChange = {(e) => setPassword(e.nativeEvent.text)}
                // value = {password}
                secureTextEntry={true} 
            />
            <TextInput style={styles.error}>{errorMessage}</TextInput>
            <LoginButton onLogin={onLogin} navigation={props.navigation} />
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
        height: '9.4%',
        width: '92%',
        bottom: '12%',
        alignSelf:'center',
    },

    input: {
        width: '92%',
        borderColor: 'gray',
        borderWidth: 0.5,
        margin: 10,
        padding: 10,
        borderRadius: Math.round(height * 0.024),
    },

    switch: {
        width: '92%',
        marginBottom: 20,  
    },

    error:{
        color: 'red',
        fontSize: 12,
        fontStyle: 'italic',
    }
})