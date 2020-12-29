import React, { useState } from 'react';
import { logout } from '../actions/authActions';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom'; // use react router links inside the navitems to prevent reload
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
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
          <Link to="/" style={{ color: '#fff' }}>
            TaskManage
            <i className="fas fa-thumbtack" style={{ marginLeft: '.7rem' }}></i>
          </Link>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {!state.auth.isAuthenticated ? (
                <NavItem>
                  <Link
                    to="/login"
                    style={{ color: '#fff', marginRight: '1rem' }}
                  >
                    Login
                  </Link>
                </NavItem>
              ) : null}
              {state.auth.isAuthenticated ? (
                <NavItem>
                  <Link
                    to="/profile"
                    style={{ color: '#fff', marginRight: '1rem' }}
                  >
                    Profile
                  </Link>
                </NavItem>
              ) : null}
              {state.auth.isAuthenticated ? (
                <NavItem>
                  <Link
                    to="/tasks"
                    style={{ color: '#fff', marginRight: '1rem' }}
                  >
                    Add Task
                  </Link>
                </NavItem>
              ) : null}
              <NavItem>
                <Link
                  to={state.auth.isAuthenticated ? '/' : '/register'}
                  style={{ color: '#fff' }}
                  onClick={() => dispatch(logout())}
                >
                  {state.auth.isAuthenticated ? 'Logout' : 'Register'}
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
