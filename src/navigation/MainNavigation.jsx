import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabsNavigation from "./BottomTabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const Stack = createStackNavigator(); // Crear un nuevo navegador de pila

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={"HomeTabs"} // Ruta inicial, que carga la navegación de pestañas inferiores
      screenOptions={{ headerShown: false }} // Opciones de pantalla para ocultar la barra de navegación
    >
      <Stack.Screen name="Home" component={Home} /> 
      <Stack.Screen name="Profile" component={Profile} /> 
      <Stack.Screen name="HomeTabs" component={BottomTabsNavigation} /> 
    </Stack.Navigator>
  );
};

export default MainNavigation;
