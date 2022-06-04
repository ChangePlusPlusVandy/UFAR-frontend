import { getResolveDependencyFn } from 'metro/src/lib/transformHelpers';
import React, {useContext, useCallback, useEffect} from 'react';
import { StyleSheet, View, Text, Alert, TextInput, Image, Dimensions} from 'react-native';
import RegistrationButton from './RegistrationButton';

// authorization
import { AxiosContext } from '../../src/context/AxiosContext';

import ufar from './ufar.png';

const {height, width} = Dimensions.get('window');

const IMAGE_DEF = Image.resolveAssetSource(ufar).uri;

export default function Registration(props){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirm, setPasswordConfirm] = React.useState('');
    const [token, setToken] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    
    const {publicAxios} = useContext(AxiosContext);

    const options = [
        { label: 'Admin', value: 0 },
        { label: 'Nurse', value: 1 },
    ];


    useEffect(() => {

        if (passwordConfirm !== password) {
            setErrorMessage('Les mots de passe ne correspondent pas');
        } else {
            setErrorMessage('');
        }
    }, [passwordConfirm, password]);

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
                
            if (response.status == 201) { // todo: testing
                // alert user that account was created
                Alert.alert("Compte créé", "Veuillez vous connecter pour continuer");
                props.navigation.navigate('Home'); 
            } else {
                setErrorMessage("Échec de l'enregistrement de l'utilisateur: " + response.json().message);
                return;
            }

        } catch (error) {
            setErrorMessage("Impossible d'enregistrer l'utilisateur: " + error.response.data.message);
        }
    };

    

    return (
        <View style={styles.container}>
            <Image source={{uri: IMAGE_DEF}} style={styles.image} />
            <Text style={styles.title}>Bienvenue à UFAR</Text>
            <Text>{props.user}</Text>

            <TextInput style={styles.input} placeholder="Nom d'utilisateur" 
                onChangeText={text => setUsername(text)}
                value={username}
            />
             <TextInput style={styles.input} placeholder="Jeton"
                onChange = {e => setToken(e.nativeEvent.text)}
                // value = {password}
                secureTextEntry={true} 
            />
            <TextInput style={styles.input} placeholder="Le Mot de Passe"
                onChange = {(e) => setPassword(e.nativeEvent.text)}
                // value = {password}
                secureTextEntry={true} 
            />
            <TextInput style={styles.input} placeholder="Vérifier Le Mot de Passe"
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