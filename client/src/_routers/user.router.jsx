import React from 'react'
import {Route, Switch} from "react-router-dom";
import {RegisterPage} from "../RegisterPage";
import {LoginPage} from "../LoginPage";
import {BodyPage} from "../BodyPage";
/*import { CompanyPage } from '../_components/CompanyPage/CompanyPage'*/
import PrivateRoute from "./PrivateRoute";
/*import { CreateCompanyPage } from  '../_components/CreateCompanyPage/CreateCampaignPage*/
import  CreateCampaignPage from  '../_components/CampaignEditorPage'
import  CampaignPage from  '../_components/CampaignPage'
import { PostsContainer } from '../_components/CampaignPage/PostsContainer/component'


import {PostCreateComponent} from '../_components/CampaignPage/PostsContainer/PostCreateComponent/component'
import SignupPage from "../_components/SignupPage/component";
import ProfilePage from "../_components/ProfilePage";
const UserRouter = () => {
    return (
        <Switch>
            {/*<PrivateRoute exact path="/campaigns/create" component={CreateCampaignPage} />*/}

            <Route exact path="/" component={PostsContainer} />



            <Route exact path="/companies/create" component={CreateCampaignPage} />
            <Route exact path="/companies/:id" component={CampaignPage} />
            <Route exact path="/companies/edit/:id" component={CreateCampaignPage} />

            <Route path="/login" component={LoginPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/register" component={SignupPage} />
            <Route component={BodyPage} />


        </Switch>
    );
};

export default UserRouter;