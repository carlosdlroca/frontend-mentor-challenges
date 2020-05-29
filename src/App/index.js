import React from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import BaseStyles from "./Styles/BaseStyles";
import ResetStyles from "./Styles/Reset";
import useDarkMode from "./Styles/useDarkMode";
import DarkModeProvider from "./Styles/DarkModeContext";

export default () => {
    const [themeMode, toggleTheme, componentMounted] = useDarkMode();

    if (!componentMounted) {
        return <div />;
    }

    return (
        <ThemeProvider theme={themeMode}>
            <React.Fragment>
                <BaseStyles />
                <ResetStyles />
                <DarkModeProvider toggleTheme={toggleTheme}>
                    <Router />
                </DarkModeProvider>
            </React.Fragment>
        </ThemeProvider>
    );
};
