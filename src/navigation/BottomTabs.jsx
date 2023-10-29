import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { AntDesign } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator(); // Crear un nuevo navegador de pestañas inferiores

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
    activeColor="white" // Color activo para la pestaña seleccionada
    initialRouteName="Home" // Ruta inicial
    inactiveColor="#434343" // Color inactivo para las pestañas no seleccionadas
    backBehavior="history" // Comportamiento de navegación hacia atrás
    barStyle={{ backgroundColor: "#162238" }} // Estilo de la barra de pestañas
    shifting={true} // Habilitar el modo "shifting" para las pestañas
    >
      <Tab.Screen
        name="Inicio" // Nombre de la pestaña
        component={Home} // Componente asociado a la pestaña "Inicio"
        options={{
          tabBarColor: "black", // Color de fondo de la pestaña
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} /> // Icono de inicio
          ),
        }}
        initialParams={{ screenType: "Home" }} // Parámetros iniciales para el componente "Home"
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
