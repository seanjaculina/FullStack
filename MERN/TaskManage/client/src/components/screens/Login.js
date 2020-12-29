import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
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

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorShowing, setErrorShowing] = useState(false);

  // Get a dispatch reference and hook into state
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // Run everytime the component updates: used to look at auth state and see if we can redirect
  useEffect(() => {
    if (state.auth.isAuthenticated) {
      dispatch(clearErrors());
      history.push('/tasks');
    }
  }, [dispatch, history, state.auth.isAuthenticated]);

  const onHandleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onHandlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    const user = { email, password };
    dispatch(login(user));
    if (state.error.msg) {
      setErrorShowing(true);
    }
  };

  return (
    <Container>
      <h1>Login</h1>
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
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={onHandleEmailChange}
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
                value={password}
                onChange={onHandlePasswordChange}
                id="password"
                placeholder="Enter password"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button className="btn_" onClick={onSubmit}>
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
