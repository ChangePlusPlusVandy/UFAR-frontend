import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import GreetingHeader from '../components/nurse-landing-page/GreetingHeader';
import Bridge from '../components/daily-report-form/Bridge';
import RecentsList from '../components/nurse-landing-page/RecentsList';
import NetworkBar from '../components/nurse-landing-page/NetworkBar';

// authorization
import { AuthContext } from '../src/context/AuthContext';
import * as SecureStore from 'expo-secure-store'
import Spinner from '../components/authorization/Spinner';
import Login from '../components/authorization/Login';
import jwt_decode from "jwt-decode"; // todo: to decode tokens



export default function NurseApp(props){
    // todo: decode the type of user if asked to

    const authContext = useContext(AuthContext);
    const [status, setStatus] = useState('loading');

    const loadJWT = useCallback(async () => {
      try {
        const value = await SecureStore.getItemAsync('jwt');

        authContext.setAuthState({
          accessToken: value || null,
          authenticated: value !== null,
        });
        setStatus('success');
      } catch (error) {
        setStatus('error');
        console.log(`SecureStore Error: ${error.message}`);
        // console.log("keychain", Keychain);
        authContext.setAuthState({
          accessToken: null,
          authenticated: false,
        });
      }
    }, []);

    useEffect(() => {
      loadJWT();
    }, [loadJWT]);

  // if (status === 'loading') {
  //   return <Spinner />;
  // }


  if (authContext?.authState?.authenticated === false) {
    return <Login setStatus={setStatus} user={"Normal"} initial={1} navigation={props.navigation} />;
  } else {
    return (
      <View style={styles.container}>
          <NetworkBar />
          <StatusBar style="auto" />
          <GreetingHeader navigation={props.navigation}/>
          <RecentsList/>
          <Bridge/>
      </View>
    );
  }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
