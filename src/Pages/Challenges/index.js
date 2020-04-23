import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

import ChallengesList from "./ChallengesList";
import Navbar from "../../components/Navbar";

import challenges from "./data_challenges";

export default ({ toggleTheme }) => {
    const { path } = useRouteMatch();
    const difficulties = Object.keys(challenges);
    const challengesRoutes = difficulties
        .map((difficulty) =>
            challenges[difficulty].map((challenge, i) => (
                <RouteWithSubRoutes
                    key={challenge.name}
                    path={challenge.path}
                    component={challenge.component}
                />
            ))
        )
        .flat();

    return (
        <Switch>
            {challengesRoutes}
            <Route exact path={path}>
                <Navbar toggleTheme={toggleTheme} />
                <ChallengesList challenges={challenges} />
            </Route>
            <Route path={`${path}/:difficulty`}>
                <Redirect to={`${path}/`} />
            </Route>
        </Switch>
    );
};

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={(props) => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}
