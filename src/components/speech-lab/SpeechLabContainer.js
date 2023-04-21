import React from "react";
import AudioPlay from "./AudioPlay";
import SpeechLabCard from "./SpeechLabCard";

const SpeechLabContainer = ({
  audioSrc,
  setShowAudioPopup,
  showAudioPopup,
  title,
  language,
}) => {
  return (
    <div className="">
      <div className="col-span-1">
        <SpeechLabCard />
      </div>
      {showAudioPopup && (
        <div className="col-span-1">
          <AudioPlay
            audioSrc={audioSrc}
            title={title}
            language={language}
            onClose={() => setShowAudioPopup(false)}
          />
        </div>
      )}
    </div>
  );
};

export default SpeechLabContainer;
