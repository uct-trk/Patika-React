import React, { useState } from "react";

export const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState({

        isDarkTheme: true,
        dark: { bg: '#222529', txt: '#D65F5f', hover: 'rgba(231, 76, 60, 0.8' },
        light: { bg: '#F8F9FA', txt: '#222529', hover: 'rgba(254, 209, 54, 0.8' }

    })

    const changeTheme = () => {
        setTheme({...theme,isDarkTheme: !theme.isDarkTheme})
    }
    return (
        <ThemeContext.Provider value={{ ...theme, changeTheme }}>{props.children}</ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
