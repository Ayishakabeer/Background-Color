import React, { useState } from 'react';
import './BackgroundChanger.css';  // Import CSS file for styling

const BackgroundChanger = () => {
  // Declare state variable to hold the background color
  const [bgColor, setBgColor] = useState('white');

  // Function to change the background color
  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <h1>Background Color Changer</h1>
      <p>Click a button to change the background color:</p>
      <div className="buttons">
        <button onClick={() => changeColor('lightblue')}>Light Blue</button>
        <button onClick={() => changeColor('lightgreen')}>Light Green</button>
        <button onClick={() => changeColor('lightcoral')}>Light Coral</button>
        <button onClick={() => changeColor('lightyellow')}>Light Yellow</button>
        <button onClick={() => changeColor('white')}>Reset</button>
      </div>
    </div>
  );
};

export default BackgroundChanger;
