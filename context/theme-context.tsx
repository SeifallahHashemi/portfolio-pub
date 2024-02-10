'use client'
import React, {useEffect, useState} from 'react';

type Theme = 'light' | 'dark';
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | null>(null)
const ThemeContextProvider = ({ children } : {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light")
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;
        if (localTheme) {
            setTheme(localTheme);
            localTheme === "dark"? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("dark")
            document.documentElement.classList.add("dark")
        } else {
            setTheme("light")
            document.documentElement.classList.remove("dark")
        }
    }, [])
    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;

export function useTheme() {
    const context = React.useContext(ThemeContext);

    if (context === null) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}