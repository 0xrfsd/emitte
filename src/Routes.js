import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import NotFound from './screens/NotFound';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;