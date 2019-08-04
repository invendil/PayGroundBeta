import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';

import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import {BodyPage} from "../BodyPage";
import NavigationBar from "../_components/layout/Navigationbar/NavigationBar";
import Router from "../_routers";

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { alert } = this.props;
        return (

            <BrowserRouter >
                <div>
                        <NavigationBar/>
                        <Router />
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    const {alert}  = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 