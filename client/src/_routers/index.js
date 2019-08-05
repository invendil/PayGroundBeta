import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import CreateCampaignPage from '../_components/CampaignEditorPage';

import PrivateRoute from './PrivateRoute/component';
import GuestRoute from './GuestRoute/component';

import SignupPage from "../_components/SignupPage/component";
import CampaignPage from "../_components/CampaignPage";
import ProfilePage from "../_components/ProfilePage";
import {PostsContainer} from "../_components/CampaignPage/PostsContainer/component";
import {BodyPage} from "../BodyPage";
import {LoginPage} from "../LoginPage"
import HomePage from "../_components/HomePage/component";


const Router = () => {
    return (
        <Switch>


            <Route exact path="/" component={HomePage} />

            <Route exact path="/home" component={HomePage} />

            <PrivateRoute exact path="/companies/create" component={CreateCampaignPage} />
            <Route exact path="/companies/:id" component={CampaignPage} />

            <PrivateRoute exact path="/companies/edit/:id" component={CreateCampaignPage} />

            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/profile" component={ProfilePage} />
            <GuestRoute path="/register" component={SignupPage} />

            <Redirect from="*" to="/404" />
            <Route path="/404" component={BodyPage} />
        </Switch>
    );
};

export default Router;
