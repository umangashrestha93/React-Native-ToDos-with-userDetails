import { View, Text, TextInput, TouchableOpacity} from 'react-native'
import React, { useContext, useState } from 'react'
import loginUI from '../styling/loginUI'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../components/AuthContext'

// import { AuthContext } from '../components/Context'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()
    // const val = useContext(AuthContext)
    const {login} = useContext(AuthContext)
 
    // const saveEmailPass = async() => {
    //     try{
    //         await AsyncStorage.setItem('EMAIL', email)
    //         await AsyncStorage.setItem('PASSWORD', password)
    //         navigation.navigate("todolist")
    
    //     }catch(error){
    //         console.log(error)
    //     }
    //     if(!email && !password){
    //         console.warn("email and password is empty")
    //         navigation.navigate("Login")
    //     }
      
    // }

  return (
    <View>
      <Text style={loginUI.loginHeading}>Login form</Text>
      {/* <Text>{val}</Text> */}
      <TextInput style={loginUI.loginTextInput} placeholder="enter your email" value={email} onChangeText={(text)=>setEmail(text)}/>
      <TextInput  style={loginUI.loginTextInput} placeholder="enter yor password" value={password} onChangeText={(text)=>setPassword(text)} secureTextEntry/>
      <TouchableOpacity>
        <Text style={loginUI.loginButton} onPress={()=>login(email, password)}>Login</Text>
      </TouchableOpacity>
      <Text style={loginUI.accountUI} onPress={()=> navigation.navigate("Register")}>Don't have an account? Register Now</Text>

    </View>
  )
}

export default Login