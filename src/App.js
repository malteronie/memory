import React from 'react';
import Game from './Game.jsx';
import './card.css';
import './App.css'


function App() {
  return (
    <header className="App-header">
    <div className="App">
      <h1>Memory</h1>
      <Game/>
    </div>
    </header>
  );
}

export default App;