import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const state = useSelector((state) => state);

  const toggle = () => {
    setIsOpen((oldState) => !oldState);
  };

  return (
    <div>
      <Navbar
        color="dark"
        dark
        expand="sm"
        className="mb-5"
        style={{ minHeight: '5rem' }}
      >
        <Container>
          <NavbarBrand href="/">
            TaskManage
            <i className="fas fa-thumbtack" style={{ marginLeft: '.7rem' }}></i>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {!state.auth.isAuthenticated ? (
                <NavItem>
                  <NavLink href="/login" style={{ color: '#fff' }}>
                    Login
                  </NavLink>
                </NavItem>
              ) : null}
              {state.auth.isAuthenticated ? (
                <NavItem>
                  <NavLink href="/profile" style={{ color: '#fff' }}>
                    Profile
                  </NavLink>
                </NavItem>
              ) : null}
              {state.auth.isAuthenticated ? (
                <NavItem>
                  <NavLink href="/tasks" style={{ color: '#fff' }}>
                    Current Tasks
                  </NavLink>
                </NavItem>
              ) : null}
              <NavItem>
                <NavLink
                  href={state.auth.isAuthenticated ? '/logout' : '/register'}
                  style={{ color: '#fff' }}
                >
                  {state.auth.isAuthenticated ? 'logout' : 'register'}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
