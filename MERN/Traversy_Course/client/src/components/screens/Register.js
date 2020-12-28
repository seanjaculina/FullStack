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
  const [name, setName] = useState('');

  const onHandleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
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
      <h1>Register</h1>
      <hr />
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
        <Button className="btn_">Register</Button>
      </Form>
    </Container>
  );
};

export default Register;
