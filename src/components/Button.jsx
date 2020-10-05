import React, { useContext } from 'react';
import { ControlContex } from './Container';

export default function Button({ innerText, urlSound, disabled }) {
    const { setDisplay, volume, BANK } = useContext( ControlContex );
    const playSound = () => {
        const TAG_AUDIO = document.getElementById(urlSound);
        TAG_AUDIO.volume = volume;
        TAG_AUDIO.play();
        BANK.forEach(item => {
            if( item.keyTrigger === innerText ) {
                setDisplay(item.id)
            }
        });
    }

    return (
        <button disabled={disabled} id={innerText} onClick={playSound} className="drum-pad m-2 bg-gray-200 text-2xl text-blue-700 font-bold hover:bg-blue-400 active:bg-green-500 hover:text-white border border-blue-400 w-24 h-24 rounded-lg shadow-md" >
            <audio src={urlSound} id={urlSound} ></audio>
            {innerText}
        </button>
    )
}