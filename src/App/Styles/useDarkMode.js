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
        // eslint-disable-next-line
        if (theme == "light") {
            setMode("dark");
        } else {
            setMode("light");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");

        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localTheme
            ? setMode("dark")
            : localTheme
            ? setTheme(localTheme)
            : setMode("light");

        setComponentMounted(true);
    }, []);
    // eslint-disable-next-line
    const themeMode = theme == "light" ? lightTheme : darkTheme;

    return [themeMode, toggleTheme, componentMounted];
};
