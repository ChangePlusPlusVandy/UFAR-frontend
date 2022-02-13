// source: https://github.com/cristian-rita/react-native-jwt-example/blob/main/src/context/AxiosContext.js

import React, {createContext, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from './AuthContext';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const AxiosContext = createContext();
const {Provider} = AxiosContext;

const AxiosProvider = ({children}) => {
  const authContext = useContext(AuthContext);

  const authAxios = axios.create({
    baseURL: 'http://localhost:3000',
  });

  const publicAxios = axios.create({
    baseURL: 'http://localhost:3000',
  });

  authAxios.interceptors.request.use(
    config => {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

//   const refreshAuthLogic = async failedRequest => { // fixme: converted this to async, might cause errors
//     const data = {
//       refreshToken: authContext.authState.refreshToken,
//     };

//     const options = {
//       method: 'POST',
//       data,
//       url: 'http://localhost:3000/api/refreshToken',
//     };

//     try {
//           const tokenRefreshResponse = await axios(options);
//           failedRequest.response.config.headers.Authorization =
//               'Bearer ' + tokenRefreshResponse.data.accessToken;

//           authContext.setAuthState({
//               ...authContext.authState,
//               accessToken: tokenRefreshResponse.data.accessToken,
//           });

//           await Keychain.setGenericPassword(
//               'token',
//               JSON.stringify({
//                   accessToken: tokenRefreshResponse.data.accessToken,
//                   refreshToken: authContext.authState.refreshToken,
//               }));
//           return await Promise.resolve();
//       } catch (e) {
//           authContext.setAuthState({
//               accessToken: null,
//               refreshToken: null,
//           });
//       }
//   };

//   createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {});

  return (
    <Provider
      value={{
        authAxios,
        publicAxios,
      }}>
      {children}
    </Provider>
  );
};

export {AxiosContext, AxiosProvider};