import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator} from './navigator/AuthStackNavigator'
import { lightTheme } from './themes/light';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer theme={lightTheme}>
     <RootStack.Navigator 
      screenOptions={{
        headerShown:false,
      }}>
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator}></RootStack.Screen>
     </RootStack.Navigator>
   </NavigationContainer>
  );
}

