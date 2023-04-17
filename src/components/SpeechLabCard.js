import React, { useState } from 'react';

import AudioPlay from './AudioPlay';

const SpeechLabCard = () => {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'es', name: 'Spanish' },
    { code: 'zh', name: 'Chinese' },
    { code: 'fr', name: 'French' },
  ];

  const voices = [
    { id: 'premade-adam', name: 'Premade/Adam' },
    { id: 'premade-john', name: 'Premade/John' },
    { id: 'my-voice', name: 'My Voice' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);
  const [selectedVoice, setSelectedVoice] = useState(voices[0].id);
  const [userText, setUserText] = useState('');
  const [showAudioPopup, setShowAudioPopup] = useState(false);
  const [audioSrc, setAudioSrc] = useState('');


  const handleGenerate = () => {
    // Call your API or generate the audio source URL here
    const generatedAudioSrc = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    setAudioSrc(generatedAudioSrc);
    setShowAudioPopup(true);
  };
  

  const handleAddVoice = () => {
    // Implement your add voice functionality here
  };

  return (

    <div className="bg-white shadow-xl rounded-xl p-8 w-3/4 sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-3/5 mx-auto border border-gray-300">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Speech Lab</h2>
      <h3 className="text-xl font-semibold mb-2 text-black">Speech Settings</h3>
      <form>
        <div className="flex items-center mb-4">
          <div className="w-1/2">
            <select
              id="voice"
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="block w-full p-2 border border-blue-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mr-4"
            >
              {voices.map((voice) => (
                <option key={voice.id} value={voice.id}>
                  {voice.name}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleAddVoice}
            className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 ml-3 rounded-md transition duration-200 flex items-center"
          >
            <span className="mr-2">+</span>
            Add Voice
          </button>
        </div>

        <div className="w-1/2">
          <select
            id="language"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="block w-full p-2 border border-blue-300 rounded-md mb-6 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </form>
      <h3 className="text-xl font-semibold mb-2 text-black">Text</h3>
      <textarea
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
        className="block w-full p-2 border border-blue-300 rounded-md mb-6 resize-none h-48 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
      >
        Generate
      </button>

      {/* <button onClick={handleGenerateClick}>Generate</button> */}

      {showAudioPopup && (
        <div className=" bottom-0 w-full bg-gray-100 p-2 mt-5">
          <AudioPlay
            audioSrc={audioSrc}
            title={selectedVoice}
            language={selectedLanguage}
            onClose={() => setShowAudioPopup(false)}
          />
        </div>
      )}
    </div>
  );
};

export default SpeechLabCard;
