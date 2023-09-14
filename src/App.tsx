import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/home';
import NotFound from './components/notfound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
