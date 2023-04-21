import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import AudioPlay from "./Audio";
import AddVoicePopup from "./Popup";
import { BsThreeDotsVertical } from "react-icons/bs";
import { DummyAudioCall } from "../../api";

const SpeechLabCard = () => {
  // Initialize languages and voices
  const languages = [
    { code: "en", name: "English" },
    { code: "vi", name: "Vietnamese" },
    { code: "es", name: "Spanish" },
    { code: "zh", name: "Chinese" },
    { code: "fr", name: "French" },
  ];

  const voices = [
    { id: "premade-adam", name: "Premade/Adam" },
    { id: "premade-john", name: "Premade/John" },
    { id: "my-voice", name: "My Voice" },
  ];

  // State management
  const [showAddVoicePopup, setShowAddVoicePopup] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);
  const [selectedVoice, setSelectedVoice] = useState(voices[0].id);
  const [userText, setUserText] = useState("");
  const [showAudioPopup, setShowAudioPopup] = useState(false);
  const [audioSrc, setAudioSrc] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Refs
  const dropdownRef = useRef(null);

  // Event handlers
  const handleClickOutsideDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideDropdown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, [dropdownRef]);

  const handleAddVoiceClick = (event) => {
    event.preventDefault();
    setShowAddVoicePopup(true);
  };

  const handleAddVoicePopupClose = () => {
    setShowAddVoicePopup(false);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCloneVoiceClick = () => {
    // Implement your clone voice functionality here
  };


  const handleGenerate = async () => {
    // Call the DummyAudio function from api/index.js
    const generatedAudioSrc = await DummyAudioCall();
    setAudioSrc(generatedAudioSrc);
    setShowAudioPopup(true);
  };

  return (
    <div ref={dropdownRef} className="bg-white shadow-xl rounded-xl p-8 w-3/4 sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-3/5 mx-auto border border-gray-300 relative">
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
      <div ref={dropdownRef} className="absolute top-4 right-4">
        <button
          onClick={handleDropdownToggle}
          className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          <BsThreeDotsVertical size={20} />
        </button>
        {showDropdown && (
          <div className="bg-white shadow-md mt-2 py-2 w-48 rounded-md absolute right-0">
            <button
              onClick={handleAddVoiceClick}
              className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
            >
              Add Default Voice
            </button>
            <Link to="/voice">
              <button
                onClick={handleCloneVoiceClick}
                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
              >
                Clone Voice
              </button>
            </Link>
          </div>
        )}
      </div>
      {showAudioPopup && (
        <div className="bottom-0 w-full mt-5">
          <AudioPlay
            audioSrc={audioSrc}
            title={selectedVoice}
            language={selectedLanguage}
            onClose={() => setShowAudioPopup(false)}
          />
        </div>
      )}

      {showAddVoicePopup && (
        <AddVoicePopup onClose={handleAddVoicePopupClose} />
      )}
    </div>
  );
}

export default SpeechLabCard;
