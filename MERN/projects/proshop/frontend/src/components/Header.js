import React from 'react';

import {Navbar, Nav, Container} from 'react-bootstrap';

// Pull out the special Components from the Navbar component we brought in (see docs on navbar to see the original code)
const {Collapse, Brand, Toggle} = Navbar;
const {Link} = Nav;

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <Brand href="/">ProShop</Brand>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Link>
            <Link href="/login"><i className="fas fa-user"></i>Sign In</Link>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
