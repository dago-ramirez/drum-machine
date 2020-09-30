import React from 'react'
import Button from './Button'

export default function Keyboard() {
    return (
        <div id="display" className="w-full md:w-100 p-5 flex flex-col items-center justify-center">
            <div className="flex flex-row justify-between">
                <Button innerText={'Q'} />
                <Button innerText={'W'} />
                <Button innerText={'E'} />
            </div>
            <div className="flex flex-row justify-between">
                <Button innerText={'A'} />
                <Button innerText={'S'} />
                <Button innerText={'D'} />
            </div>
            <div className="flex flex-row justify-between">
                <Button innerText={'Z'} />
                <Button innerText={'X'} />
                <Button innerText={'C'} />
            </div>
        </div>
    )
}
