// import { useNavigation } from "@react-navigation/native";
// import React, { useState } from "react";
// import { useEffect } from "react";
// import { ScrollView } from "react-native";
// import { View, Text, Image, TouchableOpacity } from "react-native";
// import { Searchbar } from 'react-native-paper';
// import { Home } from "./Home";



// export const Location = () => {
//     const navigation = useNavigation()
//     const [searchbar, setSearchbar] = useState("")
//     // const [city.id, setTitle] = useState('')
//     const [city,setCity]=useState("Agra")
 
// console.log("city",city)
//     const Dataa = [
//         {
//             id: 1,
//             name: "Agra",
//             image: require("./Images/tajmahal.jpeg")
//         },
//         {
//             id: 2,
//             name: "Gurugram",
//             image: require("./Images/download.png")
//         },
//         {
//             id: 3,
//             name: "Delhi",
//             image: require("./Images/indiagate.webp")
//         },
//         {
//             id: 4,
//             name: "Navi Mumbai",
//             image: require('./Images/navimumbai.png')
//         },
//         {
//             id: 5,
//             name: "Pune",
//             image: require('./Images/pune.jpeg')
//         },
//         {
//             id: 6,
//             name: "Nashik",
//             image: require('./Images/nashik.webp')
//         },
//         {
//             id: 7,
//             name: "Thane",
//             image: require('./Images/thane.webp')
//         },
//         {
//             id: 8,
//             name: "Banglore",
//             image: require('./Images/banglore.jpg')
//         },
//         {
//             id: 9,
//             name: "Mumbai",
//             image: require('./Images/mumbai.png')
//         },
//         {
//             id: 10,
//             name: "Ghaziabad",
//             image: require('./Images/ghaziabad.webp')
//         },
//         {
//             id: 11,
//             name: "Nagpur",
//             image: require('./Images/nagpur.jpeg')
//         },
//         {
//             id: 12,
//             name: "Vadodra",
//             image: require('./Images/vadodra.webp')
//         }
//     ]
//     // const navig=(jhkj)=>{
//     //     console.log("j",jhkj)
//     //     setCity(elem.name)
//     //     navigation.navigate("Home",{city})
//     // }
    

//     return (
//         <ScrollView>
//             <View>
//                 <View style={{ flexDirection: "row" }}>
//                     <Text style={{ fontSize: 22, fontWeight: "400", color: "black", marginLeft: 20, marginTop: 12 }}>Search Location</Text>
//                     <TouchableOpacity onPress={() => navigation.goBack()}>
//                         <Image source={require("./Images/close.png")} style={{ height: 18, width: 18, marginTop: 20, marginLeft: 150 }} />
//                     </TouchableOpacity>
//                 </View>
//                 <Searchbar
//                     placeholder="Search location, locality, popular area, city"
//                     onChangeText={(text) => setSearchbar(text)}
//                     value={searchbar}
//                     style={{ margin: 10, elevation: 20, shadowColor: "#000" }}
//                 />
//                 <View style={{ marginTop: 20, height: 1, backgroundColor: 'black', width: "100%", color: "black" }} />
//                 <Text style={{ marginTop: 20, fontSize: 20, color: "black", marginLeft: 15, fontWeight: "600" }}>Cities</Text>
//                 <View style={{ display: 'flex', flexWrap:"wrap",flexDirection:"row" }} >
//                     {Dataa.map((elem) => {
//                         return (

//                             <TouchableOpacity onPress={()=> navig()  } key={elem.id} style={{ backgroundColor: "white", height: 120, width: 120, marginBottom: 10, marginLeft: 10 }}
//                             value={city}  >
                                  
//                                 <Image source={elem.image}

//                                     style={{ height: 80, width: 80, color: "black", marginLeft: 26 }}
//                                 />
//                                 <Text style={{ marginLeft: 40, color: "black" }} >{elem.name}</Text>
                           
//                             </TouchableOpacity>
//                         )
//                     })}
//                 </View>
//             </View>
//         </ScrollView>
//     )
// }

