import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import registerUI from '../styling/RegisterUI';
import {useNavigation} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage'
import {AuthContext} from '../components/AuthContext';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');

  const {register} = useContext(AuthContext);
  // const registerUser = async() =>{
  //   const name = await AsyncStorage.getItem("EMAIL")
  //   const pass = await AsyncStorage.getItem("PASSWORD")
  // }
  return (
    <View>
      <Text style={registerUI.registerHeader}>User Register</Text>
      <TextInput
        style={registerUI.registerTextInput}
        value={name}
        placeholder="Enter Your name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={registerUI.registerTextInput}
        value={email}
        placeholder="Enter your email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={registerUI.registerTextInput}
        value={pass}
        placeholder="Enter your password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity>
        <Text
          style={registerUI.registerButton}
          onPress={() => {register(name, email, pass)}}>
          Register
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={registerUI.registerAccount}
          onPress={() => navigation.navigate('Login')}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
