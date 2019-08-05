import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { UserLinks } from './UserLinks/UserLinks';
import { connect } from 'react-redux';
import PropTypes  from 'prop-types';
import GuestLinks from "./GuestLinks/GuestLinks";



class NavigationBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { isAuthorized} = this.props;
        return (
            <Navbar bg="dark" variant="dark" expand="sm" className="px-3">
                <Navbar.Brand>PayGround</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavItem eventkey={1} href="/">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                        </NavItem>
                        <NavItem eventkey={2} href="/">
                            <Nav.Link as={Link} to="/companies/categories/all">
                                Campaigns
                            </Nav.Link>
                        </NavItem>
                    </Nav>
                    {isAuthorized ? (
                        <UserLinks  />
                    ) : (
                        <GuestLinks />
                    )}

                </Navbar.Collapse>
            </Navbar>
        );
    }
};

function mapStateToProps(state) {

    return {
        isAuthorized: state.authentication.isAuthorized
    };
}

NavigationBar.propTypes = {
    isAuthorized: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(NavigationBar);
