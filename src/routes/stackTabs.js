import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Evento from 'pages/Evento'
import CriarEvento from 'pages/CriarEvento'
import { NavigationContainer } from '@react-navigation/native'
const Stack = createStackNavigator()

export default function StackTabs() {
  return (
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Evento" component={Evento}/>
          <Stack.Screen name="CriarEvento" component={CriarEvento}/>
        </Stack.Navigator>
  )
}