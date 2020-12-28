import React, { useState } from 'react';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from 'reactstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const onHandlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <Container>
      <h1>Login</h1>
      <hr />
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
        <Button className="btn_">Log in</Button>
      </Form>
    </Container>
  );
};

export default Login;
