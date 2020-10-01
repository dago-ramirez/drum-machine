import React, { useEffect, useState } from 'react';

export default function InputText(props) {
    const [display, setDisplay] = useState('');

    useEffect(() => {
        setDisplay('true')
    }, [])
    return (
        <input value={display} id="input-text" type="text" disabled className="bg-blue-400 w-40 h-12 border border-blue-700 rounded my-2 text-blue-900 font-bold text-xl text-center input-class" />
    )
}
