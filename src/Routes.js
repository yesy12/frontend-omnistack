import React from "react";
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";

import Login from "./pages/Login/index";
import Dashboard from "./pages/Dashboard/index";
import New from "./pages/New/index";

const Routes = () =>{
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/new" exact component={New}/>
            </Switch>
        </Router>
    );
}

export default Routes;