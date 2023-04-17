import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import SpeechLabContainer from './components/SpeechLabContainer';

function App() {

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center">
      <SpeechLabContainer
      />
    </div>
  );
}

export default App;
