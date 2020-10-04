import React from 'react';
import Checkbox from './Checkbox';
import InputRange from './InputRange';
import InputText from './InputText';

export default function ControlSet() {
    return (
        <div className="w-full md:w-64 flex flex-col items-center justify-between py-10">
            <Checkbox idLabel={'checkboxPower'} idCheckbox={'power'} />
            <InputText />            
            <InputRange />
            <Checkbox idLabel={'checkboxBank'} idCheckbox={'bank'} />          
        </div>
    )
}
