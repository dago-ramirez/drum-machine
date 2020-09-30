import React from 'react';
import '../styles/components.css';

export default function Checkbox({ idLabel, idCheckbox }) {

    const handleOnClick = (e) => {
        const btn = document.getElementById(e.target.id);
        console.log(btn, e.target.id)

        if (document.getElementById(idCheckbox).checked) {
            console.log('true', document.getElementById(idCheckbox).checked)
            btn.style.setProperty('--bg-btn', '#fed7d7');
            btn.style.setProperty('--btn-color', '#e53e3e');
        } else {
            console.log('false', document.getElementById(idCheckbox).checked)
            btn.style.setProperty('--bg-btn', '#C6F6D5');
            btn.style.setProperty('--btn-color', '#38A169');
        }
    }

    return (
        <div className="btn-status my-2">
            <input type="checkbox" name="checkbox" id={idCheckbox} className="hidden" />
            <label htmlFor={idCheckbox} id={idLabel} onClick={handleOnClick}
                className="btn-change flex items-center p-1 rounded-lg w-12 h-6 cursor-pointer"
            ></label>
        </div>
    )
}