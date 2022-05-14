import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useContext,useState } from "react";
import { View,Text,ScrollView,TouchableOpacity,Image,Modal } from "react-native";
import { Searchbar } from "react-native-paper";
import { GlobalInfo } from "../App";
import { Data } from "./Data";
import { Header } from "./Header";

export const Compare=()=>{
    const {allDatas,setAllDatas,filterAr,setFilterAr,cities,setCities,filterMenu,filterArray,openModal,isModalVisible,setActive,setModalVisible,activeItem,closeModal}=useContext(GlobalInfo);
  console.log("open",openModal)
    const navigation = useNavigation()
 


    return (

        
      
                <ScrollView style={{backgroundColor:"white"}}>
<View >
         <Header openModal={openModal} isModalVisible={isModalVisible}  setActive={setActive} setModalVisible={setModalVisible} activeItem={activeItem} closeModal={closeModal} cities={cities}/>
         </View>
        <View style={{flexDirection:"row",alignItems:"center"}}>
   <TouchableOpacity style={{flexDirection:"row"}}>
       <Image source={require("./Images/arrowfacing1.jpg")} color="black" style={{ height: 50, width: 50, marginTop: 10, marginLeft: 20 }}/>
    <Text style={{paddingHorizontal:0,paddingVertical:25,fontSize:16}}>Compare Schools </Text> 
    </TouchableOpacity>
    <TouchableOpacity style={{flexDirection:"row"}}>
    <Image source={require("./Images/star.png")} color="black" style={{ height: 20, width: 20, marginTop: 26, marginLeft: 20 }}/>
    <Text style={{paddingVertical:20,paddingVertical:25,fontSize:16,marginLeft:10}}>Popular Schools</Text>
    </TouchableOpacity>
     {/* <View><TouchableOpacity><Text>Popular Schools</Text></TouchableOpacity></View> */}
        </View>
            </ScrollView>
                   
     
)
}