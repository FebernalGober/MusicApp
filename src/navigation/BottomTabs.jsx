import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { AntDesign } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      activeColor="white"
      initialRouteName="Home"
      inactiveColor="#434343"
      backBehavior="history"
      barStyle={{ backgroundColor: "#162238" }}
      shifting={true}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarColor: "black",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
        initialParams={{ screenType: "Home" }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarColor: "black",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
        initialParams={{ screenType: "Profile" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigation;
