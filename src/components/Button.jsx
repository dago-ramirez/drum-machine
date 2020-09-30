import React from 'react';

export default function Button({innerText}) {
    return (
        <button className="drum-pad m-2 bg-gray-200 text-2xl text-blue-700 font-bold hover:bg-blue-400 active:bg-blue-700 hover:text-white border border-blue-400 w-24 h-24 rounded-lg shadow-md">
            {innerText}
        </button>
    )
}
