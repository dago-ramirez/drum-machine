import React from 'react';
import Checkbox from './Checkbox';

export default function Controls() {
    
    return (
        <div className="w-full md:w-64 flex flex-col items-center justify-between py-10">
            <Checkbox idLabel={'checkboxPower'} idCheckbox={'power'} />
            <input type="text" className="bg-blue-400 w-40 h-12 border border-blue-700 rounded my-2 text-blue-900 font-bold text-xl text-center" />            
            <input type="range" name="" id="" min="0" max="100" list="tickmarks" className="w-40" />
            <datalist id="tickmarks">
                <option value="0"  label="0%" />
                <option value="10" />
                <option value="20" />
                <option value="30" />
                <option value="40" />
                <option value="50" />
                <option value="60" />
                <option value="70" />
                <option value="80" />
                <option value="90" />
                <option value="100"  label="100%" />
            </datalist>
            <Checkbox idLabel={'checkboxBank'} idCheckbox={'bank'} />          
        </div>
    )
}
