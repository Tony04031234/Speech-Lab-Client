import React from "react";
import Audio from '../Audio';
import Card from '../Card'

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
        <Card />
      </div>
      {showAudioPopup && (
        <div className="col-span-1">
          <Audio
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
