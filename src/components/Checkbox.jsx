import React from 'react';
import '../styles/components.css';

export default function Checkbox({ idLabel, idCheckbox }) {

    const handleOnClick = (e) => {
        const btn = document.getElementById(e.target.id);
        const INPUT_RANGE = document.getElementById('input-range');
        const CHECKBOX_BANK = document.getElementById('bank');

        // Se valida si se activa el checkbox de encendido 
        if( idCheckbox === 'power' ) {
            if( document.getElementById(idCheckbox).checked ) {
                INPUT_RANGE.disabled = true;
                CHECKBOX_BANK.disabled = true;
            } else {
                INPUT_RANGE.disabled = false;
                CHECKBOX_BANK.disabled = false;
            }
        }

        if (document.getElementById(idCheckbox).checked) {
            btn.style.setProperty('--bg-btn', ' #dfdbdb');
            btn.style.setProperty('--btn-color', '#5c5959');
        } else {
            btn.style.setProperty('--bg-btn', '#C6F6D5');
            btn.style.setProperty('--btn-color', '#38A169');
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