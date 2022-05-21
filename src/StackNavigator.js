import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AllSchools, Home } from "./Home";
import { Application } from "./Application";
import { Compare } from "./Compare";
import { Schools } from "./Schools";
import { Profile } from "./Profile";
import { Admissions } from "./Admissions";
import { AllData } from "./AllData";
import { Header } from "./Header";
import {CompareSchools} from './Compare'
import {PopularSchools} from './Compare'
import { ManageChild, Modall } from "./ManageChild";
import { CommonForm } from "./CommonForm";
import { DocumentsRequired, EligibilityCriteria, SchoolProfile } from "./SchoolProfile";
import { TotalCostModal } from "./TotalCostModal.js'";
import { ShortListedStudent } from "./ShortListedStudent";
// import { Header } from "./Header";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "white",
  },
  headerTintColor: "black",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="MyApplication" component={Application}  />
      <Stack.Screen name="AllDataaa" component={AllData} options={{headerShown:false}} />
      <Stack.Screen name="Header" component={Header} options={{headerShown:false}} />
      <Stack.Screen name="ManageChild" component={ManageChild} />
      {/* <Stack.Screen name="Modall" component={Modall} /> */}
      <Stack.Screen name="CommonForm" component={CommonForm} />
 
      <Stack.Screen name="CompareSchools" component={CompareSchools} options={{headerShown:false}} />
      <Stack.Screen name="PopularSchools" component={PopularSchools} options={{headerShown:false}}/>  
      <Stack.Screen name="SchoolProfile" component={SchoolProfile} options={{headerShown:false}}/>  
      <Stack.Screen name="EligibilityCriteria" component={EligibilityCriteria} options={{headerShown:false}}/>
      <Stack.Screen name="DocumentsRequired" component={DocumentsRequired} options={{headerShown:false}}/>
      <Stack.Screen name="ShortListedStudent" component={ShortListedStudent} options={{headerShown:false}}/>
 
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Compare" component={Compare} options={{headerShown:false}}  />
    
    </Stack.Navigator>
  );
}
const SchoolsStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Schools" component={Schools} options={{headerShown:false}}  />

      </Stack.Navigator>
    );
  }
  const AdmissionStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Admissions" component={Admissions} options={{headerShown:false}} />
      </Stack.Navigator>
    );
  }

  const ProfileStackNavigator = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
 
      </Stack.Navigator>
    );
  }


export { MainStackNavigator, ContactStackNavigator ,SchoolsStackNavigator,AdmissionStackNavigator,ProfileStackNavigator};