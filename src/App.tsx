import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/home';
import NotFound from './components/notfound';
import './styles/App.css';
import './styles/project.css'
import './styles/header.css'
import './styles/social.css'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
  );
}

export default App;
