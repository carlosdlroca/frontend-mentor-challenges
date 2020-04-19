import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./themes";

export default () => {
    const [theme, setTheme] = useState("light");
    const [componentMounted, setComponentMounted] = useState(false);

    const setMode = (mode) => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    };

    const toggleTheme = () => {
        if (theme == "light") {
            setMode("dark");
        } else {
            setMode("light");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        if (localTheme) {
            setTheme(localTheme);
        } else {
            setMode("light");
        }
        setComponentMounted(true);
    }, []);

    const themeMode = theme == "light" ? lightTheme : darkTheme;

    return [themeMode, toggleTheme, componentMounted];
};
