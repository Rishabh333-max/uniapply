import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { Button } from "react-native";
import { View,Text,Modal,ScrollView,TouchableOpacity,Image } from "react-native";
import { Searchbar } from "react-native-paper";
import { Data } from "./Data";


export const CityModal=({isModalVisible,setModalVisible,searchbar,city,setCity,categoryItems,})=>{

    
    const Dataa = [
        {
            id: 1,
            name: "Agra",
            image: require("./Images/tajmahal.jpeg")
        },
        {
            id: 2,
            name: "Gurugram",
            image: require("./Images/download.png")
        },
        {
            id: 3,
            name: "Delhi",
            image: require("./Images/indiagate.webp")
        },
        {
            id: 4,
            name: "Navi Mumbai",
            image: require('./Images/navimumbai.png')
        },
        {
            id: 5,
            name: "Pune",
            image: require('./Images/pune.jpeg')
        },
        {
            id: 6,
            name: "Nashik",
            image: require('./Images/nashik.webp')
        },
        {
            id: 7,
            name: "Thane",
            image: require('./Images/thane.webp')
        },
        {
            id: 8,
            name: "Banglore",
            image: require('./Images/banglore.jpg')
        },
        {
            id: 9,
            name: "Mumbai",
            image: require('./Images/mumbai.png')
        },
        {
            id: 10,
            name: "Ghaziabad",
            image: require('./Images/ghaziabad.webp')
        },
        {
            id: 11,
            name: "Nagpur",
            image: require('./Images/nagpur.jpeg')
        },
        {
            id: 12,
            name: "Vadodra",
            image: require('./Images/vadodra.webp')
        }
    ]
    // const navigation=useNavigation()
    const [cities,setCities]=useState(Data);
    const filterMenu=(category)=>{
        const updatedItems=Data.filter((curElem)=>{
          
            return curElem.category ===category;
        });
        setCities(updatedItems)
        console.log("up",updatedItems)
    }
  
    return(
        <>
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
                    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
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
                <View style={{ display: 'flex', flexWrap:"wrap",flexDirection:"row" }} >
                    {/* {Dataa.map((elem) => {
                        return (

                            <TouchableOpacity onPress={()=> {setCity(elem.name); setModalVisible(!isModalVisible); filterMenu("Agra")}  } key={elem.id} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            value={city}  >
                                  
                                <Image source={elem.image}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />
                            
<Text style={{ marginLeft: 40, color: "black" }}>{elem.name}</Text>
{categoryItems.map((curElem)=>{
  {  console.log('cu',curElem)
}    <Button title="press me"/>
                              })
                                     
                              }
                            </TouchableOpacity>
                        )
                    })} */}
                    {/* <TouchableOpacity onPress={()=> {()=>filterMenu("Agra"); setModalVisible(!isModalVisible); }  } style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
                            value={city}  >
                                  
                                <Image source={require("./Images/tajmahal.jpeg")}

                                    style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
                                />
                            
<Text style={{ marginLeft: 40, color: "black" }}>Agra</Text>
</TouchableOpacity> */}
<Button title="Agra" onPress={()=>filterMenu("Agra")}/>
                </View>
            </View>
        </ScrollView>
</Modal>
        </>
    )
}