import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const navbarStyle = {
    transition: 'background-color 0.3s',
    backgroundColor: navColour ? '#343a40' : 'transparent',
    color: 'white'
  };

  const brandTextStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  };

  const linkStyle = {
    marginBottom: '2px',
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      style={navbarStyle}
    >
      <Container>
        {/* Brand name always visible */}
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <span style={brandTextStyle}>GAFFER</span>
        </Navbar.Brand>

        {/* Toggle button only visible on smaller screens */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(!expand)}
          className="d-md-none" // Only visible on small screens
          style={{ borderColor: 'white' }} // Optional: Adjust button style
        />

        {/* Links for larger screens */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={linkStyle} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={linkStyle} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={linkStyle} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={linkStyle} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
