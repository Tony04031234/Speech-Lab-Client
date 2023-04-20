import React, { useState, useEffect } from "react";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AudioPlay = ({ audioSrc, title, language, onClose }) => {
    const [audio, setAudio] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);


    useEffect(() => {
        setAudio(new Audio(audioSrc));
    }, [audioSrc]);

    useEffect(() => {
        if (audio) {
            audio.addEventListener("timeupdate", updateProgress);
            audio.addEventListener("loadedmetadata", () => {
                setDuration(audio.duration);
            });
        }

        return () => {
            if (audio) {
                audio.removeEventListener("timeupdate", updateProgress);
                audio.removeEventListener("loadedmetadata", () => {
                    setDuration(audio.duration);
                });
            }
        };
    }, [audio]);

    const playAudio = () => {
        if (playing) {
            audio.pause();
        } else {
            audio.play();
        }
        setPlaying(!playing);
    };

    const rewind10Seconds = () => {
        audio.currentTime = Math.max(audio.currentTime - 10, 0);
    };

    const forward10Seconds = () => {
        audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
    }

    const updateProgress = () => {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleProgressBarChange = (event) => {
        const newProgress = event.target.value;
        setProgress(newProgress);
        audio.currentTime = (newProgress / 100) * audio.duration;
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const handleClose = () => {
        audio.pause();
        audio.currentTime = 0;
        setPlaying(false);
        setProgress(0);
        setCurrentTime(0);
        onClose();
      };

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
          <div className="text-lg font-semibold">
            Audio from {title} in {language}
          </div>
          <div className="mt-4 flex flex-wrap md:flex-nowrap items-center justify-between">
            <button
              onClick={playAudio}
              className="px-3 py-2 bg-blue-500 text-white font-semibold rounded-md text-sm mb-1"
            >
              {playing ? "Pause" : "Play"}
            </button>
            <button
              onClick={rewind10Seconds}
              className="text-gray-500  md:mb-0 mr-2 ml-2"
            >
               <FontAwesomeIcon icon={faBackward} className="mr-2" /> 
            </button>
            <button
              onClick={forward10Seconds}
              className="text-gray-500 md:mb-0 "
            >
               <FontAwesomeIcon icon={faForward} className="mr-2" /> 
            </button>
            <div className="text-sm text-gray-600 mb-2 md:mb-0">
              {formatTime(currentTime)}
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressBarChange}
              className="w-full mx-4 cursor-pointer bg-blue-500 h-2 rounded"
            />
            <div className="text-sm text-gray-600 mr-3">
              {formatTime(duration)}
            </div>
            <button
              className="px-3 py-2 bg-red-500 text-white font-semibold rounded-md mt-1 text-sm"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
    );
};
    

export default AudioPlay;
