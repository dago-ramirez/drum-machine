import React from 'react';
import Button from './Button';

export default function Keyboard({bankOne, bankTwo}) {
    const KEY_PAD = bankOne.map(item => <Button innerText={item.keyTrigger} urlSound={item.url} key={item.keyTrigger} />)

    return (
        <div id="display" className="w-100 p-5 flex flex-row flex-wrap items-center justify-center mx-auto mt-10 md:mt-auto">
            {KEY_PAD}
        </div>
    )
}
