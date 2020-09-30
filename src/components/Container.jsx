import React from 'react';
import Controls from './Controls';
import Keyboard from './Keyboard';


export default function Container() {
    return (
        <div id="drum-machine" className="w-full md:w-164 flex flex-col md:flex-row bg-blue-300 border border-blue-700 rounded-lg">
            <Keyboard />            
            <Controls />
        </div>
    )
}
