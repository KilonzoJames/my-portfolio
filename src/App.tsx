import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/home';
import NotFound from './components/notfound';
import './project.css'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
  );
}

export default App;
