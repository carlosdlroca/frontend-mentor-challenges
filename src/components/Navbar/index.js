import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarLinks, NavbarLink } from "./Styles";

import { DarkModeContext } from "../../App/Styles/DarkModeContext";

export default () => {
    const toggleTheme = useContext(DarkModeContext);

    return (
        <Navbar>
            <NavbarLinks>
                <NavbarLink>
                    <button onClick={toggleTheme}>ToggleTheme</button>
                </NavbarLink>
                <NavbarLink>
                    <Link to='/'>Home</Link>
                </NavbarLink>
                <NavbarLink>
                    <Link to='/challenges'>Challenges</Link>
                </NavbarLink>
            </NavbarLinks>
        </Navbar>
    );
};
