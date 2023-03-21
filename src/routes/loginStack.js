import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Evento from 'pages/Evento'
import CriarEvento from 'pages/CriarEvento'
import { NavigationContainer } from '@react-navigation/native'
import Login from 'pages/Login'
import Cadastrar from 'pages/Cadastrar'
import BottomTabs from './bottomTabs'
const Stack = createStackNavigator()

export default function LoginStack() {
  return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Cadastrar" component={Cadastrar}/>
          <Stack.Screen name="Home" component={BottomTabs} />
        </Stack.Navigator>
        </NavigationContainer>
  )
}