import React, { useContext } from 'react';
import Button from './Button';
import { ControlContex } from './Container';

export default function Keyboard() {
    const { checkboxPower, BANK } = useContext(ControlContex);
    const BTN_DISABLED = checkboxPower ? false : true;
    const KEY_PAD = BANK.map(item => <Button innerText={item.keyTrigger} urlSound={item.url} key={item.keyTrigger} disabled={BTN_DISABLED} />)
    return (
        <div id="display" className="w-64 sm:w-100 p-5 flex flex-row flex-wrap items-center justify-center sm:mx-auto sm:mt-auto">
            {KEY_PAD}
        </div>
    )
}
