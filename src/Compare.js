import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { useContext, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Modal, SafeAreaView, StyleSheet,TextInput,FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { GlobalInfo } from "../App";
import { Data } from "./Data";
import { Header } from "./Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { CommonForm } from "./CommonForm";
import PagerView from 'react-native-pager-view';
import Feather  from "react-native-vector-icons/Feather";


export const Compare = () => {
    const { allDatas, setAllDatas, filterAr, setFilterAr, cities, setCities, filterMenu, openModal, openModal1, openModal2, isModalVisible, isModalVisible1, isModalVisible2, activeItem, activeItem1, activeItem2, setActive, setActive1, setActive2, setModalVisible, setModalVisible1, setModalVisible2, closeModal, closeModal1, closeModal2, searchbar, setSearchbar, dataUse, setDataUse, dataFilter, dataUsage, setDataUsage,
        openModal3,
        closeModal3,
        isModalVisible3,
        setModalVisible3,
        activeItem3,
        setActive3,
        spacing,
        AVATAR_SIZE,
        editItem,
        isEditItem,
        setIsEditItem,
        toggleBtn,
        setToggleBtn,
        input,
        setInput,
        setSubmitData,
        submitData,
        onSubmit,
        openModal4,
        closeModal4,
        isModalVisible4,
        setModalVisible4,
        activeItem4,
        setActive4,
    } = useContext(GlobalInfo)
    // console.log("open", openModal)
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



export const CompareSchools = (props) => {
    const firstSchoolNameComponent = props.route.params?.val?.item
    const secondSchoolNameComponent = props.route.params?.Valentine?.item

    console.log('sdhdcbchjds',props)
    const { allDatas, setAllDatas, filterAr, setFilterAr, cities, setCities, filterMenu, openModal, openModal1, openModal2, isModalVisible, isModalVisible1, isModalVisible2, activeItem, activeItem1, activeItem2, setActive, setActive1, setActive2, setModalVisible, setModalVisible1, setModalVisible2, closeModal, closeModal1, closeModal2, searchbar, setSearchbar, dataUse, setDataUse, dataFilter, dataUsage, setDataUsage,
        openModal3,
        closeModal3,
        isModalVisible3,
        setModalVisible3,
        activeItem3,
        setActive3,
        spacing,
        AVATAR_SIZE,
        editItem,
        isEditItem,
        setIsEditItem,
        toggleBtn,
        setToggleBtn,
        input,
        setInput,
        setSubmitData,
        submitData,
        onSubmit,
        openModal4,
        closeModal4,
        isModalVisible4,
        setModalVisible4,
        activeItem4,
        setActive4,
        openModal7,
        closeModal7,
        isModalVisible7,
        setModalVisible7,
        activeItem7,
        setActive7,
        openModal8,
        closeModal8,
        isModalVisible8,
        setModalVisible8,
        activeItem8,
        setActive8,
    } = useContext(GlobalInfo)
// console.log("opentry",openModal1)

const navigation=useNavigation()
    return (
      
        <SafeAreaView style={{  flexDirection: "row",backgroundColor:"#e6e6fa",flex:1}}>
           
            
            {
                secondSchoolNameComponent?<>
                  <View style={styles.categoryItemWrapper1}>
                <TouchableOpacity onPress={()=>navigation.navigate("SchoolProfile",{val})}>
                    <Image source={{uri:secondSchoolNameComponent.imgUrl}} color="#e6e6fa" style={styles.categoryItemImage1}  />
                    <Text style={{color:"black",fontSize:14,}} numberOfLines={1}>{secondSchoolNameComponent.name}</Text>
                    <Text style={{fontSize:10,}} numberOfLines={1}>{secondSchoolNameComponent.address}</Text>
                    <Text style={{backgroundColor:"#E52B50",color:"white",padding:5,justifyContent:"center",marginLeft:20,marginTop:10,borderRadius:10,alignItems:"center",width:80}}>Apply</Text>
                    </TouchableOpacity>
             
               
                </View>
                </>:
                <View style={styles.categoryItemWrapper}>
                <TouchableOpacity onPress={openModal8}>
                    <Image source={require("./Images/plus.png")} color="#e6e6fa" style={styles.categoryItemImage}  />
                    </TouchableOpacity>
                    <Text style={styles.categoryItemTitle}>Add School</Text>
               
                </View>
              }  

{
                firstSchoolNameComponent?<>
                  <View style={styles.categoryItemWrapper1}>
                <TouchableOpacity onPress={()=>navigation.navigate("SchoolProfile",{val})}>
                    <Image source={{uri:firstSchoolNameComponent.imgUrl}} color="#e6e6fa" style={styles.categoryItemImage1}  />
                    <Text style={{color:"black",fontSize:14,}} numberOfLines={1}>{firstSchoolNameComponent.name}</Text>
                    <Text style={{fontSize:10,}} numberOfLines={1}>{firstSchoolNameComponent.address}</Text>
                    <Text style={{backgroundColor:"#E52B50",color:"white",padding:5,justifyContent:"center",marginLeft:20,marginTop:10,borderRadius:10,alignItems:"center",width:80}}>Apply</Text>
                    </TouchableOpacity>
             
               
                </View>
                </>:
                <View style={styles.categoryItemWrapper}>
                <TouchableOpacity onPress={openModal7}>
                    <Image source={require("./Images/plus.png")} color="#e6e6fa" style={styles.categoryItemImage}  />
                    </TouchableOpacity>
                    <Text style={styles.categoryItemTitle}>Add School</Text>
               
                </View>
              }  
            <Modal
                animationType='slide'
                visible={isModalVisible7}
                onRequestClose={() => {
                    setModalVisible7(!isModalVisible7)
                }}
            >

                <View>
                    <View >
                        <Header openModal={openModal} cities={cities} />
                    </View>

                    <View style={styles.searchSection}     >
                        <Feather name="search" size={20} color="#000" style={{ marginLeft: 10 }} />
                        <TextInput
                            style={styles.input}
                            value={searchbar}
                            onChangeText={(newVal) => setSearchbar(newVal)}
                            placeholder="Which School are you looking?"

                        />
                    </View>
                    {
                        searchbar ?
                            <FlatList
                                data={dataUse}

                                contentContainerStyle={{
                                    paddingLeft: 10,
                                    paddingRight: 10
                                    // paddingTop: StatusBar.currentHeight || 42
                                }}
                                renderItem={(val) => {
                                    const valll = val;
                                    // console.log("vvxasdasdasadsadssadasd", val)
                                    return (
                                        <View>
                                            

                                            <TouchableOpacity style={{
                                                flexDirection: "row", marginBottom: 2, backgroundColor: "white",
                                                // elevation: 10,
                                                // shadowColor: '#000',
                                            }} onPress={() => {navigation.navigate("CompareSchools", { val }); setModalVisible7(!isModalVisible7)}}>
                                              
                                                <Image source={require('./Images/school.jpg')}
                                                    style={{
                                                        width: 40, height: 40, borderRadius: 40,

                                                    }} />
                                                <View>
                                                    <Text style={{ fontSize: 16, fontWeight: "400", marginTop: 10 }} >{val.item.name}</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <View
                                                style={{
                                                    borderBottomColor: 'grey',
                                                    borderBottomWidth: 1,
                                                }}
                                            />
                                        </View>

                                    )
                                }} /> :
                            <>
                            </>}
                            </View>
                            </Modal>

                        <Modal
                animationType='slide'
                visible={isModalVisible8}
                onRequestClose={() => {
                    setModalVisible8(!isModalVisible8)
                }}
            >

                <View>
                    <View >
                        <Header openModal={openModal} cities={cities} />
                    </View>

                    <View style={styles.searchSection}     >
                        <Feather name="search" size={20} color="#000" style={{ marginLeft: 10 }} />
                        <TextInput
                            style={styles.input}
                            value={searchbar}
                            onChangeText={(newVal) => setSearchbar(newVal)}
                            placeholder="Which School are you looking?"

                        />
                    </View>
                    {
                        searchbar ?
                            <FlatList
                                data={dataUse}

                                contentContainerStyle={{
                                    paddingLeft: 10,
                                    paddingRight: 10
                                    // paddingTop: StatusBar.currentHeight || 42
                                }}
                                renderItem={(Valentine) => {
                                    const valll = Valentine;
                                    // console.log("vvxasdasdasadsadssadasd", val)
                                    return (
                                        <View>
                                            

                                            <TouchableOpacity style={{
                                                flexDirection: "row", marginBottom: 2, backgroundColor: "white",
                                                // elevation: 10,
                                                // shadowColor: '#000',
                                            }} onPress={() => {navigation.navigate("CompareSchools", { Valentine }); setModalVisible8(!isModalVisible8)}}>
                                              
                                                <Image source={require('./Images/school.jpg')}
                                                    style={{
                                                        width: 40, height: 40, borderRadius: 40,

                                                    }} />
                                                <View>
                                                    <Text style={{ fontSize: 16, fontWeight: "400", marginTop: 10 }} >{Valentine.item.name}</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <View
                                                style={{
                                                    borderBottomColor: 'grey',
                                                    borderBottomWidth: 1,
                                                }}
                                            />
                                        </View>

                                    )
                                }} /> :
                            <>
                            </>}
                            </View>
                            </Modal>
                                 
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
    categoryItemWrapper1:{
        flex:1,
        backgroundColor: "white",
        // marginRight:20,
        borderRadius: 2,
    //    padding:20,
        elevation: 10,
    //   paddingHorizontal:30,
    //   paddingVertical:8,
      marginTop:20,
      height:220,
      width:180,
      alignItems:"center",
        shadowColor: "#000",
        marginHorizontal:20,
        // justifyContent:"center",
        borderRadius:4
    },
    categoryItemImage: {
        width: 36,
        height: 36,
        color:"#034694"
   
    },
    categoryItemImage1: {
        width: 136,
        height: 140,
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
    searchSection: {
        margin: 20,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: "grey",
        borderWidth: 1,
        shadowColor: "black",
        elevation: 10
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        color: '#424242',
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