/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{createContext} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// import { Citiesdata, Home } from './src/Home';
import { Location } from './src/Location';
import { BottomTabs } from './src/BottomTabs';
import { Application } from './src/Application';
import { MainStackNavigator } from './src/StackNavigator';
import BottomTabNavigator from './src/TabNavigator';
import 'react-native-gesture-handler';
// import Citiesdata from './src/ContextData';
import { useState } from 'react';
import { useEffect } from 'react';

// const Stack = createNativeStackNavigator();

export const GlobalInfo = createContext();

const App = () => {
  const [state, setState] = useState([])
console.log("state")
  return (
    <GlobalInfo.Provider value={state}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </GlobalInfo.Provider>
  );
};


export default App;
