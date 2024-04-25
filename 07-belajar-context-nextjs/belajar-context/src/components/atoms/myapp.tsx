import { ThemeContext } from "@/utilities/contexts/mycontext";
import { themes } from "@/utilities/themes/mythemes";
import { useState, useEffect } from "react";
import Navbar from "./navbar";

export default function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? JSON.parse(storedTheme) : themes.light;
    });

    const toggleTheme = () => {
        const newTheme = theme === themes.dark ? themes.light : themes.dark;
        setTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme && JSON.parse(storedTheme) !== theme) {
            setTheme(JSON.parse(storedTheme));
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                style={{
                    width: '100%',
                    minHeight: '100vh',
                    ...theme,
                }}>
                <Navbar />
                <Component {...pageProps} />
            </div>
        </ThemeContext.Provider>
    )
}