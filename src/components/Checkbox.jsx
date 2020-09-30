import React from 'react';
import '../styles/components.css';

export default function Checkbox({ idLabel, idCheckbox }) {

    const handleOnClick = (e) => {
        const btn = document.getElementById(e.target.id);

        if (document.getElementById(idCheckbox).checked) {
            btn.style.setProperty('--bg-btn', ' #dfdbdb');
            btn.style.setProperty('--btn-color', '#5c5959');
        } else {
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