// AppNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
// 👉 Replace this with your actual logo file name & path:
import TexasBestTreeLogo from '../images/TreeCo2.png';

const AppNavbar = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            fixed="top"
            className="py-3"
        >
            <Container>
                {/* Brand + logo */}
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        src={TexasBestTreeLogo}
                        alt="Texas Best Tree Company"
                        style={{ height: 40, width: 'auto', marginRight: 8 }}
                    />

                </Navbar.Brand>

                {/* Hamburger toggler */}
                <Navbar.Toggle aria-controls="main-navbar" />

                {/* Collapsible nav links */}
                <Navbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => scrollToSection('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('about')}>
                            About
                        </Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('services')}>
                            Services
                        </Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('work')}>
                            Project Gallery
                        </Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('contact')}>
                            Contact
                        </Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link as={Link} to="/signin">
                            Login
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
