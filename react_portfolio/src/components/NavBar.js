import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Pulling out the specific components from the default imports
const { Toggle, Collapse } = Navbar;
const { Link } = Nav;

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        variant="dark"
        fixed="top"
        expand="md"
        style={{
          backgroundColor: '#1c292b',
          padding: '1.2rem',
        }}
      >
        <Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            border: 'none',
            position: 'relative',
          }}
        />
        <Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              href="#home"
              style={{ color: '#fff', paddingRight: '1.5rem' }}
            >
              Home
            </Link>
            <Link
              href="#projects"
              style={{ color: '#fff', paddingRight: '1.5rem' }}
            >
              Projects
            </Link>
            <Link
              href="#about"
              style={{ color: '#fff', paddingRight: '1.5rem' }}
            >
              About Me
            </Link>
            <Link
              href="#testimonials"
              style={{ color: '#fff', paddingRight: '1.5rem' }}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              style={{ color: '#fff', paddingRight: '1.5rem' }}
            >
              Contact Me
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
