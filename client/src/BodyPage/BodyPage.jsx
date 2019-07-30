import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Result} from "antd";

class BodyPage extends React.Component {
    constructor(props) {
        super(props);


    }



    render() {

        return (
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button type="primary">Back Home</Button>}
            />
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