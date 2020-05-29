import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarLinks, NavbarLink } from "./Styles";
import { DarkModeContext } from "../../App/Styles/DarkModeContext";
import { ReactComponent as GithubLogo } from "../../Challenges/shared/icons/github.svg";

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
                <NavbarLink>
                    <a href='https://github.com/carlosdlroca/frontend-mentor-challenges'>
                        <GithubLogo />
                    </a>
                </NavbarLink>
            </NavbarLinks>
        </Navbar>
    );
};
