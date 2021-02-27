import './App.css';
import BoxGenerator from './components/BoxGenerator';
import DisplayBoxes from './components/DisplayBoxes';
import React, { useState } from 'react';

function App() {
  const [box, setBox] = useState({
    colors: [],
  });

  return (
    <div className="App">
      <div className="container">
        <h1 className="display-4 my-3">Color</h1>
        <BoxGenerator setBox={setBox} box={box} />
        <div className="row">
          {box.colors.map((color) => (
            <DisplayBoxes color={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
