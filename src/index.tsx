import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Text from './components/Text';
import Momojis from './components/Momojis';
import Window from './components/Tilt';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
      <Window>
        <Momojis />
      </Window>
      <Text />
      <Footer />
  </React.StrictMode>
);
