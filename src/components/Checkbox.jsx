import React, { useContext } from 'react';
import { ControlContex } from './Container';
import '../styles/components.css';

export default function Checkbox({ idLabel, idCheckbox }) {
    const { checkboxPower, setCheckboxPower, checkboxBank, setCheckboxBank, setDisplay } = useContext(ControlContex);
    const handleOnClick = () => {
        const BTN_POWER = document.getElementById('checkbox-power');
        const BTN_BANK = document.getElementById('checkbox-bank');
        const INPUT_RANGE = document.getElementById('input-range');
        const CHECKBOX_BANK = document.getElementById('bank');
        if( idCheckbox === 'power' ) {
            setCheckboxPower(!checkboxPower);
            if( checkboxPower ) {
                BTN_POWER.style.setProperty('--bg-btn', ' #dfdbdb');
                BTN_POWER.style.setProperty('--btn-color', '#5c5959');
                BTN_BANK.style.setProperty('--bg-btn', ' #dfdbdb');
                BTN_BANK.style.setProperty('--btn-color', '#5c5959');
                INPUT_RANGE.disabled = true;
                CHECKBOX_BANK.disabled = true;
                setDisplay('')
            } else {
                BTN_POWER.style.setProperty('--bg-btn', '#C6F6D5');
                BTN_POWER.style.setProperty('--btn-color', '#38A169');
                BTN_BANK.style.setProperty('--bg-btn', ' #C6F6D5');
                BTN_BANK.style.setProperty('--btn-color', '#38A169');
                INPUT_RANGE.disabled = false;
                CHECKBOX_BANK.disabled = false;
            }
        } else {
            if( !checkboxPower ) {
                setDisplay(checkboxBank ? 'Header Kit' : 'Smooth Piano Kit');
                setCheckboxBank(!checkboxBank);
                BTN_BANK.style.setProperty('--bg-btn', ' #C6F6D5');
                BTN_BANK.style.setProperty('--btn-color', '#38A169');
            }
        }
    }

    return (
        <div className="btn-status my-2" >
            <p className='text-blue-700 font-black capitalize' >{idCheckbox}</p>
            <input type="checkbox" name="checkbox" id={idCheckbox} className="hidden" />
            <label htmlFor={idCheckbox} id={idLabel} onClick={handleOnClick}
                className="btn-change flex items-center p-1 rounded-lg w-12 h-6 cursor-pointer" >
            </label>
        </div>
    )
}