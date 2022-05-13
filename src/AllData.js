import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Modal } from "react-native";
import { Header } from "./Header";
import { Searchbar } from "react-native-paper";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Data } from "./Data";
import { useEffect } from "react";

export const AllData = ({ route }) => {
    console.log("route", route)
    const navigation = useNavigation()
    // console.log("ncbn",cities,)
    const { cities} = route.params
    console.log("see data", cities)

    const [isModalVisible, setModalVisible] = useState(false);
    const [activeItem, setActive] = useState(false)
    const [searchbar, setSearchbar] = useState("")
    const [citi,setCiti]=useState(cities)
    const [upItems,setUpItems]=useState(Data.length)
console.log("upItems",upItems)
    console.log("citi",citi)

    const openModal = (item) => {
        setActive(item || false)
        setModalVisible(true)
    }
    const closeModal = () => {
        setActive(false)
        setModalVisible(false)
    }
    const filterMenuu = (category) => {
        const updatedItems = Data.filter((curElem) => {

            return curElem.category === category;
        });
        setCiti(updatedItems)
        console.log("up", updatedItems)
const upItem=citi.length
return setUpItems(upItem)
// console.log("upIt",upItem)

        //   console.log("upppp",upp)

    }
    // useEffect(()=>{
    //     setCiti(cities)
    // },[citi])
    return (
        <View>
            <ScrollView>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={openModal}>
                        <Image source={require('./Images/placeholder.png')} style={{ height: 25, width: 25, marginLeft: 30, marginTop: 26 }} />
            
                        <Text style={{ marginTop: 26, marginLeft: 10, fontSize: 20 }}>{citi?.[0]?.category}</Text>
                  
                        <Image source={require('./Images/arrow-down-sign-to-navigate.png')} style={{ height: 15, width: 15, marginLeft: 10, marginTop: 32 }} />
                    </TouchableOpacity >
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("MyApplication")}>
                            <Image source={require('./Images/shopping-cart.png')} color="black" style={{ height: 27, width: 27, marginLeft: 140, marginTop: 26 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./Images/open-box.png')} color="black" style={{ height: 27, width: 27, marginTop: 26, marginLeft: 14 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                {/* {cities.map((elem) => (

                    <View style={{ margin: 10 }} key={elem.id} >

                        <Image source={{ uri: elem.imgUrl }} style={{ width: "100%", height: 170, }} />
                        <Text numberOfLines={1} style={{ color: "black", fontWeight: "400", fontSize: 20, width: 290, color: "black" }}>{elem.name}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require("./Images/placeholder.png")} style={{ height: 15, width: 15, marginTop: 8 }} />
                            <Text style={{ marginTop: 4, marginLeft: 6 }}>{elem.address} </Text>
                        </View>
                        <Text style={{ marginTop: 10, color: "black" }}>Classes:{elem.classes}</Text>

                    </View>
                ))} */}
                       {citi.map((elem) => (

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
            <Modal


                animationType='slide'
                visible={isModalVisible}
                onRequestClose={() => {
                    setModalVisible(!isModalVisible)
                }}
                filterMenuu={filterMenuu}
            >
                <ScrollView>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 22, fontWeight: "400", color: "black", marginLeft: 20, marginTop: 12 }}>Search Location</Text>
                            <TouchableOpacity onPress={closeModal}>
                                <Image source={require("./Images/close.png")} style={{ height: 18, width: 18, marginTop: 20, marginLeft: 150 }} />
                            </TouchableOpacity>
                        </View>
                        <Searchbar
                            placeholder="Search location, locality, popular area, city"
                            onChangeText={(text) => setSearchbar(text)}
                            value={searchbar}
                            style={{ margin: 10, elevation: 20, shadowColor: "#000" }}
                        />
                        <View style={{ marginTop: 20, height: 1, backgroundColor: 'black', width: "100%", color: "black" }} />
                        <Text style={{ marginTop: 20, fontSize: 20, color: "black", marginLeft: 15, fontWeight: "600" }}>Cities</Text>
                        <View style={{ display: 'flex', flexWrap: "wrap", flexDirection: "row" }} >

                            <TouchableOpacity onPress={() => { filterMenuu("Agra"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require("./Images/tajmahal.jpeg")}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Agra</Text>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => { filterMenuu("Delhi"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/indiagate.webp')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Delhi</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { filterMenuu("Gurugram"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require("./Images/download.png")}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Gurugram</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenuu("Mathura"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/krishna.jpg')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Mathura</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenuu("Pune"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/pune.jpeg')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Pune</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenuu("Thane"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/thane.webp')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Thane</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenuu("Ghaziabad"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/ghaziabad.webp')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Ghaziabad</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenuu("Vadodra"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/vadodra.webp')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Vadodra</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenuu("Banglore"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/banglore.jpg')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Banglore</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenuu("Nagpur"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/nagpur.jpeg')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Nagpur</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenuu("Navi Mumbai"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/navimumbai.png')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Navi Mumbai</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { filterMenuu("Nashik"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            >

                                <Image source={require('./Images/nashik.webp')}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />

                                <Text style={{ marginLeft: 40, color: "black" }}>Nashik</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { filterMenuu("Mumbai"); setModalVisible(!isModalVisible) }} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
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
        </View>
    )
}