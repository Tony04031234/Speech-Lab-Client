import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SpeechLabContainer from './components/SpeechLabContainer';
import CloneVoice from './components/CloneVoice';

function App() {

  return (
    <Router>
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center">

      <Routes>
        <Route path="/" element={<SpeechLabContainer />} />
        <Route path="/clone-voice" element={<CloneVoice />} />
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;

