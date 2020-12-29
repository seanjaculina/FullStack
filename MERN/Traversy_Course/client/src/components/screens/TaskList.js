import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ListGroup, Spinner, Alert } from 'reactstrap';

// Actions
import { getTasks, addTask } from '../../actions/itemActions';

import TaskBarInput from '../TaskBarInput';
import TaskItem from '../TaskItem';

const TaskList = ({ history }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch(); // Hook to reference a dispatch method

  //const taskState = useSelector((state) => state.tasks); // Hook into our redux store and get the items state
  const state = useSelector((state) => state);

  useEffect(() => {
    if (!state.auth.isAuthenticated) {
      history.push('/login');
    }
    // Get all the tasks if they are authenticated
    dispatch(getTasks(state.auth.token));
  }, [dispatch, history, state.auth.isAuthenticated, state.auth.token]);

  const addTask_ = async (taskData, token) => {
    // Add task (takes in task name and the auth token)
    dispatch(addTask(taskData, token));
    setLoading(false);
  };

  // dispatch the deleteItem action to our store with the given ID of the item to delete
  const removeTask = async (id, token) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.delete(`/api/tasks/${id}`, config);
    state.auth.user.tasks = state.auth.tasks.filter(
      (task) => task._id !== data._id,
    );
  };

  return (
    <Container className="mt-5" style={{ width: '85%' }}>
      <TaskBarInput addTask={addTask_} />
      {loading && (
        <div
          style={{
            width: '100%',
            height: '5.1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spinner
            style={{
              width: '5rem',
              height: '5rem',
            }}
          />
        </div>
      )}
      <ListGroup style={{ marginTop: '2rem' }}>
        {state.tasks.taskList &&
          state.tasks.taskList.map((task) => (
            <TaskItem key={task._id} task={task} removeTask={removeTask} />
          ))}
      </ListGroup>
    </Container>
  );
};

export default TaskList;
