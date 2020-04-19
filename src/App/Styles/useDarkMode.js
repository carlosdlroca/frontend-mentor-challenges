import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./themes";

export default (defaultTheme = "light") => {
    const [theme, setTheme] = useState(defaultTheme);
    const toggleTheme = () => {
        if (theme == "light") {
            window.localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            window.localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
    }, []);

    const themeMode = theme == "light" ? lightTheme : darkTheme;

    return [themeMode, toggleTheme];
};
