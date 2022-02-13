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
import jwt_decode from "jwt-decode";



export default function NurseApp(props){
    const authContext = useContext(AuthContext);
    const [status, setStatus] = useState('loading');

    


    const loadJWT = useCallback(async () => {
      try {
        const value = await SecureStore.getItemAsync('jwt');

        // todo: to be used for decoding the token
        //console.log("decoded token", jwt_decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL25zZi1zY2MxLmlzaXMudmFuZGVyYmlsdC5lZHUvZ3JhcGhxbCI6eyJlbWFpbCI6InNhbG9tb25kdXNoaW1pcmltYW5hQGdtYWlsLmNvbSIsInJvbGUiOiJQUklWSUxFR0VEIiwibmVpZ2hib3Job29kIjoiU3lsdmFuIFBhcmsifSwiaWF0IjoxNjM3OTE1MzgwLCJleHAiOjE2Mzg1MjAxODAsInN1YiI6IjYwZjA4NDkxMDUxODUxNjU2OTliMjA5MyJ9.UJBNu1S6PT-ugEKozK8ukiagZeCp3ucOgsr3NqdW1og"));

        authContext.setAuthState({
          accessToken: value || null,
          // refreshToken: jwt.refreshToken || null,
          authenticated: value !== null,
        });
        setStatus('success');
      } catch (error) {
        setStatus('error');
        console.log(`SecureStore Error: ${error.message}`);
        // console.log("keychain", Keychain);
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
    return <Login user={"Normal"} initial={1} />;
  } else {
    return (
      <View style={styles.container}>
          <NetworkBar />
          <StatusBar style="auto" />
          <GreetingHeader navigation={props.navigation}/>
          {/* <DashboardSummary /> */}
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
