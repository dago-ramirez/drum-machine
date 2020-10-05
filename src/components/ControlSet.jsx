import React from 'react';
import Checkbox from './Checkbox';
import InputRange from './InputRange';
import InputText from './InputText';

export default function ControlSet() {
    return (
        <div className="w-full md:w-64 flex flex-col items-center justify-between py-3 md:py-10">
            <Checkbox idLabel={'checkbox-power'} idCheckbox={'power'} />
            <InputText />            
            <InputRange />
            <Checkbox idLabel={'checkbox-bank'} idCheckbox={'bank'} />          
        </div>
    )
}
