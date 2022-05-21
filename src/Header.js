import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import { View,Text,Image,TouchableOpacity } from "react-native";
import  AntDesign  from "react-native-vector-icons/AntDesign";

export const Header=({openModal,cities,allData,})=>{
    // console.log("citiessss",cities)
    const navigation=useNavigation()
    const [liked,setLiked]=useState(false)
    return(
        <ScrollView>
              <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={openModal}>
                   
                        <Image source={require('./Images/placeholder.png')} style={{ height: 25, width: 25, marginLeft: 30, marginTop: 26 }} />
                      
               
                       
                        <Text style={{ marginTop: 26, marginLeft: 10, fontSize: 20 }}>{cities?.[0]?.category}</Text>

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
        </ScrollView>
    )
}