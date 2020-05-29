import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../../Pages/Home";
import Challenges from "../../Challenges";
import NoMatch from "../../Pages/NoMatch";

export default () => (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/challenges'>
                <Challenges />
            </Route>
            <Route path='*'>
                <NoMatch />
            </Route>
        </Switch>
    </Router>
);
