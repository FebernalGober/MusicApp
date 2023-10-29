import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigation from "./src/navigation/MainNavigation";

function App() {
  return (
    <SafeAreaProvider>
    {/* Proporcionar áreas seguras para la aplicación */}
      <NavigationContainer>
      {/* Contenedor de navegación que envuelve toda la aplicación */}
        <MainNavigation />
        {/* Utilizar la navegación principal definida en MainNavigation */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
