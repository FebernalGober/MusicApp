import React from "react";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  DefaultTheme as NavigationTheme,
} from "@react-navigation/native";
import {
  configureFonts,
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigation from "./src/navigation/MainNavigation";

const fontsConfig = {
  android: {
    regular: {
      fontFamily: "ConcertOne-Regular",
      fontWeight: "normal",
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontsConfig),
};

const navTheme = {
  ...NavigationTheme,
  colors: {
    ...NavigationTheme.colors,
    background: "#fff",
  },
};

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={navTheme}>
          <MainNavigation />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
