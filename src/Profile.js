import React from "react";
import { View,Text,Image } from "react-native";

export const Profile=()=>{
    const Fields=[
        {
            id:1,
            name:"My Dashboard",
            image:require('./Images/open-box.png'),
            images:require('./Images/arrow-right.png')
        },
        {
            id:2,
            name:"Manage Child",
            image:require('./Images/user.png'),
            images:require('./Images/arrow-right.png')
        },
        {
            id:3,
            name:"Common Form",
            image:require('./Images/document.png'),
            images:require('./Images/arrow-right.png')
        },
        {
            id:4,
            name:"Shortlisted Students",
            image:require('./Images/heart.png'),
            images:require('./Images/arrow-right.png')
        },
        {
            id:5,
            name:"Scan QR Code",
            image:require('./Images/qr-code.png'),
            images:require('./Images/arrow-right.png')
        },
        {
            id:6,
            name:"Need Help?",
            image:require('./Images/headphones.png'),
            images:require('./Images/arrow-right.png')
        },
        {
            id:7,
            name:"Rate our App",
            image:require('./Images/star-with-number-five.png'),
            images:require('./Images/arrow-right.png')
        },
        {
            id:8,
            name:"Notification Settings",
            image:require('./Images/bell.png'),
            images:require('./Images/arrow-right.png')
        },

    ]
    return(
        <View>
            <View style={{flexDirection:"row",backgroundColor:"white" }}>
<View style={{borderColor:"#000",borderRadius:40, height: 40,
  width: 40,borderWidth:1,margin:20}}>
<Text style={{fontSize:20,paddingLeft:12,marginTop:5}}>R</Text>
</View>
<View>
    <Text style={{margin:5,fontSize:18,color:"#000"}}>Rishabh Pratap Singh</Text>
    <Text style={{fontSize:14,marginTop:0,marginLeft:5,color:"#000"}}>rpratapsingh333@gmail.com</Text>
    <Text style={{fontSize:14,marginTop:0,marginLeft:5,color:"#000"}}>6397155364</Text>
</View>
<View>
    <Image source={require('./Images/arrow-right.png')} style={{height: 27, width: 27, marginTop: 26, marginLeft: 80 }}/>
</View>
            </View>
            <View style={{marginTop:10}}>
           { Fields.map((item)=>{
               return(
 <View style={{flexDirection:"row",backgroundColor:"white",justifyContent:'space-between',marginTop:10,alignItems:"center",paddingHorizontal:20,paddingVertical:7}} >
<View style={{flexDirection:"row",alignItems:"center",flex:1}}>
    <Image source={item.image} style={{ height: 27, width: 27,  }}/>
    <Text style={{fontSize:16,marginHorizontal:10}}>{item.name}</Text>
</View>
<Image source={item.images} style={{height: 27, width: 27, }}/>


            </View>
            
               )
           })
           
          }
          </View>
          <View>
              <Text style={{paddingHorizontal:12,paddingVertical:10}}>Terms of Use</Text>
              <Text style={{paddingHorizontal:12,paddingVertical:10}}>Privacy Policy</Text>
              <Text style={{paddingHorizontal:12,paddingVertical:10}}>Reset Password</Text>
              <Text style={{paddingHorizontal:12,paddingVertical:10}}>Logout</Text>
          </View>
          <Text style={{paddingHorizontal:150,paddingVertical:10}}>Version 6.3.0</Text>
        </View>
    )
}