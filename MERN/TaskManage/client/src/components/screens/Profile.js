import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../actions/itemActions';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { updateUserProfile } from '../../actions/authActions';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Table,
} from 'reactstrap';

const Profile = ({ history }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state); // hook into state (to get access to errors, etc.)

  // Autopopulate update fields with the current text of your info in the DB
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // Fetch all the tasks for this user
  useEffect(() => {
    if (!state.auth.isAuthenticated) {
      history.push('/login');
    }
    dispatch(getTasks(state.auth.token));
  }, []);

  const onHandleNameChange = (e) => {
    setName(e.target.value);
  };
  const onHandleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = () => {
    dispatch(updateUserProfile(name, email));
  };

  return (
    <Container>
      <h5>Hi, {state.auth.user.name}</h5>
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
              {state.tasks.taskList &&
                state.tasks.taskList.map((task) => (
                  <tr key={task._id}>
                    <td>{task.name}</td>
                    <td>{parse(task.content)}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
