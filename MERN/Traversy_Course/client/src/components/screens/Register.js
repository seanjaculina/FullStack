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

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setNmail] = useState('');
  return (
    <Container>
      <h1>Register</h1>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Email</Label>
              <Input
                type="text"
                name="name"
                value={name}
                id="name"
                placeholder="Please enter your name"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                value={email}
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
                value={password}
                id="password"
                placeholder="Enter password"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button>Register</Button>
      </Form>
    </Container>
  );
};

export default Register;
