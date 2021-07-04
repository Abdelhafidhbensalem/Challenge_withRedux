import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function NavbarPage() {
    return (
        <div style={{ marginBottom: '10px' }}>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to='/'> <img src='https://sf1.viepratique.fr/wp-content/uploads/sites/5/2015/08/4d2586001ed8a44f4e9a83afd3de5384-267x410.jpg' alt='logo' width='70' height='59px' /></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Navbar.Brand >We need a cocktail</Navbar.Brand>
                    </Nav>
                    <Nav>
                        <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/aboutus">About us</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarPage;
