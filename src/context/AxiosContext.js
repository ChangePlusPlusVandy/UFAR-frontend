// source: https://github.com/cristian-rita/react-native-jwt-example/blob/main/src/context/AxiosContext.js

import React, {createContext, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from './AuthContext';
import { DEV_DOMAIN } from "@env" 

const AxiosContext = createContext();
const {Provider} = AxiosContext;


const AxiosProvider = ({children}) => {

  console.log("DEV_DOMAIN", DEV_DOMAIN);
  console.log("DEV_DOMAIN", DEV_DOMAIN);

  const authContext = useContext(AuthContext);

  const authAxios = axios.create({
    baseURL: DEV_DOMAIN,
  });

  const publicAxios = axios.create({
    baseURL: DEV_DOMAIN,
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

  // if token is expired, logout and redirect to login page
  authAxios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response?.status === 401) {
        authContext.logout();
      }
      return Promise.reject(error);
    },
  );
  

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