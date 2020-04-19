import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default () => (
    <Router>
        <Switch>
            <Route exact path='/'>
                <h1>Home Page</h1>
                <Link to='/second'>Second</Link>
            </Route>
            <Route path='/second'>
                <h1>Second page</h1>
                <Link to='/'>Home Page</Link>
            </Route>
        </Switch>
    </Router>
);
