import React from 'react'
import {useTheme} from '../context/ThemeContext'

const Header = () => {

    const {theme} = useTheme()
    return (
        <div>
            Aktif Tema {theme}
        </div>
    )
}

export default Header
