import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // to bring in state and to fire actions
import { LinkContainer } from 'react-router-bootstrap'; //same as Link in react-router-dom

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import { logout } from '../actions/userActions';

// Pull out the special Components from the Navbar component we brought in (see docs on navbar to see the original code)
const { Collapse, Brand, Toggle } = Navbar;
const { Link } = Nav;

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin); // bring in the userLogin state from out store

  const { userInfo } = userLogin; // pull the logged in users information out of the state we got above

  // send the logout action using dispatch.This action creator removes the user from local storage and we are logged out!
  // Also the usersReducer file handles the USER_LOGOUT action type this action sends when it is fired and simply returns an empty object to represent no data in userLogin state
  const logoutHandler = () => {
    dispatch(logout());
  };

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
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Link>
                    <i className="fas fa-user"></i>Sign In
                  </Link>
                </LinkContainer>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
