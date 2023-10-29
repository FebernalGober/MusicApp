import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import SongCard from "../components/SongCard";
import ProfileStyles from "../styles/ProfileStyles";

function Profile({ navigation }) {
  // Estado para almacenar las últimas canciones seleccionadas
  const [lastSelectedTracks, setLastSelectedTracks] = useState([]);

  // Efecto que se ejecuta al cargar el componente o cuando cambia la navegación
  useEffect(() => {
    // Función asincrónica para cargar las últimas canciones seleccionadas desde AsyncStorage
    async function loadLastSelectedTracks() {
      try {
        const storedTracks = await AsyncStorage.getItem("lastSelectedTracks");  // Obtener las canciones almacenadas
        if (storedTracks !== null) {
          setLastSelectedTracks(JSON.parse(storedTracks)); // Establecer las canciones en el estado
        }
      } catch (error) {
        console.error(
          "Error al cargar las últimas canciones seleccionadas:",
          error
        );
      }
    }

    // Agregar un oyente a la navegación que cargará las últimas canciones cuando la pantalla obtenga el foco
    const unsubscribe = navigation.addListener("focus", loadLastSelectedTracks);

    // Devolver una función de limpieza para el oyente
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={ProfileStyles.container}>
      <View style={ProfileStyles.contentContainer}>
        <View style={ProfileStyles.topTitle}>
          <Text style={ProfileStyles.titulo}>Mi perfil</Text>
          <Text style={ProfileStyles.subTitulo}>
            Ultimas Canciones Reproducidas
          </Text>
        </View>
        <View style={ProfileStyles.rowMargin}>

          {/* Usar FlatList para renderizar las últimas canciones seleccionadas */}
          <FlatList
            data={lastSelectedTracks}
            keyExtractor={(item, index) => `${item.name}-${index}`}
            renderItem={({ item }) => <SongCard detailedTrackInfo={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
