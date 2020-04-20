import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import ChallengesList from "./ChallengesList";
import Navbar from "../../components/Navbar";

export default ({ toggleTheme }) => {
    const { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <Navbar toggleTheme={toggleTheme} />
                <Link to={`${url}/beginner`}>Beginner Challenges</Link>
                <Link to={`${url}/intermediate`}>Intermediate Challenges</Link>
                <Link to={`${url}/advanced`}>Advanced Challenges</Link>
            </Route>
            <Route path={`${path}/:difficulty`} component={ChallengesList} />
        </Switch>
    );
};
