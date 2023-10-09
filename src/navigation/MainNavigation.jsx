import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabsNavigation from "./BottomTabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={"HomeTabs"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="HomeTabs" component={BottomTabsNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
