import React, { useContext, useState } from 'react';
import { ControlContex } from './Container';

export default function InputRange() {
    // Se inicializa el input range por defecto en 0.3
    const [vol, setVol] = useState('0.3');
    const { setDisplay, setVolume } = useContext( ControlContex );
    const handleOnchange = (e) => {
        const num = Math.round(parseFloat(e.target.value) * 100);
        // Se controla el valor del input range
        setVol(e.target.value);
        // Se muestra el volumen en el display
        setDisplay('Volume: ' + num);
        // Se configura el volumen
        setVolume(num / 100);
    }

    return (
        <>
            <input type="range" name="" id="input-range" min="0" max="1" step='0.01' value={vol} onChange={handleOnchange} className="w-48 my-2 input-class" disabled />
        </>
    )
}
