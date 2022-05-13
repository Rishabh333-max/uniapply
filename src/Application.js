import React from "react";
import { Button } from "react-native";
import { View,Text,StyleSheet,Image } from "react-native";

export const Application=()=>{
return(
    
    <View style={{flex:1,justifyContent:"center",alignItems:"center",marginBottom:100}}>
        <Image source={require("./Images/s.png")} style={{height: 70, width: 70,marginBottom:20  }}/>
        <Text style={{fontSize:28,color:"#14213d",}}>Hey, it feels so light</Text>
        <Text style={{color:"black",textAlign:"center",marginHorizontal:20}}>There is nothing in your cart. Let's add some applications.</Text>
      
        <View style={styles.childView} >
 
          <Text style={styles.text}>Explore Schools </Text>
 
        </View>
    </View>
)
}
const styles=StyleSheet.create({
    childView: {
        // justifyContent: 'center',
        // backgroundColor: 'transparent',
        // width: 120,
        // height: 40,
        // borderWidth:2,
        // borderColor: '#BF360C',
       
        // borderRadius:10
        marginTop:20,
        justifyContent:"center",alignItems:"center",
        borderRadius:6,
        backgroundColor:"transparent",
          borderWidth:1,
        borderColor: '#0077b6',
      },
     
      text: {
        // fontSize: 16,
        color:'#0077b6',
        // fontWeight: '400',
        textAlign: 'center',
    
        justifyContent:"center",
        padding:5
      

      },
})