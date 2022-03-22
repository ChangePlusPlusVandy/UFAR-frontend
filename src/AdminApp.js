import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Validation from '../components/validation-page/Validation';

// authorization
import { AuthContext } from '../src/context/AuthContext';
import * as SecureStore from 'expo-secure-store'
import Login from '../components/authorization/Login';
import jwt_decode from "jwt-decode";



export default function AdminApp(props){

    const authContext = useContext(AuthContext);
    const [status, setStatus] = useState('loading');
    const [errorMessage, setErrorMessage] = useState('');

    const loadJWT = useCallback(async () => {
      try {
        const value = await SecureStore.getItemAsync('jwt');
        const user = jwt_decode(value);

        if (user.user.role.toLowerCase() === "ADMIN".toLowerCase()) {
          authContext.setAuthState({
            accessToken: value || null,
            authenticated: value !== null,
            user: user.user
          });
          setStatus('success');
        } else {
          setStatus('failed');
          setErrorMessage('You are not authorized to access the Admin page');
        }

      } catch (error) {
        setStatus('error');
        console.log(`SecureStore Error: ${error.message}`);
        authContext.setAuthState({
          accessToken: null,
          authenticated: false,
          user: {}
        });
      }
    }, []);

    useEffect(() => {
      loadJWT();
    }, [loadJWT]);

    // if (status === 'loading') {
    //     return <Spinner/>;
    // }

    if ((authContext?.authState?.authenticated === false) || (status === 'failed')) {
        return <Login setStatus={setStatus} user={"Admin"} initial={0} errorMessage={errorMessage} navigation={props.navigation}/>;
    } 

    return (
      <>
        <Validation navigation={props.navigation} />
      </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
