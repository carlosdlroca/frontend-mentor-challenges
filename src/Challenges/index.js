import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

import ChallengeRoute from "./ChallengeRoute";
import ChallengesList from "./ChallengesList";
import Navbar from "../components/Navbar";
import challenges from "./data_challenges";

export default ({ toggleTheme }) => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <Navbar toggleTheme={toggleTheme} />
                <ChallengesList challenges={challenges} />
            </Route>
            <Route path={`${path}/:difficulty/:challenge_name`}>
                <ChallengeRoute challenges={challenges} />
            </Route>
            <Route path={`${path}/:difficulty`}>
                <Redirect to={`${path}/`} />
            </Route>
        </Switch>
    );
};
