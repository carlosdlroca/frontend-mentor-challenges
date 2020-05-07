import React from "react";
import { Nav } from "./Styles";
import { ReactComponent as GithubIcon } from "./github.svg";
const baseGHURL =
    "https://github.com/carlosdlroca/frontend-mentor-challenges/tree/master/src/Challenges";

export default ({ difficulty, challenge }) => (
    <Nav>
        <a href={`${baseGHURL}/${difficulty}/${challenge}`}>
            <GithubIcon />
        </a>
    </Nav>
);
