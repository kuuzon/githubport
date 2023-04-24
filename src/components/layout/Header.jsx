// Import React modules
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";
import { SiCodeigniter } from 'react-icons/si';

// Toggle Switches
import ThemeToggler from "../common/ThemeToggler";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <SiCodeigniter className="mb-1"/>
          {' '}
          PortfolioBase
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* LEFT MAIN NAVS */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/users">GitUser</Nav.Link>
          </Nav>
          {/* RIGHT MAIN NAVS */}
          <div>
            <ThemeToggler />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}   

export default Header