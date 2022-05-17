/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { createContext } from 'react';

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
import { useMemo } from 'react';
import { Data } from './src/Data';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// const Stack = createNativeStackNavigator();

export const GlobalInfo = createContext();

const App = () => {
  const [state, setState] = useState([])
  

  const [city, setCity] = useState("Agra")


  
  const [allDatas, setAllDatas] = useState("")

  const [filterAr, setFilterAr] = useState(Data)
  console.log("filterAr", filterAr)
  const [cities, setCities] = useState(Data);

  const filterMenu = (category) => {
      const updatedItems = Data.filter((curElem) => {

          return curElem.category === category;
      });
      setCities(updatedItems)
      // console.log("up", updatedItems)
      const upp = updatedItems.slice(0, 3)
      setFilterAr(upp)

  }

  const [isModalVisible, setModalVisible] = useState(false);
    const [activeItem, setActive] = useState(false)

    const openModal = (item) => {
        setActive(item || false)
        setModalVisible(true)
    }
    const closeModal = () => {
        setActive(false)
        setModalVisible(false)
    }


  const [isModalVisible1, setModalVisible1] = useState(false);
  const [activeItem1, setActive1] = useState(false)

  const openModal1 = (item) => {
      setActive1(item || false)
      setModalVisible1(true)
  }
  const closeModal1 = () => {
      setActive1(false)
      setModalVisible1(false)
  }

  const [searchbar, setSearchbar] = useState("")

    const [dataUse,setDataUse]=useState([])
    console.log("dataUse",dataUse)
    useEffect(() => {
        setDataUse(cities)
    }, [cities])
    const dataFilter = (e) => {
        const keyword = e;

        if (keyword !== '') {
            const results = dataUse.filter((inputFilter) => {
console.log("i",inputFilter)
                return inputFilter.name.toLowerCase().startsWith(keyword.toLowerCase()) 
            });

            setDataUse(results);
        } else {
            setDataUse(cities);
            console.log("cities", cities)

        }
    }


    useEffect(() => {
        dataFilter(searchbar);
    }, [searchbar])


    const theme = {
      ...DefaultTheme,
      roundness: 2,
      colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
      },
    };
  return (
    <GlobalInfo.Provider value={{allDatas:allDatas,
    setAllDatas:setAllDatas,
    filterAr:filterAr,
    setFilterAr:setFilterAr,
    cities:cities,
    setCities:setCities,
    filterMenu:filterMenu,
    openModal:openModal,
    closeModal:closeModal,
    isModalVisible:isModalVisible,
    setModalVisible:setModalVisible,
    activeItem:activeItem,
    setActive:setActive,
    isModalVisible1:isModalVisible1,
    setModalVisible1:setModalVisible1,
    activeItem1:activeItem1,
    setActive1:setActive1,
    openModal1:openModal1,
    closeModal1:closeModal1,
    searchbar:searchbar,
    setSearchbar:setSearchbar,
    dataUse:dataUse,
    setDataUse:setDataUse,
    dataFilter:dataFilter,
    
    }}>
      <PaperProvider theme={theme}>
      <NavigationContainer>
        <BottomTabNavigator  />
      </NavigationContainer>
      </PaperProvider>
    </GlobalInfo.Provider>
  );
};


export default App;
