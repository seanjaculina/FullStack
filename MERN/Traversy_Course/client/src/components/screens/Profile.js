import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../actions/itemActions';
import { Link } from 'react-router-dom';
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
  Table,
} from 'reactstrap';

const Profile = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([]);

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

  // Fetch all the tasks for this user
  useEffect(() => {
    // If for whatever reason this route was exposed without being authenticated we should redirect to the login page
    if (!state.auth.isAuthenticated) {
      history.push('/login');
    }

    // Get the current tasks
    dispatch(getTasks(state.auth.token));
    setTasks(state.tasks.taskList);
  }, [
    dispatch,
    history,
    state.auth.isAuthenticated,
    state.auth.token,
    state.tasks.taskList,
  ]);

  return (
    <Container>
      <Row style={{ padding: '1.5rem 0' }}>
        <Col lg={6} style={{ marginBottom: '3rem' }}>
          <Form>
            <h3 style={{ margin: '0 0 1rem 0', color: '#000' }}>
              Update Profile
            </h3>
            <FormGroup>
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
            <FormGroup>
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
            <FormGroup>
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
            <Button
              className="btn_"
              onClick={onSubmit}
              style={{ marginTop: '1rem' }}
            >
              Update Profile
            </Button>
          </Form>
        </Col>
        <Col lg={6}>
          <h3 style={{ padding: '0 0 1rem 0' }}>
            <Link to="/tasks" style={{ color: '#000' }}>
              {' '}
              Currently Open Tasks
            </Link>
          </h3>
          <Table striped style={{ border: '1px solid lightgray' }}>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Task Information</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length !== 0
                ? tasks.map((task) => {
                    return (
                      <tr>
                        <td>{task.name}</td>
                        <td>data</td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
