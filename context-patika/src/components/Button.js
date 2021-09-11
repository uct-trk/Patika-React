import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
const Button = () => {

    const {theme, setTheme} = useContext(ThemeContext)

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
