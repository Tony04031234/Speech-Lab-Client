import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
    
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center">
        <Routes />
      </div>

    </BrowserRouter>
  );
};

export default App;