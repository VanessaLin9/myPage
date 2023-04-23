import { useState } from 'react';
import Bar from './components/Bar';
import Homepage from './components/HomePage';
import Game from './components/Game';
import Snake from './components/Snake';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import './css/App.css';


function App() {
  return (
    <HashRouter>
    <div className="App">
      <Bar/>
      <div className="mainpart">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/snake" element={<Snake/>}/>
        <Route path='*' element={<Navigate to='/' replace />}/>
      </Routes>
      </div>
    </div>
  </HashRouter>
  )
}

export default App
