import React, { useContext } from 'react';
import { ControlContex } from './Container';

export default function InputText() {
    const { display } = useContext( ControlContex );

    return (
        <input value={display} id="input-text" type="text" disabled className="bg-blue-400 w-48 h-12 border border-blue-700 rounded my-2 text-blue-900 font-bold text-xl text-center input-class" />
    )
}
