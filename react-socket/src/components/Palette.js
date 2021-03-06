import React, { useState } from 'react'
import { send } from '../socketApi'
const Palette = ({activeColor}) => {
    const [color, setColor] = useState('#000')

    const handleChange = (e) => {
        setColor(e.target.value)
    }
    const handleSend = () => {
        send(color)
    }
    return (
        <div className="palette">
            <input value={activeColor} onChange={handleChange} type="color" />
            <button onClick={handleSend}>Click</button>
            {color}
        </div>
    )
}

export default Palette
