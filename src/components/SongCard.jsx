import React from "react";
import { Text, View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SongCardStyles from "../styles/SongCardStyles";

// Componente "SongCard" para mostrar información de una canción
const SongCard = ({ detailedTrackInfo }) => {
  return (
    <View style={SongCardStyles.container}>
      <View style={SongCardStyles.rowMargin}>
        {/* Mostrar la imagen de la carátula de la canción */}
        <Image
          source={{
            uri: detailedTrackInfo.album.image.find(
              (image) => image.size === "extralarge"
            )["#text"],
          }}
          style={SongCardStyles.img}
          resizeMode="contain"
        />
        <View style={SongCardStyles.songInfo}>
          <View style={SongCardStyles.info}>
            {/* Mostrar la fecha de publicación de la canción (extrayendo el año) */}
            <Text style={SongCardStyles.date}>
              {(() => {
                const fechaString = detailedTrackInfo.wiki.published;
                const partes = fechaString.split(" ");
                const anio = partes[2].replace(",", "");

                return anio;
              })()}
            </Text>

            {/* Mostrar un punto como separador */}
            <FontAwesome
              name="circle"
              size={5}
              color="gray"
              style={SongCardStyles.point}
            />

            {/* Mostrar etiquetas de las principales categorías (hasta 2 etiquetas) */}
            {detailedTrackInfo.toptags.tag.slice(0, 2).map((tag) => (
              <Text key={tag.name} style={SongCardStyles.tags}>
                #{tag.name}
              </Text>
            ))}
            <View style={SongCardStyles.dots}>
              {/* 3 puntos icono de opciones) para futuras funcionalidades */}
              <Entypo name="dots-three-horizontal" size={24} color="gray" />
            </View>
          </View>

          {/* Mostrar el título de la canción */}
          <Text style={SongCardStyles.textTitle}>{detailedTrackInfo.name}</Text>

          {/* Mostrar el nombre del artista de la canción */}
          <Text style={SongCardStyles.textAuthor}>
            {detailedTrackInfo.artist.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SongCard;
