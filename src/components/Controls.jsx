import React from 'react';
import Checkbox from './Checkbox';

export default function Controls() {
    
    return (
        <div className="w-full md:w-64 flex flex-col items-center justify-between py-10">
            <Checkbox idLabel={'checkboxPower'} idCheckbox={'power'} />
            <input type="text" className="bg-blue-400 h-12 border border-blue-700 rounded my-2" />            
            <Checkbox idLabel={'checkboxBank'} idCheckbox={'bank'} />          
        </div>
    )
}
