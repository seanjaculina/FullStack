import React from 'react';
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
  return (
    <Container>
      <h1>Login</h1>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Please enter an email"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button>Log in</Button>
      </Form>
    </Container>
  );
};

export default Login;
