import React from 'react';
import './style.css';

const ColorSlider = ({ baseColor, colorName, onValueChange }) => {

    const handleChange = (e) => {
        const value = e.target.value;
        onValueChange(value);
    }

    return (
        <>
            <label htmlFor={colorName}>{colorName === 'red' && 'Cervena'} {colorName === 'blue' && 'Modra'} {colorName === 'green' && 'Zelena'}</label>
            <input onChange={handleChange}
                type='range'
                className={`slider slider--${colorName}`}
                id={`${colorName}Slider`}
                min='0'
                max='255'
                value={baseColor}
            />
        </>
    )
}

export default ColorSlider;