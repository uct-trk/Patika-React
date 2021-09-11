import React from 'react'
import {useTheme} from '../context/ThemeContext'
const Button = () => {

    const {theme, setTheme} = useTheme()

    console.log(theme)

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div>
            <h1>Aktif tema: {theme}</h1>
        <button onClick={changeTheme}>Değiştir {theme}</button>
        </div>
    )
}

export default Button
