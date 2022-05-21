import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { useContext, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Modal, SafeAreaView, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { GlobalInfo } from "../App";
import { Data } from "./Data";
import { Header } from "./Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { CommonForm } from "./CommonForm";
import PagerView from 'react-native-pager-view';



export const Compare = () => {
    const {allDatas,setAllDatas,filterAr,setFilterAr,cities,setCities,filterMenu,openModal,openModal1,isModalVisible,isModalVisible1,activeItem,activeItem1,setActive,setActive1,setModalVisible,setModalVisible1,closeModal,closeModal1,searchbar:searchbar,setSearchbar:setSearchbar,dataUse:dataUse,setDataUse:setDataUse,dataFilter:dataFilter,}=useContext(GlobalInfo)
    console.log("open", openModal)
    const navigation = useNavigation()



    return (


        <View style={{flex:1}}>
            <View >
                <Header openModal={openModal} isModalVisible={isModalVisible} setActive={setActive} setModalVisible={setModalVisible} activeItem={activeItem} closeModal={closeModal} cities={cities} />

            
            </View>

<MyTabs cities={cities} />

        </View>


    )
}



export const CompareSchools = () => {
    console.log('sdhdcbchjds')
    const {allDatas,setAllDatas,filterAr,setFilterAr,cities,setCities,filterMenu,openModal,openModal1,isModalVisible,isModalVisible1,activeItem,activeItem1,setActive,setActive1,setModalVisible,setModalVisible1,closeModal,closeModal1,searchbar,setSearchbar,dataUse,setDataUse,dataFilter,}=useContext(GlobalInfo)
console.log("opentry",openModal1)
    return (
        <SafeAreaView style={{  flexDirection: "row",backgroundColor:"#e6e6fa",flex:1}}>
            <View style={styles.categoryItemWrapper}>
            <TouchableOpacity onPress={openModal1}>
                <Image source={require("./Images/plus.png")} color="#e6e6fa" style={styles.categoryItemImage}  />
                </TouchableOpacity>
                <Text style={styles.categoryItemTitle}>Add School</Text>
           
            </View>
            <View style={styles.categoryItemWrapper}>
            <TouchableOpacity onPress={openModal1}>
                <Image source={require("./Images/plus.png")} color="#e6e6fa" style={styles.categoryItemImage}  />
                </TouchableOpacity>
                <Text style={styles.categoryItemTitle}>Add School</Text>
             
            </View>
        </SafeAreaView>
     
    )
}

export const PopularSchools = () => {
    return (
        <View>
            <Text>Hi Rishabh</Text>
        </View>
    )
}


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    
      screenOptions={{
        tabBarActiveTintColor: '#034694',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen
        name="CompareSchools"
        component={CompareSchools}
        options={{ tabBarLabel: 'Compare Schools' }}
      />
      <Tab.Screen
        name="PopularSchools"
        component={PopularSchools}
        options={{ tabBarLabel: 'Popular Schools' }}
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
        backgroundColor:"red"
      },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    modalView: {
        // margin: 10,
        backgroundColor: "white",

        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 24,
        fontWeight: '500'
    },
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        width: 600,
        height: 600,
        backgroundColor: "red",
        marginBottom: 30,
    },
    boxes: {
        width: 300,
        height: 300,
        backgroundColor: "red",
        marginBottom: 30,
    },
    text: {
        fontSize: 30,
    },
    containers: {
        marginLeft: 100,
        width: "100%"
    },
    modalView1: {
        backgroundColor: "white",
        marginTop: 210,
        width: "100%"
    },
    mainContainer: {
        height: '100%',
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: "#F5F5F5"
    },
    mainHeader: {
        fontSize: 25,
        color: "#344055",
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: 'capitalize',
        fontFamily: "regular",
        justifyContent: "center",
        marginLeft: 80
    },
    inputContainer: {
        marginTop: 10
    },
    labels: {
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        fontFamily: 'regular'
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        // paddingHorizontal: 15,
        // paddingVertical: 7,
        borderRadius: 1,
        fontFamily: 'regular',
        fontSize: 18,

        backgroundColor: "white"

    },
    description: {
        fontSize: 20,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 2,
        lineHeight: 25,
        fontFamily: "regular"
    },
    brandView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    brandViewText: {
        color: "#ffffff",
        fontSize: 40,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: "#ffffff",
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60
    },
    categoryListWrapper: {
        paddingTop: 20,
        marginLeft: 170,

    },
    categoryItemWrapper: {
      flex:1,
        backgroundColor: "white",
        // marginRight:20,
        borderRadius: 2,
       padding:20,
        elevation: 10,
    //   paddingHorizontal:30,
      paddingVertical:8,
      marginTop:20,
      height:130,
      width:180,
      alignItems:"center",
        shadowColor: "#000",
        marginHorizontal:20,
        justifyContent:"center",
        borderRadius:4

    },
    categoryItemImage: {
        width: 36,
        height: 36,
        color:"#034694"
   
    },
    categoryItemTitle: {
        textAlign: "center",
        fontFamily: "Montserrat-semiBold",
        fontSize: 14,
        marginTop: 15,
        fontSize: 18,
        fontWeight: "500",
        color: "black"

    },
 
    categorySelectIcon: {
        alignSelf: "center",
        color: "white",
    },
    userProfileView: {
        flexDirection: 'row',
        // justifyContent: "center",
        padding: 20,
        marginTop: 15,
        // marginBottom: 10,
        borderRadius: 12,
        backgroundColor: "rgba(255,255,255,0.9)",
        elevation: 10,
        shadowColor: '#000',
        textAlign: 'center'
    },
    userProfileTextStyle: {
        color: 'black',
        fontSize: 18,
        marginLeft: 15
    },

});






{/* <Tab.Navigator
screenOptions={{
    tabBarActiveTintColor: 'black',
    tabBarLabelStyle: { fontSize: 12 },
    tabBarPressColor: '#c9e2f1',
    tabBarStyle: { backgroundColor: 'white', marginTop: 5 },
}}>
<Tab.Screen name="CompareSchools" options={{ tabBarLabel: 'Compare Schools', tabBarLabelStyle: { fontSize: 16, fontWeight: '500' } }} >
{
    () => <View style={{backgroundColor:"red", height:300}}>
        <Text>Gello</Text>
    </View>
}
</Tab.Screen>
<Tab.Screen name="PopularSchools" options={{ tabBarLabel: 'Popular Schools', tabBarLabelStyle: { fontSize: 16, fontWeight: '500' } }} >
    {() => <PopularSchools cities={cities} />}</Tab.Screen> 



</Tab.Navigator> */}

// function MyTabs({ cities }) {

//     // const Tab = createMaterialTopTabNavigator();

//     return (

          


   
//     );
// }