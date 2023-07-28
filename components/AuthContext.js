import axios from 'axios';
import React, { createContext, useState } from 'react';
import { BASE_URL } from './Config';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Toast } from 'react-native-toast-message/lib/src/Toast';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const toastMessage = () => {
    Toast.show({
      type: 'success',
      text1: 'Successfully logged in',
      text2: 'You have successfully logged in',
    });
  };

  const toastLogoutMessage = () => {
    Toast.show({
      type: 'success',
      text1: 'Successfully logged out',
      text2: 'You have successfully logged out',
    });
  };

  const register = (name, email, password) => {
    axios
      .post(`${BASE_URL}/api/users/register`, {
        name,
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo.data);
        AsyncStorage.setItem('accessToken', userInfo.data.accessToken);
        console.log(userInfo);
      })
      .then((res) => {
        toastMessage();
      })
      .catch((e) => {
        console.log(`register error ${e}`);
      });
  };

  const login = (email, password) => {
    axios
      .post(`${BASE_URL}/api/users/login/`, {
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo.data);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      })
      .catch((e) => {
        console.log(`login error ${e}`);
      });
  };

  const logOut = async () => {
    try {
      // Clear user information from AsyncStorage directly
      AsyncStorage.removeItem('userInfo');
      AsyncStorage.removeItem('accessToken');
      setUserInfo({}); // Clear user information from state if needed
      toastLogoutMessage();
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ register, login, userInfo, setUserInfo, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};





