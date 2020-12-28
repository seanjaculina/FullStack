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
  InputGroupText,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);
  const [name, setName] = useState('');
  // const [errorShowing, setErrorShowing] = useState(false);

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

  const onSubmit = (e) => {};

  // Run everytime the component updates: used to look at auth state and see if we can redirect
  useEffect(() => {});

  return (
    <Container>
      <h1>Profile</h1>
      <hr />
      <Form style={{ padding: '1.5rem 1rem' }}>
        <Row>
          <h3 style={{ padding: '1.5rem 0' }}>Update Profile</h3>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup row>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                onChange={onHandleNameChange}
                value={name}
                id="name"
                placeholder="Please enter your name"
                autoComplete="off"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup row>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                onChange={onHandleEmailChange}
                value={email}
                id="email"
                placeholder="Please enter an email"
                autoComplete="off"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup row>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                onChange={onHandlePasswordChange}
                value={password}
                id="password"
                placeholder="Enter password"
                autoComplete="off"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Button
            className="btn_"
            onClick={onSubmit}
            style={{ marginTop: '1rem' }}
          >
            Update Profile
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default Profile;
