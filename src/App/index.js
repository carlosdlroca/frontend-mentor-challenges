import React, { useState } from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import BaseStyles from "./Styles/BaseStyles";
import ResetStyles from "./Styles/Reset";
import useDarkMode from "./Styles/useDarkMode";

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
                <Router toggleTheme={toggleTheme} />
            </React.Fragment>
        </ThemeProvider>
    );
};
