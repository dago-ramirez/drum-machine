import React from 'react';

export default function InputRange() {
    return (
        <>
            <input type="range" name="" id="input-range" min="0" max="100" list="tickmarks" className="w-40 my-2 input-class" disabled />
            <datalist id="tickmarks">
                <option value="0" />
                <option value="10" />
                <option value="20" />
                <option value="30" />
                <option value="40" />
                <option value="50" />
                <option value="60" />
                <option value="70" />
                <option value="80" />
                <option value="90" />
                <option value="100" />
            </datalist>
        </>
    )
}
