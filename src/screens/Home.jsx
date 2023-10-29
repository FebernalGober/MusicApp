import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import Card from "../components/Card";
import axios from "axios";
import HomeStyles from "../styles/HomeStyles";

// API Key y ubicación para la solicitud de canciones más escuchadas
// "location" se puede integrar en un componente para que el usuario elija de que pais quiere recibir el top de musica
const apiKey = "be8c6a4c47c8e04774909a893e4c64fe";
const location = "spain";
const topTracksUrl = `https://ws.audioscrobbler.com/2.0/?method=geo.getTopTracks&country=${location}&api_key=${apiKey}&format=json&limit=25`;

// Hook personalizado para manejar las canciones
const useTracks = () => {

  // Estado para almacenar las canciones principales y la información detallada de las canciones
  const [topTracks, setTopTracks] = useState([]);
  const [detailedTrackInfoList, setDetailedTrackInfoList] = useState([]);

  // Efecto que se ejecuta una vez al montar el componente
  useEffect(() => {
    axios
      .get(topTracksUrl)
      .then(async (response) => {
        const tracks = response.data.tracks.track;

        // Establecer las canciones principales en el estado
        setTopTracks(tracks);

        const detailedInfoList = [];

        for (const track of tracks) {
          const trackMbid = track.mbid;

          const trackInfoUrl = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&mbid=${trackMbid}&api_key=${apiKey}&format=json`;

          try {
            const detailedTrackResponse = await axios.get(trackInfoUrl);
            const detailedTrackInfo = detailedTrackResponse.data.track;

            detailedInfoList.push(detailedTrackInfo);
          } catch (error) {
            console.error(
              "Error al obtener información detallada de la canción:",
              error
            );
          }
        }
        // Establecer la información detallada de las canciones en el estado
        setDetailedTrackInfoList(detailedInfoList);
      })
      .catch((error) => {
        console.error("Error al obtener las canciones más escuchadas:", error);
      });
  }, []);

  return {
    topTracks,
    detailedTrackInfoList,
  };
};

function Home() {

  // Utilizar el hook personalizado para obtener las canciones
  const { topTracks, detailedTrackInfoList } = useTracks();

  return (
    <SafeAreaView style={HomeStyles.container}>
      <StatusBar hidden />
      <View style={HomeStyles.contentContainer}>
        <Card
          topTracks={topTracks}
          detailedTrackInfoList={detailedTrackInfoList}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
