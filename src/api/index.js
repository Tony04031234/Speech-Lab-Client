import axios from "axios";

// API client instance
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

// Dummy audio
export const DummyAudioCall = async () => {
  const generatedAudioSrc =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  return generatedAudioSrc;
};

// Fetch voices
export const fetchVoices = async () => {
  const response = await apiClient.get("/voices");
  return response.data;
};

// Generate audio
export const generateAudio = async (text, voiceId) => {
  try {
    const response = await apiClient.post("/generate", {
      text: text,
      voice: voiceId,
    });

    return response.data.audioUrl;
  } catch (error) {
    console.error("Error generating audio:", error);
    throw error;
  }
};

// You can add more API calls below
