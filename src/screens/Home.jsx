import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import Card from '../components/Card';
import axios from 'axios';

function Home() {
  const [topTracks, setTopTracks] = useState([]);
  const [detailedTrackInfo, setDetailedTrackInfo] = useState(null);

  useEffect(() => {
    const apiKey = 'be8c6a4c47c8e04774909a893e4c64fe'; 
    const location = 'spain';
    const trackMbid = 'd11fcceb-dfc5-4d19-b45d-f4e8f6d3eaa6'; 

    const topTracksUrl = `https://ws.audioscrobbler.com/2.0/?method=geo.getTopTracks&country=${location}&api_key=${apiKey}&format=json&limit=1`;

    const trackInfoUrl = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&mbid=${trackMbid}&api_key=${apiKey}&format=json`;

    axios.get(topTracksUrl)
      .then(response => {
        const tracks = response.data.tracks.track;

        setTopTracks(tracks);
      })
      .catch(error => {
        console.error('Error al obtener las canciones más escuchadas:', error);
      });

    axios.get(trackInfoUrl)
      .then(response => {
        const trackInfo = response.data.track;
        console.log('Información detallada de la canción:', trackInfo);
        setDetailedTrackInfo(trackInfo);
      })
      .catch(error => {
        console.error('Error al obtener información detallada de la canción:', error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>Home</Text>
        <Card topTracks={topTracks} detailedTrackInfo={detailedTrackInfo}/>
      </View>
    </SafeAreaView>
  );
}

export default Home;




const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
     
      
    },
    contentContainer: {
      flex: 1,

    },
  });
  