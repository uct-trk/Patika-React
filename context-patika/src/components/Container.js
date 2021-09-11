import React, { useContext } from 'react'
import Header from './Header'
import Button from './Button'
import ThemeContext from '../context/ThemeContext'
import '../App.css'
import Profile from './Profile'
const Container = () => {

    const { theme } = useContext(ThemeContext)
    console.log(theme)

    return (
        <div className={`app ${theme === 'dark' ? theme : 'light'}`}>
            <Header />
            <hr />
            <Button />
            <Profile/>
        </div>
    )
}

export default Container
