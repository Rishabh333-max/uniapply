import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator, SchoolsStackNavigator, AdmissionStackNavigator, ProfileStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} options={{headerShown:false}} />
      <Tab.Screen name="Compare" component={ContactStackNavigator} options={{headerShown:false}}/>
      <Tab.Screen name="Schools" component={SchoolsStackNavigator} options={{headerShown:false}}/>
      <Tab.Screen name="Admissions" component={AdmissionStackNavigator} options={{headerShown:false}}/>
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;