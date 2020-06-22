import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

const navbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Link to='/'>
                <Navbar.Brand>
                    <strong>React-Bootstrap-rest-api</strong>
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/add">Add</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default navbar;