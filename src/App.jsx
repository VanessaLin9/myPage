import { useState } from 'react'
import Bar from './components/Bar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import './css/App.css'

function App() {
  return (
    <div className="App">
      <Bar/>
      <div className="mainpart">
        <div className="mainpart-inner">
          <Home/>
          <Portfolio/>
        </div>
      </div>
    </div>
  )
}

export default App
