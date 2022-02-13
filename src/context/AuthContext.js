// source: https://blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/

//AuthContext.js
import React, {createContext, useState} from 'react';
import * as SecureStore from 'expo-secure-store'

const AuthContext = createContext(null);
const {Provider} = AuthContext;

const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    accessToken: null,
    // refreshToken: null,
    authenticated: null,
  });

  const logout = async () => {
    await SecureStore.deleteItemAsync('jwt');
    setAuthState({
      accessToken: null,
      // refreshToken: null,
      authenticated: false,
    });
  };

  const getAccessToken = () => {
    return authState.accessToken;
  };

  return (
    <Provider
      value={{
        authState,
        getAccessToken,
        setAuthState,
        logout,
      }}>
      {children}
    </Provider>
  );
};

export {AuthContext, AuthProvider};