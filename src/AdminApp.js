import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';

import NetworkBar from '../components/nurse-landing-page/NetworkBar';
import Validation from '../components/validation/Pages/Validation';

// authorization
import { AuthContext } from '../src/context/AuthContext';
import Spinner from '../components/authorization/Spinner';
import Login from '../components/authorization/Login';



export default function AdminApp(props){
    const authContext = useContext(AuthContext);
    const [status, setStatus] = useState('loading');

    const loadJWT = useCallback(async () => {
      try {
        const value = await Keychain.getGenericPassword();
        const jwt = JSON.parse(value.password);

        authContext.setAuthState({
          accessToken: jwt.accessToken || null,
          // refreshToken: jwt.refreshToken || null,
          authenticated: jwt.accessToken !== null,
        });
        setStatus('success');
      } catch (error) {
        setStatus('error');
        console.log(`Keychain Error: ${error.message}`);
        authContext.setAuthState({
          accessToken: null,
          // refreshToken: null,
          authenticated: false,
        });
      }
    }, []);

    useEffect(() => {
      loadJWT();
    }, [loadJWT]);

    if (status === 'loading') {
        return <Spinner />;
    }


    if (authContext?.authState?.authenticated === false) {
        return <Login user={"Admin"} initial={0}/>;
    } 

    return (
        <Validation />
    );
  
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
