import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useContext,useState } from "react";
import { View,Text,ScrollView,TouchableOpacity,Image,Modal,SafeAreaView,StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { GlobalInfo } from "../App";
import { Data } from "./Data";
import { Header } from "./Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";



export const Compare=()=>{
    const {allDatas,setAllDatas,filterAr,setFilterAr,cities,setCities,filterMenu,filterArray,openModal,isModalVisible,setActive,setModalVisible,activeItem,closeModal}=useContext(GlobalInfo);
  console.log("open",openModal)
    const navigation = useNavigation()
 


    return (

        
      
                <ScrollView style={{backgroundColor:"white"}}>
<View >
         <Header openModal={openModal} isModalVisible={isModalVisible}  setActive={setActive} setModalVisible={setModalVisible} activeItem={activeItem} closeModal={closeModal} cities={cities}/>
         
 <MyTabs cities={cities}/>
        </View>
            </ScrollView>
                   
     
)
}

function MyTabs({cities}) {

    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarPressColor: '#c9e2f1',
                tabBarStyle: { backgroundColor: 'white', marginTop: 5 },
            }}>
            <Tab.Screen name="CompareSchools" options={{ tabBarLabel: 'Compare Schools', tabBarLabelStyle: { fontSize: 16, fontWeight: '500' } }} >
                {() => <CompareSchools cities={cities} />}
            </Tab.Screen>
            <Tab.Screen name="PopularSchools" options={{ tabBarLabel: 'Popular Schools', tabBarLabelStyle: { fontSize: 16, fontWeight: '500' } }} >
                {() => <PopularSchools cities={cities} />}</Tab.Screen>
            {/* <Tab.Screen name="ListEnquiry" component={ListEnquiry} /> */}
          

        </Tab.Navigator>
    );
}

export const CompareSchools=()=>{
    const {allDatas,setAllDatas,filterAr,setFilterAr,cities,setCities,filterMenu,openModal,isModalVisible,activeItem,isActve,setModalVisible,closeModal}=useContext(GlobalInfo)
    return(
        <SafeAreaView style={{ paddingTop: 40, paddingLeft: 40, paddingRight: 40, justifyContent: "space-between", flexDirection: "row" }}>
        <View style={styles.categoryItemWrapper}>
            <Image source={require("./Images/plus.png")} style={styles.categoryItemImage} />
            <Text style={styles.categoryItemTitle}>Compare Schools</Text>
            <View style={styles.categorySelectWrapper}>
               
            </View>
        </View>
        <View style={styles.categoryItemWrapper}>
            <Image source={require("./Images/plus.png")} style={styles.categoryItemImage} />
            <Text style={styles.categoryItemTitle}>Popular Schools</Text>
            <View style={styles.categorySelectWrapper}>
               
            </View>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
    }
});



export const PopularSchools=()=>{
    return(
        <View>
            <Text>Hi Rishabh</Text>
        </View>
    )
}

