import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ListGroup, Spinner, Button } from 'reactstrap';

// Actions
import { getTasks, addTask, deleteTask } from '../../actions/itemActions';

import TaskBarInput from '../TaskBarInput';
import TaskItem from '../TaskItem';

const TaskList = ({ history }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch(); // Hook to reference a dispatch method

  //const taskState = useSelector((state) => state.tasks); // Hook into our redux store and get the items state
  const state = useSelector((state) => state);

  useEffect(() => {
    if (!state.auth.token) {
      history.push('/login');
    }
    // Get all the tasks if they are authenticated
    dispatch(getTasks(state.auth.token));
  }, [dispatch, history, state.auth.isAuthenticated, state.auth.token]);

  const addTask_ = (taskData, token) => {
    // Add task (takes in task name and the auth token)
    dispatch(addTask(taskData, token));
    setLoading(false);
  };

  // dispatch the deleteItem action to our store with the given ID of the item and auth token to delete the item
  const removeTask = (id, token) => {
    dispatch(deleteTask(id, token));
  };

  return (
    <Container className="mt-5" style={{ width: '85%' }}>
      <TaskBarInput addTask_={addTask_} />
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
      <div className="btn-explanations">
        <div className="btn-edit-container">
          <span className="update-btn" color="info" size="md">
            <i className="far fa-edit" style={{ color: '#fff' }}></i>
          </span>
          <span>Edit Task Name and add notes</span>
        </div>
        <div className="btn-complete-container">
          <span className="complete-btn" color="success" size="md">
            <i className="far fa-check-circle" style={{ color: '#fff' }}></i>
          </span>
          <span>Mark task as complete but not deleted</span>
        </div>
        <div className="btn-delete-container">
          <span className="remove-btn" size="md">
            <i className="fas fa-trash-alt" style={{ color: '#fff' }}></i>
          </span>
          <span>Delete task completely</span>
        </div>
      </div>
      <ListGroup style={{ marginTop: '2rem' }}>
        {state.tasks.taskList &&
          state.tasks.taskList.length > 0 &&
          state.tasks.taskList.map((task) => (
            <TaskItem key={task._id} task={task} removeTask={removeTask} />
          ))}
      </ListGroup>
    </Container>
  );
};

export default TaskList;
