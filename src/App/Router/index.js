import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../../Pages/Home";
import Challenges from "../../Challenges";
import NoMatch from "../../Pages/NoMatch";

export default ({ toggleTheme }) => (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Home toggleTheme={toggleTheme} />
            </Route>
            <Route path='/challenges'>
                <Challenges toggleTheme={toggleTheme} />
            </Route>
            <Route path='*'>
                <NoMatch toggleTheme={toggleTheme} />
            </Route>
        </Switch>
    </Router>
);
