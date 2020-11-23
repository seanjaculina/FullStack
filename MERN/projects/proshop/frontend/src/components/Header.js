import React from 'react';
import {LinkContainer} from 'react-router-bootstrap'; //same as Link in react-router-dom

import {Navbar, Nav, Container} from 'react-bootstrap';

// Pull out the special Components from the Navbar component we brought in (see docs on navbar to see the original code)
const {Collapse, Brand, Toggle} = Navbar;
const {Link} = Nav;

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <LinkContainer to="/">
          <Brand>ProShop</Brand>
        </LinkContainer>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Link>
                <i className="fas fa-shopping-cart"></i>Cart
              </Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Link>
                <i className="fas fa-user"></i>Sign In
              </Link>
            </LinkContainer>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
