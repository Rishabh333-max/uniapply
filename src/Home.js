import React, { useEffect, useState, createContext } from "react";
import { View, Text, TouchableOpacity, Image, Alert, ScrollView, Button, StyleSheet, TextInput, FlatList } from 'react-native'
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import { useNavigation,  } from '@react-navigation/native';
import { Searchbar } from "react-native-paper";
import { TabRouter, useNavigation, useRoute } from "@react-navigation/native";
import { Data } from "./Data";
import { Modal } from "react-native";
import { Header } from "./Header";
// import { createContext } from "react";
// import Citiesdata from "./ContextData";
import { AppProvider } from "./ContextData";
import { useContext } from "react";
import { GlobalInfo } from "../App";
import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from "react-native";


const allData = [...new Set(Data.map((curElem) => curElem.category))]

// export const Citiesdata=createContext(cities)
// console.log("all ", allData)

export const Home = (props) => {
    const [categoryItems, setCatItems] = useState(allData)
    const navigation = useNavigation()
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
    console.log("kkkk", submitData)
    const getData = () => {
        const [dataaa, setDataaa] = useState('');
        console.log("snbsbnas", dataaa)
        setDataaa(val)
    }
    // console.log("Citiesass",cities)
    // console.log("filterATATAT",filterAr)


    const [tdata, setTdata] = useState("");

    const filterArray = cities;

    useEffect(() => {
        setAllDatas(filterArray)
    }, [filterArray])
    const showConfirmDialog = () => {
        return Alert.alert(
            "Alert!",
            "Your search location will be changed to Continue to Proceed!",
            [
                {
                    text: "Cancel",
                },
                // The "Yes" button
                {
                    text: "Continue",
                    onPress: () => {

                        navigation.navigate('MyApplication')

                    },
                },


            ]
        );
    };
    const [items, setItems] = useState(Data)

    const route = useRoute()



    console.log("activeItem2", activeItem2)
    return (


        <>
            <ScrollView style={{ backgroundColor: "white" }}>



                <Header openModal={openModal} cities={cities} />

                <TouchableOpacity style={styles.searchSection} onPress={openModal1}>
                    <Feather name="search" size={20} color="#000" style={{ marginLeft: 10 }} />
                    <TextInput
                        style={styles.input}
                        editable={false}
                        placeholder="Search location, locality, popular area, city"
                        selectTextOnFocus={false}

                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { showConfirmDialog() }}>
                    <Image source={require("./Images/1211.jpg")} style={{ width: "95%", height: 250, margin: 10 }} />
                </TouchableOpacity >
                <TouchableOpacity style={{ backgroundColor: "#b6ccfe", margin: 10, height: 70, elevation: 2, shadowColor: "#000", }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('./Images/open-box.png')} color="black" style={{ height: 27, width: 27, marginTop: 10, marginLeft: 14 }} />
                        <Text style={{ color: "black", marginTop: 10, fontSize: 20, fontWeight: "400", marginLeft: 4 }}>View Dashboard</Text>
                        <Image source={require('./Images/next.png')} color="black" style={{ height: 20, width: 20, marginTop: 25, marginLeft: 140 }} />
                    </View>
                    <Text style={{ marginLeft: 44 }}>Tap here to view application status.</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ marginLeft: 20, fontSize: 20 }}>Schools in {cities?.[0]?.category}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Schools", { cities: cities })}>
                        {console.log("cima", cities)}

                        <Text style={{ color: "blue", marginRight: 20, marginTop: 6 }}   >View All 718 Schools</Text>
                    </TouchableOpacity>

                </View>
                <ScrollView horizontal={true}>

{console.log("fffff",filterAr)}
                    {filterAr.map((elem) => (

                    <View style={{ margin: 10 }} key={elem.id} >
                        {/* {console.log("dddd",e)} */}

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
            </ScrollView>

            <Modal


                animationType='slide'
                visible={isModalVisible}
                onRequestClose={() => {
                    setModalVisible(!isModalVisible)
                }}
                filterMenu={filterMenu}
            >
                <ScrollView>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 22, fontWeight: "400", color: "black", marginLeft: 20, marginTop: 12 }}>Search Location</Text>
                            <TouchableOpacity onPress={closeModal}>
                                <Image source={require("./Images/close.png")} style={{ height: 18, width: 18, marginTop: 20, marginLeft: 150 }} />
                            </TouchableOpacity>
                        </View>
                        <View >
                            <Searchbar
                                placeholder="Search location, locality, popular area, city"
                                // onChangeText={(text) => setSearchbar(text)}
                                // value={searchbar}
                                style={{ margin: 10, elevation: 20, shadowColor: "#000" }}
                                onPress={openModal1}

                            />
                        </View>
                        <View style={{ marginTop: 20, height: 1, backgroundColor: 'black', width: "100%", color: "black" }} />
                        <Text style={{ marginTop: 20, fontSize: 20, color: "black", marginLeft: 15, fontWeight: "600" }}>Cities</Text>
                        <View style={{ display: 'flex', flexWrap: "wrap", flexDirection: "row" }} >

                            <TouchableOpacity onPress={() => { filterMenu("Agra"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require("./Images/tajmahal.jpeg")}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Agra</Text>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => { filterMenu("Delhi"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/indiagate.webp')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Delhi</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { filterMenu("Gurugram"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require("./Images/download.png")}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Gurugram</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenu("Mathura"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/krishna.jpg')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Mathura</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenu("Pune"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/pune.jpeg')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Pune</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenu("Thane"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/thane.webp')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Thane</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenu("Ghaziabad"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/ghaziabad.webp')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Ghaziabad</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenu("Vadodra"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/vadodra.webp')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Vadodra</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenu("Banglore"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/banglore.jpg')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Banglore</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenu("Nagpur"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/nagpur.jpeg')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Nagpur</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenu("Navi Mumbai"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/navimumbai.png')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Navi Mumbai</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { filterMenu("Nashik"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/nashik.webp')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Nashik</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenu("Mumbai"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/mumbai.png')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Mumbai</Text>
                            </TouchableOpacity>



                        </View>
                    </View>

                </ScrollView>

            </Modal>
            <Modal
                animationType='slide'
                visible={isModalVisible1}
                onRequestClose={() => {
                    setModalVisible1(!isModalVisible1)
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
                                    console.log("vvxasdasdasadsadssadasd", val)
                                    return (
                                        <View>

                                            <TouchableOpacity style={{
                                                flexDirection: "row", marginBottom: 2, backgroundColor: "white",
                                                // elevation: 10,
                                                // shadowColor: '#000',
                                            }} onPress={() => navigation.navigate("SchoolProfile", { val })}>
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


        </>




    )
}
export default Home;

const styles = StyleSheet.create({
    searchBar: {
        fontSize: 24,
        margin: 10,
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderColor: "grey",
        borderWidth: 1,
        shadowColor: "black",
        elevation: 10
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
    searchIcon: {
        padding: 10,
        marginLeft: 20
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

})


