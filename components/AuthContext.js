import axios from 'axios';
import React, {createContext, useState} from 'react';
import {BASE_URL} from './Config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const toastMessage = () =>{
    Toast.show({
      type: 'success',
      text1: 'successfully logged in',
      text2: 'you have successfully logged in'
    })

  }


 
  const register = (name, email, password) => {
    axios
      .post(`${BASE_URL}/api/users/register`, {
        name,
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo.data);
        AsyncStorage.setItem('accessToken', userInfo.data.accessToken);
        console.log(userInfo);

      })
      .then((res)=>{
        toastMessage()
      })
      .catch(e => {
        console.log(`register error ${e}`);
      });
  };

  const login = (email, password) => {
    axios
      .post(`${BASE_URL}/api/users/login/`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo.data);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      })
      .catch(e => {
        console.log(`login error ${e}`);
      });
  };

  const logOut = ()=>{

    axios.post(`${BASE_URL}/api/users/logout/`,{},{
      headers:{Authorization: `Bearer ${userInfo.data.accessToken}`},
    })
    .then(res=>{
      console.log(res.data.accessToken)
      AsyncStorage.removeItem('userInfo')
      setUserInfo({})
    })
    .catch(e=>{
      console.log(`Error on logout ${e.message}`)
    })
  }


  return (
    <AuthContext.Provider value={{register, login, userInfo, setUserInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
