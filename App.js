/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { createContext } from 'react';



import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { Citiesdata, Home } from './src/Home';
import { Location } from './src/Location';
import { BottomTabs } from './src/BottomTabs';
import { Application } from './src/Application';
import { MainStackNavigator } from './src/StackNavigator';
import BottomTabNavigator from './src/TabNavigator';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';
// import Citiesdata from './src/ContextData';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { Data } from './src/Data';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

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

  const [isModalVisible4, setModalVisible4] = useState(false);
  const [activeItem4, setActive4] = useState(false)

  const openModal4 = (item) => {
    setActive4(item || false)
    setModalVisible4(true)
  }
  const closeModal4 = () => {
    setActive4(false)
    setModalVisible4(false)
  }
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [activeItem2, setActive2] = useState(false)
  const openModal2 = (item) => {
    console.log("iteeeeem", dataUse)
    setActive2(item || false)
    setModalVisible2(true)
    setDataUsage(dataUsage)
  }
  const closeModal2 = () => {
    setActive2(false)
    setModalVisible2(false)
  }
  const [searchbar, setSearchbar] = useState("")

  const [dataUse, setDataUse] = useState([])
  console.log("dataUse", dataUse)
  console.log("dataUse", dataUse?.[0]?.id)
  useEffect(() => {
    setDataUse(cities)
  }, [cities])
  const dataFilter = (e) => {
    const keyword = e;

    if (keyword !== '') {
      const results = dataUse.filter((inputFilter) => {
        console.log("i", inputFilter)
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
  const [dataUsage, setDataUsage] = useState(dataUse);
  console.log("daaaa", dataUsage)


  const [input, setInput] = useState({
    name: "",
    email: "",
    gender: "",
    class: "",
    dates: ""
  })
  const [submitData, setSubmitData] = useState([])


  const onSubmit = () => {
    const inputDataId = { id: new Date().getTime().toString(), input }
    // const newData={input:input}
    // console.log("newData",newData)
    // setSubmitData([...submitData,input])
    setSubmitData([...submitData, inputDataId])
    setInput("")
    setModalVisible3(!isModalVisible3)
    // console.log("submitdata",name)
  }

  // useEffect(() => {
  //     navigation.push("ManageChild", { submitData,toggleBtn,setToggleBtn,input,setInput, })
  // }, [submitData])

  const [toggleBtn, setToggleBtn] = useState(true);
  const [isModalVisible3, setModalVisible3] = useState(false);
  const [activeItem3, setActive3] = useState(false)
  const [isEditItem, setIsEditItem] = useState(null)

  const openModal3 = (item) => {
    setActive3(item || false)
    setModalVisible3(true)
    setInput('')
    setToggleBtn(true)
  }
  const closeModal3 = () => {
    setActive3(false)
    setModalVisible3(false)
  }

  // const navigation = useNavigation()
  const spacing = 20
  const AVATAR_SIZE = 70;


  // const [storeData,setStoreData]=useState(newEditItem)
  // console.log('ssnbd',storeData)
  const editItem = (ids) => {
    console.log("ids", ids)

    let newEditItem = submitData.find((elem) => {
      console.log(":testelem", elem)
      return elem.id === ids.item.id
    })

    setToggleBtn(false)
    if (newEditItem?.item?.id !== '') {
      setInput({
        name: ids.item.input.name,
        email: ids.item.input.email,
        gender: ids.item.input.gender,
        class: ids.item.input.class,
        dates: ids.item.input.dates

      })
    }


    else {
      { console.log("123", newEditItem) }
      setInput({
        name: input.name,
        email: input.email,
        gender: input.gender,
        class: input.class,
        dates: input.dates

      })
    }
    setIsEditItem(ids)

  }

  const [isModalVisible5, setModalVisible5] = useState(false);
  const [activeItem5, setActive5] = useState(false)

  // const [valueKaData,setValueKaData]=useState(dataUse)
// console.log("setValuekaData",valueKaData)

  const openModal5 = (item) => {
    console.log("openModal5",item)
    setActive5(item || false)
    setModalVisible5(true)
    // setValueKaData(item)
  }
  const closeModal5 = () => {
    setActive5(false)
    setModalVisible5(false)
  }

  const [wish,setWish]=useState(dataUse)
  console.log('whisj',wish)

  const [cartItems,setCartItems]=useState([]);
  const wishlist=(product)=>{
      console.log("or",product)
      const ProductExist=cartItems.find((item)=>item.id === product.id);
      if(ProductExist){
          setCartItems(cartItems.map(item=>item.id === product.id?
          {...ProductExist,}:item));
      }
      else if(!ProductExist){
        setCartItems([...cartItems,{...product}])
      }
      // else{
// setCartItems([cartItems,{...product}])
//       }
  }
  const [isModalVisible7, setModalVisible7] = useState(false);
  const [activeItem7, setActive7] = useState(false)
  const openModal7 = (item) => {
    console.log("iteeeeem", dataUse)
    setActive7(item || false)
    setModalVisible7(true)
    setDataUsage(dataUsage)
  }
  const closeModal7 = () => {
    setActive7(false)
    setModalVisible7(false)
  }
  return (
    <GlobalInfo.Provider value={{
      allDatas: allDatas,
      setAllDatas: setAllDatas,
      filterAr: filterAr,
      setFilterAr: setFilterAr,
      cities: cities,
      setCities: setCities,
      filterMenu: filterMenu,
      openModal: openModal,
      closeModal: closeModal,
      isModalVisible: isModalVisible,
      setModalVisible: setModalVisible,
      activeItem: activeItem,
      setActive: setActive,
      isModalVisible1: isModalVisible1,
      setModalVisible1: setModalVisible1,
      activeItem1: activeItem1,
      setActive1: setActive1,
      openModal1: openModal1,
      closeModal1: closeModal1,
      searchbar: searchbar,
      setSearchbar: setSearchbar,
      dataUse: dataUse,
      setDataUse: setDataUse,
      dataFilter: dataFilter,
      openModal2: openModal2,
      closeModal2: closeModal2,
      isModalVisible2: isModalVisible2,
      setModalVisible2: setModalVisible2,
      activeItem2: activeItem2,
      setActive2: setActive2,
      dataUsage: dataUsage,
      setDataUsage: setDataUsage,

    openModal3:openModal3,
      closeModal3: closeModal3,
      isModalVisible3: isModalVisible3,
      setModalVisible3: setModalVisible3,
      activeItem3: activeItem3,
      setActive3: setActive3,
  
      spacing: spacing,
      AVATAR_SIZE: AVATAR_SIZE,
      editItem: editItem,
      isEditItem: isEditItem,
      setIsEditItem: setIsEditItem,
      toggleBtn: toggleBtn,
      setToggleBtn: setToggleBtn,
      input:input,
      setInput:setInput,
      setSubmitData:setSubmitData,
      submitData:submitData,
      onSubmit:onSubmit,


      openModal4:openModal4,
      closeModal4: closeModal4,
      isModalVisible4: isModalVisible4,
      setModalVisible4: setModalVisible4,
      activeItem4: activeItem4,
      setActive4: setActive4,

      openModal5:openModal5,
      closeModal5: closeModal5,
      isModalVisible5: isModalVisible5,
      setModalVisible5: setModalVisible5,
      activeItem5: activeItem5,
      setActive5: setActive5,

      wish:wish,setWish:setWish,
      wishlist:wishlist,

      openModal7:openModal7,
      closeModal7: closeModal7,
      isModalVisible7: isModalVisible7,
      setModalVisible7: setModalVisible7,
      activeItem7: activeItem7,
      setActive7: setActive7,
    }}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </PaperProvider>
    </GlobalInfo.Provider>
  );
};


export default App;
