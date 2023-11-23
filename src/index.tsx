import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'; 
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);

