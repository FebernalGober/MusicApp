import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PlayerStyles from '../styles/PlayerStyles';

const Player = ({ songTitle, artistName, albumCover, isPlaying, onPlayPause, onNext, onPrevious }) => {
  return (
    <View style={PlayerStyles.container}>
      <Image source={{ uri: albumCover }} style={PlayerStyles.albumCover} />
      <View style={PlayerStyles.trackInfo}>
        <Text style={PlayerStyles.songTitle}>{songTitle}</Text>
        <Text style={PlayerStyles.artistName}>{artistName}</Text>
      </View>
      <View style={PlayerStyles.controls}>
        <TouchableOpacity onPress={onPrevious}>
          <Text style={PlayerStyles.controlButton}>⏮</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlayPause}>
          <Text style={PlayerStyles.controlButton}>{isPlaying ? '⏸' : '▶️'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext}>
          <Text style={PlayerStyles.controlButton}>⏭</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Player;
