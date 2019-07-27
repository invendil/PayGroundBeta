import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

class BodyPage extends React.Component {
    constructor(props) {
        super(props);


    }



    render() {

        return (
            <div>
                <h1>Content</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn,
        user : state.user
    };
}

const connectedLoginPage = connect(mapStateToProps)(BodyPage);
export { connectedLoginPage as BodyPage };