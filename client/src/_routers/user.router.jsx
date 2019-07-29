import React from 'react'
import {Route, Switch} from "react-router-dom";
import {RegisterPage} from "../RegisterPage";
import {LoginPage} from "../LoginPage";
import {BodyPage} from "../BodyPage";
import { CampaignPage } from '../_components/CompanyPage/CompanyPage'
import PrivateRoute from "./PrivateRoute";
import { CreateCampaignPage } from  '../_components/CreateCompanyPage/CreateCampaignPage'

const UserRouter = () => {
    return (
        <Switch>
            {/*<PrivateRoute exact path="/campaigns/create" component={CreateCampaignPage} />*/}
            <Route  path="/create" component={CreateCampaignPage} />
            <Route exact path="/" component={BodyPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />


        </Switch>
    );
};

export default UserRouter;