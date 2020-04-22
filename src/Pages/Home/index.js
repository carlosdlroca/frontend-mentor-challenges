import React from "react";
import { HomeWrapper } from "./Styles";
import Navbar from "../../components/Navbar";

export default ({ toggleTheme }) => (
    <HomeWrapper>
        <Navbar toggleTheme={toggleTheme} />
        <h1>Frontend Mentor Challenges</h1>
        <p>
            Frontend Mentor is a website focused on providing challenges to test
            your webdesign skills{" "}
        </p>
        <br />
        <p>
            Ranging from newbie to advanced, these challenges can help you
            become a better web designer{" "}
        </p>

        <p>
            I mainly created this site to showcase my work as i progress through
            each challenge and hone my design skills
        </p>
        <h2>Frameworks</h2>
        <p>
            The framework and tools I used for these challenges are React for UI
            components, styled-components for styling
        </p>
    </HomeWrapper>
);
