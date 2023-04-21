import React, { useState } from 'react';
import { generateAudio } from '../../api';

const VoiceCloning = () => {
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const generatedAudioUrl = await generateAudio(text, 'your-voice-id-here');
      setAudioUrl(generatedAudioUrl);
      setIsLoading(false);
    } catch (error) {
      console.error('Error generating audio:', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Voice Cloning with Resemble AI</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">
          Text to Synthesize
          <textarea
            id="text"
            value={text}
            onChange={handleTextChange}
            rows="4"
            cols="50"
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Generate'}
        </button>
      </form>

      {audioUrl && (
        <div>
          <h2>Generated Audio</h2>
          <audio src={audioUrl} controls />
        </div>
      )}
    </div>
  );
};

export default VoiceCloning;
