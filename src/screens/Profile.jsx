import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import SongCard from "../components/SongCard";
import ProfileStyles from "../styles/ProfileStyles";

function Profile({ navigation }) {
  const [lastSelectedTracks, setLastSelectedTracks] = useState([]);
  useEffect(() => {
    async function loadLastSelectedTracks() {
      try {
        const storedTracks = await AsyncStorage.getItem("lastSelectedTracks");
        if (storedTracks !== null) {
          setLastSelectedTracks(JSON.parse(storedTracks));
        }
      } catch (error) {
        console.error(
          "Error al cargar las últimas canciones seleccionadas:",
          error
        );
      }
    }
    const unsubscribe = navigation.addListener("focus", loadLastSelectedTracks);

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

