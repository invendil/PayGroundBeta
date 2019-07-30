import React from 'react'
import {Route, Switch} from "react-router-dom";
import {RegisterPage} from "../RegisterPage";
import {LoginPage} from "../LoginPage";
import {BodyPage} from "../BodyPage";
import { CompanyPage } from '../_components/CompanyPage/CompanyPage'
import PrivateRoute from "./PrivateRoute";
import { CreateCompanyPage } from  '../_components/CreateCompanyPage/CreateCampaignPage'
import { NewsContainer } from '../_components/NewsContainer/component'
import {CommentComponent} from '../_components/CommentsContainer/CommentComponent/component'
import {NewsCreateComponent} from '../_components/NewsContainer/NewsCreateComponent/component'
const UserRouter = () => {
    return (
        <Switch>
            {/*<PrivateRoute exact path="/campaigns/create" component={CreateCampaignPage} />*/}

            <Route exact path="/" component={NewsContainer} />

            <Route  exact path="/companies" component={NewsCreateComponent} />

            <Route  exact path="/companies/create" component={CreateCompanyPage} />
            <Route  exact path="/companies/:id" component={CompanyPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route component={BodyPage} />


        </Switch>
    );
};

export default UserRouter;