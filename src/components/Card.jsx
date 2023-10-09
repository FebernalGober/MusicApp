import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
} from "react-native";
import BasicButton from "./BasicButton";
import CardStyles from "../styles/CardStyles";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 


const Card = ({ topTracks, detailedTrackInfoList }) => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTrackInfo, setSelectedTrackInfo] = useState(null);

  const handleCardPress = (index) => {
    if (expandedCardIndex === index) {
      // Si ya está expandida, cierra la tarjeta
      setExpandedCardIndex(null);
    } else {
      // Si no está expandida, expande la tarjeta
      setExpandedCardIndex(index);
    }
  };

  const handleBasicButtonClick = (trackInfo) => {
    // Mostrar el modal y establecer la información de la canción seleccionada
    setIsModalVisible(true);
    setSelectedTrackInfo(trackInfo);
  };

  const closeModal = () => {
    // Cerrar el modal
    setIsModalVisible(false);
    setSelectedTrackInfo(null);
  };

  return (
    <View>
      <View style={CardStyles.topTitle}>
        <AntDesign
          name="left"
          size={24}
          color="white"
          style={CardStyles.icono}
        />
        <Text style={CardStyles.titulo}>Top Tracks Spain</Text>
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
                        const anio = partes[2].replace(',', '');
                        console.log('Error al obtener información detallada de la canción:', anio);

                        return anio;
                      })()}
                    </Text>
                    <FontAwesome name="circle" size={5} color="gray"  style={CardStyles.point} />
                    {detailedTrackInfo.toptags.tag.slice(0, 2).map((tag) => (
                      <Text key={tag.name} style={CardStyles.tags}>
                        #{tag.name}
                      </Text>
                    ))}
                    <View  style={CardStyles.dots}>
                    <Entypo name="dots-three-horizontal" size={24} color="gray" />
                    </View>
                  </View>
                  <Text style={CardStyles.textTitle}>{item.name}</Text>
                  <Text style={CardStyles.textAuthor}>{item.artist.name}</Text>
                </View>
                <View style={CardStyles.buttonContainer}></View>
              </View>
              {expandedCardIndex === index && (
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={isModalVisible}
                  onRequestClose={closeModal}
                >
                  <View style={[CardStyles.modalContent, CardStyles.modalContainer]}>
                    {selectedTrackInfo && (
                      <View style={CardStyles.modal}>
                        <ImageBackground
                          source={{
                            uri: detailedTrackInfo.album.image.find(
                              (image) => image.size === "extralarge"
                            )["#text"],
                          }}
                          style={CardStyles.modalImage}
                        />
                        <Text>{selectedTrackInfo.name}</Text>
                        <Text>{selectedTrackInfo.artist.name}</Text>
                      </View>
                    )}
                    <Button title="Cerrar" onPress={closeModal} />
                  </View>
                </Modal>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Card;
