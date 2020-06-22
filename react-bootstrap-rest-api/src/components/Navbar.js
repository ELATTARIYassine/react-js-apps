import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const navbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href='/'>React-Bootstrap-rest-api</Navbar.Brand>
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