import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './components/Navigation'
import { AuthProvider } from './components/AuthContext'

const App = () => {
  return (
    <AuthProvider>
    <Navigation />
    </AuthProvider>
  )
}

export default App