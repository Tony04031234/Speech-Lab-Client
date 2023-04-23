// src/api/index.js
import axios from "axios";

// API client instance
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Fetch voices from the backend, which in turn fetches voices from Resemble.ai
export const fetchVoices = async () => {
    try {
        const response = await apiClient.get('/voices');
        return response.data;
    } catch (error) {
        console.error('Error fetching voices:', error);
        throw error;
    }
};

export const generateAudio = async ({
    title,
    body,
    voice_uuid,
    is_public,
    is_archived,
    callback_uri,
  }) => {
    try {
      const response = await apiClient.post("/generate", {
        title,
        body,
        voice_uuid,
        is_public,
        is_archived,
        callback_uri,
      });
  
      console.log(response.data);
  
      return response.data.audio_src;
    } catch (error) {
      console.error("Error generating audio:", error);
      throw error;
    }
  };
// You can add more API calls below
