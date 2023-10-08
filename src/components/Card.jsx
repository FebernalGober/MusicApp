import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity, FlatList} from 'react-native';
import BasicButton from './BasicButton';
import {useNavigation} from '@react-navigation/native';
import CardStyles from '../styles/CardStyles';

const Card = ({ topTracks, detailedTrackInfo }) => {
  return (
    <FlatList
      data={topTracks}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      renderItem={({ item }) => {
        // Agrega un console.log para mostrar la URL de la imagen en la consola

        return (
          <TouchableOpacity style={CardStyles.container}>
            <View style={CardStyles.rowMargin}>
              <ImageBackground
                source={{ uri: detailedTrackInfo.album.image.find(image => image.size === 'extralarge')['#text']}}
                style={CardStyles.img}
              />
              <View style={CardStyles.songInfo}>
                <Text style={CardStyles.textTitle}>{item.name}</Text>
                <Text style={CardStyles.textAuthor}>{item.artist.name}</Text>
              </View>
              <View style={CardStyles.buttonContainer}>
                <BasicButton />
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Card;