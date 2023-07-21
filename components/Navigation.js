import { View, Text } from 'react-native'
import React, {useEffect, useContext, useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ToDoList from '../screens/ToDoList';
import { AuthContext } from './AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator()
const Navigation = () => {
    const {userInfo, setUserInfo} = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        loadInitials()
    }, [])

   const loadInitials = async () => {
        const accessToken = await AsyncStorage.getItem('accessToken')
        console.log({accessToken})
        if (accessToken) {
            setUserInfo({...userInfo, accessToken})
        }
        setIsLoading(false)
    }

    if (isLoading) return (<></>);

  return (
    <NavigationContainer>
        <Stack.Navigator>
            {userInfo.accessToken ? (
                    <Stack.Screen name="todolist" component={ToDoList}/>
            ): (
                <>
             <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
                </>
            )}
          
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation