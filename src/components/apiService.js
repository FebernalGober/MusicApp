import axios from 'axios';

const API_KEY = 'be8c6a4c47c8e04774909a893e4c64fe'; // Reemplaza con tu clave de API de Last.fm
const BASE_URL = 'http://ws.audioscrobbler.com/2.0/';

const apiService = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    format: 'json',
  },
});

export const getTopTracks = async () => {
  try {
    const response = await apiService.get('', {
      params: {
        method: 'chart.gettoptracks',
      },
    });
    return response.data.tracks.track;
  } catch (error) {
    console.error('Error al obtener las principales canciones:', error);
    throw error;
  }
};
