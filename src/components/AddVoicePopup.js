import React, { useEffect, useRef, useState } from "react";

const AddVoicePopup = ({ onClose }) => {

    const languageOptions = [
        { code: "en", name: "English" },
        { code: "vi", name: "Vietnamese" },
        { code: "es", name: "Spanish" },
        { code: "zh", name: "Chinese" },
        { code: "fr", name: "French" },
    ];

    //   const voiceTypeOptions = [
    //     { value: "natural", label: "Natural" },
    //     { value: "cartoonish", label: "Cartoonish" },
    //     { value: "robotic", label: "Robotic" },
    //   ];

    //   const genderOptions = [
    //     { value: "male", label: "Male" },
    //     { value: "female", label: "Female" },
    //   ];

    const [voiceName, setVoiceName] = useState("");
    const [languageCode, setLanguageCode] = useState(languageOptions[0].code);
    const [gender, setGender] = useState("male");
    const [voiceType, setVoiceType] = useState("natural");
    const [pitch, setPitch] = useState(1.0);
    const [speed, setSpeed] = useState(1.0);
    const [volume, setVolume] = useState(1.0);
    const [authCredentials, setAuthCredentials] = useState("");

    const popupRef = useRef(null);

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [popupRef]);

    const handleVoiceNameChange = (event) => {
        setVoiceName(event.target.value);
    };

    const handleLanguageCodeChange = (event) => {
        setLanguageCode(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleVoiceTypeChange = (event) => {
        setVoiceType(event.target.value);
    };

    const handlePitchChange = (event) => {
        setPitch(event.target.value);
    };

    const handleSpeedChange = (event) => {
        setSpeed(event.target.value);
    };

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    const handleAuthCredentialsChange = (event) => {
        setAuthCredentials(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            voiceName,
            languageCode,
            gender,
            voiceType,
            pitch,
            speed,
            volume,
            authCredentials,
        };
        console.log("Data to be sent:", data);
        onClose();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div ref={popupRef} className="bg-white rounded-md shadow-lg p-6 max-w-md w-7/12">
                <h2 className="text-lg font-bold mb-4">Add Voice</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium mb-2">
                            Name of the voice
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={voiceName}
                            onChange={handleVoiceNameChange}
                            className="border border-gray-300 p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="language" className="block font-medium mb-2">
                            Language code
                        </label>
                        <select
                            id="language-code"
                            name="language-code"
                            value={languageCode}
                            onChange={handleLanguageCodeChange}
                            className="border border-gray-300 p-2 w-full"
                        >
                            {languageOptions.map(({ code, name }) => (
                                <option key={code} value={code}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender" className="block font-medium mb-2">
                            Gender
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={handleGenderChange}
                            className="border border-gray-300 p-2 w-full"
                        >
                            <option value="">-- Select Gender --</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="voiceType" className="block font-medium mb-2">
                            Voice type
                        </label>
                        <select
                            id="voiceType"
                            name="voiceType"
                            value={voiceType}
                            onChange={handleVoiceTypeChange}
                            className="border border-gray-300 p-2 w-full"
                        >
                            <option value="">-- Select Voice Type --</option>
                            <option value="natural">Natural-sounding voice</option>
                            <option value="cartoonish">Cartoonish voice</option>
                            <option value="robotic">Robotic voice</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pitch" className="block font-medium mb-2">
                            Pitch
                        </label>
                        <input
                            type="range"
                            id="pitch"
                            name="pitch"
                            min="0.5"
                            max="2.0"
                            step="0.1"
                            value={pitch}
                            onChange={handlePitchChange}
                            className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">
                            {pitch} (0.5 to 2.0) - 1.0 is the default, the higher the number the higher the pitch
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="speed" className="block font-medium mb-2">
                            Speed
                        </label>
                        <input
                            type="range"
                            id="speed"
                            name="speed"
                            min="0.5"
                            max="2.0"
                            step="0.01"
                            value={speed}
                            onChange={handleSpeedChange}
                            className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">
                            {speed} (0.5 to 2.0) 1.0 being the default value (normal speed). A value below 1.0 would make the voice speak slower, while a value above 1.0 would make it speak faster.
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="volume" className="block font-medium mb-2">
                            Volume
                        </label>
                        <input
                            type="range"
                            id="volume"
                            name="volume"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-full"
                        />
                        <p className="text-sm mt-1">Volume: {Math.round(volume * 100)}%</p>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVoicePopup;


