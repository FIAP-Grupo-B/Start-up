import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, StatusBar } from 'react-native';
import BottomTabs from 'routes/bottomTabs';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackTabs from 'routes/stackTabs';
import Login from 'pages/Login';
import LoginStack from 'routes/loginStack';

function App(){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar/>
        <LoginStack />
    </SafeAreaView>
  );
}

export default App;
