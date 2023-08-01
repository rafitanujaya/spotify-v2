import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GoogleFontLoader from 'react-google-font-loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleFontLoader fonts={[{ font: 'Poppins', weights: [400, 700] }]} />
    <App />
  </React.StrictMode>,
)
