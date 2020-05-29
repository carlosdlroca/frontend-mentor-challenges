import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default () => (
    <React.Fragment>
        <Navbar />
        <h1>Sorry, that page doesnt exist</h1>
        <ul style={{ display: "flex", flexDirection: "column" }}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/challenges'>Challenges</Link>
            </li>
        </ul>
    </React.Fragment>
);
