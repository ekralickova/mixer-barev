import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import ColorSlider from './components/ColorSlider';
import './style.css';

const App = () => {

  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);


  return (
    <>
      <div className='color-panel'>
        <h1>Mixér barev</h1>
        <div className='sliders'>
          <ColorSlider colorName={'red'} baseColor={redValue} onValueChange={setRedValue} />
          <ColorSlider colorName={'green'} baseColor={greenValue} onValueChange={setGreenValue} />
          <ColorSlider colorName={'blue'} baseColor={blueValue} onValueChange={setBlueValue} />

        </div>
        <div className='color-box' id='color-box' style={{ backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})` }}></div>
      </div>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
