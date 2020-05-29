import React from "react";
import { createContext } from "react";

export const DarkModeContext = createContext({});

export default ({ children, toggleTheme }) => {
    return (
        <DarkModeContext.Provider value={toggleTheme}>
            {children}
        </DarkModeContext.Provider>
    );
};
