import React, {useContext, useState} from "react";

const ThemeContext = React.createContext();

export const useTheme= () => {
    return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(false);

    function ChangeTheme() {
        setTheme(!theme)
    }

    return (
        <ThemeContext.Provider
            value={{ ChangeTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;