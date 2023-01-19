import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import GameContextProvider from './Context/GameStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <GameContextProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </GameContextProvider>
  
);


