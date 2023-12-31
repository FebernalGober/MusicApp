import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CardStyles from "../styles/CardStyles";
import PlayingModal from "./PlayingModal";
import { useNavigation } from "@react-navigation/native";

const Card = ({ topTracks, detailedTrackInfoList }) => {
  // Estado para gestionar el índice de la tarjeta expandida

  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  // Estado para gestionar la visibilidad del modal de reproducción

  const [isModalVisible, setIsModalVisible] = useState(false);
  // Estado para almacenar la información de la canción seleccionada

  const [selectedTrackInfo, setSelectedTrackInfo] = useState(null);
  // Estado para almacenar las últimas canciones seleccionadas

  const [lastSelectedTracks, setLastSelectedTracks] = useState([]);
  // Cargar las últimas canciones seleccionadas al iniciar la aplicación
  const navigation = useNavigation();

  useEffect(() => {
    const getSavedTracks = async () => {
      try {
        const savedTracksJson = await AsyncStorage.getItem(
          "lastSelectedTracks"
        );
        if (savedTracksJson) {
          const savedTracks = JSON.parse(savedTracksJson);
          setLastSelectedTracks(savedTracks);
        }
      } catch (error) {
        console.error(
          "Error al obtener las últimas canciones seleccionadas:",
          error
        );
      }
    };

    getSavedTracks();
  }, []);

  // Manejar el clic en una tarjeta

  const handleCardPress = async (index) => {
    if (expandedCardIndex === index) {
      setExpandedCardIndex(null); // Cerrar la tarjeta si ya está expandida
    } else {
      setExpandedCardIndex(index); // Expandir la tarjeta

      const detailedTrackInfo = detailedTrackInfoList[index];
      if (detailedTrackInfo) {
        const trackAlreadySelected = lastSelectedTracks.some(
          (track) => track.name === detailedTrackInfo.name
        );

        if (!trackAlreadySelected) {
          const updatedTracks = [
            detailedTrackInfo,
            ...lastSelectedTracks.slice(0, 9),
          ];
          setLastSelectedTracks(updatedTracks);

          try {
            await AsyncStorage.setItem(
              "lastSelectedTracks",
              JSON.stringify(updatedTracks)
            );
          } catch (error) {
            console.error(
              "Error al almacenar las últimas canciones seleccionadas:",
              error
            );
          }
        }
      }
    }
  };

  // Manejar el clic en el botón básico

  const handleBasicButtonClick = (trackInfo) => {
    setIsModalVisible(true);
    setSelectedTrackInfo(trackInfo);
  };

  // Cerrar el modal de informacion

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedTrackInfo(null);
  };

  return (
    <View>
      <View style={CardStyles.topTitle}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            size={24}
            color="white"
            style={CardStyles.icono}
          />
        </TouchableOpacity>
        <Text style={CardStyles.titulo}>Top Canciones España</Text>
      </View>
      <FlatList
        data={topTracks}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item, index }) => {
          const detailedTrackInfo = detailedTrackInfoList[index];

          if (!detailedTrackInfo) {
            return null;
          }

          return (
            <TouchableOpacity
              style={CardStyles.container}
              onPress={() => {
                handleCardPress(index);
                handleBasicButtonClick(item);
              }}
            >
              <View style={CardStyles.rowMargin}>
                <ImageBackground
                  source={{
                    uri: detailedTrackInfo.album.image.find(
                      (image) => image.size === "extralarge"
                    )["#text"],
                  }}
                  style={CardStyles.img}
                  resizeMode="contain"
                />
                <View style={CardStyles.songInfo}>
                  <View style={CardStyles.info}>
                    <Text style={CardStyles.date}>
                      {(() => {
                        const fechaString = detailedTrackInfo.wiki.published;
                        const partes = fechaString.split(" ");
                        const anio = partes[2].replace(",", "");

                        return anio;
                      })()}
                    </Text>
                    <FontAwesome
                      name="circle"
                      size={5}
                      color="gray"
                      style={CardStyles.point}
                    />
                    {detailedTrackInfo.toptags.tag.slice(0, 2).map((tag) => (
                      <Text key={tag.name} style={CardStyles.tags}>
                        #{tag.name}
                      </Text>
                    ))}
                    <View style={CardStyles.dots}>
                      <Entypo
                        name="dots-three-horizontal"
                        size={24}
                        color="gray"
                      />
                    </View>
                  </View>
                  <Text style={CardStyles.textTitle}>{item.name}</Text>
                  <Text style={CardStyles.textAuthor}>{item.artist.name}</Text>
                </View>
                <View style={CardStyles.buttonContainer}></View>
              </View>
              {expandedCardIndex === index && (
                <PlayingModal
                  visible={isModalVisible}
                  onRequestClose={closeModal}
                  selectedTrackInfo={selectedTrackInfo}
                  detailedTrackInfo={detailedTrackInfo}
                />
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Card;
