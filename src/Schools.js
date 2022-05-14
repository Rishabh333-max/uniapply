import React, { useState,useContext,createContext} from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Modal } from "react-native";
import { Header } from "./Header";
import { Searchbar } from "react-native-paper";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Data } from "./Data";
import { useEffect } from "react";
import { GlobalInfo } from "../App";
// import { GlobalInfo } from "./Home";



export const Schools = ({route}) => {
 
    // console.log("ccz",{CityInfo})
    console.log("routes", route)
    const navigation = useNavigation()
 
    const {allDatas,setAllDatas,filterAr,setFilterAr,cities,setCities,filterMenu,openModal,isModalVisible,activeItem,isActve,setModalVisible,closeModal}=useContext(GlobalInfo)
    // const [isModalVisible, setModalVisible] = useState(false);
    // const [activeItem, setActive] = useState(false)
    const [searchbar, setSearchbar] = useState("")
    const [citi,setCiti]=useState(cities)
    const [upItems,setUpItems]=useState(Data.length)
console.log("upItems",upItems)
    console.log("citi",citi)

    // const openModal = (item) => {
    //     setActive(item || false)
    //     setModalVisible(true)
    // }
    // const closeModal = () => {
    //     setActive(false)
    //     setModalVisible(false)
    // }
    // const filterMenu = (category) => {
    //     const updatedItems = Data.filter((curElem) => {

    //         return curElem.category === category;
    //     });
    //     setCiti(updatedItems)
    //     console.log("up", updatedItems)


    // }

    return (

        <View>
            {/* <Context.consumer> */}
             
            <ScrollView>
         
            <Header openModal={openModal} cities={cities} />
            <Text style={{paddingHorizontal:20,paddingVertical:20,fontSize:20,color:"black"}}>Schools in {cities?.[0]?.category}</Text>
                       {cities?.map((elem) => (

<View style={{ margin: 10 }} key={elem.id} >

    <Image source={{ uri: elem.imgUrl }} style={{ width: "100%", height: 170, }} />
    <Text numberOfLines={1} style={{ color: "black", fontWeight: "400", fontSize: 20, width: 290, color: "black" }}>{elem.name}</Text>
    <View style={{ flexDirection: "row" }}>
        <Image source={require("./Images/placeholder.png")} style={{ height: 15, width: 15, marginTop: 8 }} />
        <Text style={{ marginTop: 4, marginLeft: 6 }}>{elem.address} </Text>
    </View>
    <Text style={{ marginTop: 10, color: "black" }}>Classes:{elem.classes}</Text>

</View>
))}

            </ScrollView>

            {/* </Context.consumer> */}
        </View>
    )
}