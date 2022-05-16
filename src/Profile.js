import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Touchable } from "react-native";
import { View, Text, Image } from "react-native";

export const Profile = () => {
   const navigation=useNavigation()
    return (
        <View>
            <View style={{ flexDirection: "row", backgroundColor: "white" }}>
                <View style={{
                    borderColor: "#000", borderRadius: 40, height: 40,
                    width: 40, borderWidth: 1, margin: 20
                }}>
                    <Text style={{ fontSize: 20, paddingLeft: 12, marginTop: 5 }}>R</Text>
                </View>
                <View>
                    <Text style={{ margin: 5, fontSize: 18, color: "#000" }}>Rishabh Pratap Singh</Text>
                    <Text style={{ fontSize: 14, marginTop: 0, marginLeft: 5, color: "#000" }}>rpratapsingh333@gmail.com</Text>
                    <Text style={{ fontSize: 14, marginTop: 0, marginLeft: 5, color: "#000" }}>6397155364</Text>
                </View>
                <View>
                    <Image source={require('./Images/arrow-right.png')} style={{ height: 27, width: 27, marginTop: 26, marginLeft: 80 }} />
                </View>
            </View>
            <View style={{ marginTop: 10 }}>

                <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: 'space-between', marginTop: 10, alignItems: "center", paddingHorizontal: 20, paddingVertical: 7 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                        <Image source={require('./Images/open-box.png')} style={{ height: 27, width: 27, }} />
                        <Text style={{ fontSize: 16, marginHorizontal: 10 }}>My Dashboard</Text>
                    </View>
                    <Image source={require('./Images/arrow-right.png')} style={{ height: 27, width: 27, }} />


                </View>
                <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: 'space-between', marginTop: 10, alignItems: "center", paddingHorizontal: 20, paddingVertical: 7 }}  >
                    <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                        <Image source={ require('./Images/user.png')} style={{ height: 27, width: 27, }} />
                        <Text style={{ fontSize: 16, marginHorizontal: 10 }}>Manage Child</Text>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate("ManageChild")}>
                    <Image source={require('./Images/arrow-right.png')} style={{ height: 27, width: 27, }} />
</TouchableOpacity>

                </View>
                <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: 'space-between', marginTop: 10, alignItems: "center", paddingHorizontal: 20, paddingVertical: 7 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                        <Image source={require('./Images/document.png')} style={{ height: 27, width: 27, }} />
                        <Text style={{ fontSize: 16, marginHorizontal: 10 }}>Common Form</Text>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate("CommonForm")}>
                    <Image source={require('./Images/arrow-right.png')} style={{ height: 27, width: 27, }} />
</TouchableOpacity>

                </View>
                <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: 'space-between', marginTop: 10, alignItems: "center", paddingHorizontal: 20, paddingVertical: 7 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                        <Image source={require('./Images/heart.png')} style={{ height: 27, width: 27, }} />
                        <Text style={{ fontSize: 16, marginHorizontal: 10 }}>Shortlisted Students</Text>
                    </View>
                    <Image source={require('./Images/arrow-right.png')} style={{ height: 27, width: 27, }} />


                </View>
                <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: 'space-between', marginTop: 10, alignItems: "center", paddingHorizontal: 20, paddingVertical: 7 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                        <Image source={require('./Images/qr-code.png')} style={{ height: 27, width: 27, }} />
                        <Text style={{ fontSize: 16, marginHorizontal: 10 }}>Scan QR code</Text>
                    </View>
                    <Image source={require('./Images/arrow-right.png')} style={{ height: 27, width: 27, }} />


                </View>
                <View style={{flexDirection:"row",backgroundColor:"white",justifyContent:'space-between',marginTop:10,alignItems:"center",paddingHorizontal:20,paddingVertical:7}} >
<View style={{flexDirection:"row",alignItems:"center",flex:1}}>
    <Image source={require('./Images/headphones.png')} style={{ height: 27, width: 27,  }}/>
    <Text style={{fontSize:16,marginHorizontal:10}}>Need help?</Text>
</View>
<Image source={require('./Images/arrow-right.png')} style={{height: 27, width: 27, }}/>


            </View>
            <View style={{flexDirection:"row",backgroundColor:"white",justifyContent:'space-between',marginTop:10,alignItems:"center",paddingHorizontal:20,paddingVertical:7}} >
<View style={{flexDirection:"row",alignItems:"center",flex:1}}>
    <Image source={require('./Images/star-with-number-five.png')} style={{ height: 27, width: 27,  }}/>
    <Text style={{fontSize:16,marginHorizontal:10}}>Rate our App</Text>
</View>
<Image source={require('./Images/arrow-right.png')} style={{height: 27, width: 27, }}/>


            </View>
            <View style={{flexDirection:"row",backgroundColor:"white",justifyContent:'space-between',marginTop:10,alignItems:"center",paddingHorizontal:20,paddingVertical:7}} >
<View style={{flexDirection:"row",alignItems:"center",flex:1}}>
    <Image source={require('./Images/bell.png')} style={{ height: 27, width: 27,  }}/>
    <Text style={{fontSize:16,marginHorizontal:10}}>Notification Settings</Text>
</View>
<Image source={require('./Images/arrow-right.png')} style={{height: 27, width: 27, }}/>


            </View>
            </View>
            <View>
                <Text style={{ paddingHorizontal: 12, paddingVertical: 10 }}>Terms of Use</Text>
                <Text style={{ paddingHorizontal: 12, paddingVertical: 10 }}>Privacy Policy</Text>
                <Text style={{ paddingHorizontal: 12, paddingVertical: 10 }}>Reset Password</Text>
                <Text style={{ paddingHorizontal: 12, paddingVertical: 10 }}>Logout</Text>
            </View>
            <Text style={{ paddingHorizontal: 150, paddingVertical: 10 }}>Version 6.3.0</Text>
        </View>
    )
}

