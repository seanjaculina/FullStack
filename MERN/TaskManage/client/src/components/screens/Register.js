import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Alert,
} from 'reactstrap';

import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

const Register = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorShowing, setErrorShowing] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state); // hook into state (to get access to errors, etc.)

  const onHandleNameChange = (e) => {
    setName(e.target.value);
  };
  const onHandleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onHandlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    const user = { email, name, password };
    dispatch(register(user)); // register the user with the register action which will perform the request and then update the state
    if (!state.auth.isAuthenticated) {
      setErrorShowing(true);
      setTimeout(() => {
        setErrorShowing(false);
      }, 1500);
    }
  };

  // Run everytime the component updates: used to look at auth state and see if we can redirect
  useEffect(() => {
    // if the user is authenticated (there is a token) just redirect
    if (state.auth.isAuthenticated) {
      dispatch(clearErrors());
      setErrorShowing(false);
      history.push('/tasks');
    }
  }, [dispatch, history, state.auth.isAuthenticated, state.error.id]);

  return (
    <Container>
      <h1>Register</h1>
      <hr />
      {errorShowing && (
        <Alert color="danger" className="mb-3 mt-3">
          {state.error.msg.msg}
        </Alert>
      )}
      <Form style={{ paddingTop: '2rem' }}>
        <Row form>
          <Col lg={12}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                onChange={onHandleNameChange}
                value={name}
                id="name"
                placeholder="Please enter your name"
              />
            </FormGroup>
          </Col>
          <Col lg={12}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                onChange={onHandleEmailChange}
                value={email}
                id="email"
                placeholder="Please enter an email"
              />
            </FormGroup>
          </Col>
          <Col lg={12}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                onChange={onHandlePasswordChange}
                value={password}
                id="password"
                placeholder="Enter password"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button className="btn_" onClick={onSubmit}>
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
