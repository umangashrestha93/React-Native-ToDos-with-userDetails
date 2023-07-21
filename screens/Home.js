import { View, Text } from 'react-native'
import React from 'react'
import homeStyle from '../styling/homeUI'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
  return (
    <View style={homeStyle.homeContainer}>
      <Text style={homeStyle.homeTextContainer} onPress={()=>navigation.navigate("Login")}>Login</Text>
    </View>
  )
}

export default Home