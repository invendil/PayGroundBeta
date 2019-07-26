import React from 'react'
import {Route, Switch} from "react-router-dom";
import {RegisterPage} from "../RegisterPage";
import {LoginPage} from "../LoginPage";
import {BodyPage} from "../BodyPage";

const UserRouter = () => {
    return (
        <Switch>

            <Route exact path="/" component={BodyPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />


        </Switch>
    );
};

export default UserRouter;