import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SongCardStyles from "../styles/SongCardStyles";

const SongCard = ({ detailedTrackInfo }) => {
  return (
    <View style={SongCardStyles.container}>
      <View style={SongCardStyles.rowMargin}>
        <ImageBackground
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
            <Text style={SongCardStyles.date}>
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
              style={SongCardStyles.point}
            />

            {detailedTrackInfo.toptags.tag.slice(0, 2).map((tag) => (
              <Text key={tag.name} style={SongCardStyles.tags}>
                #{tag.name}
              </Text>
            ))}
            <View style={SongCardStyles.dots}>
              <Entypo name="dots-three-horizontal" size={24} color="gray" />
            </View>
          </View>

          <Text style={SongCardStyles.textTitle}>{detailedTrackInfo.name}</Text>
          <Text style={SongCardStyles.textAuthor}>
            {detailedTrackInfo.artist.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SongCard;
