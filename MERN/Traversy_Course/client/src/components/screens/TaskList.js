import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ListGroup, Spinner, Alert } from 'reactstrap';

import TaskBarInput from '../TaskBarInput';
import TaskItem from '../TaskItem';
// Action imports
import { getTasks, deleteTask } from '../../actions/itemActions';

const TaskList = () => {
  const [successShowing, setSuccessShowing] = useState(true);

  const dispatch = useDispatch(); // Hook to reference a dispatch method

  //const taskState = useSelector((state) => state.tasks); // Hook into our redux store and get the items state
  const state = useSelector((state) => state);
  const { taskList, success, error, loading } = state.tasks;

  // Get all the items in the store currently
  useEffect(() => {
    dispatch(getTasks(state.auth.token)); // send the token in auth state which exists only after login/register (this whole 'page' cannot be accessed without a token in the first place)
    setTimeout(() => setSuccessShowing(false), 1500); // remove the popup from the UI for success
  }, [dispatch, state.auth.token]);

  let popupText;

  if (error) {
    popupText = 'Item fetch error';
  } else {
    popupText = 'Items fetched successfully';
  }

  // dispatch the deleteItem action to our store with the given ID of the item to delete
  const removeTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <Container className="mt-5" style={{ width: '85%' }}>
      <TaskBarInput />
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

      {
        //show the success as a popup if we fetched successfully and the showing state is true
        success && successShowing && (
          <Alert color={success ? 'success' : 'danger'} className="mb-3 mt-3">
            {popupText}
          </Alert>
        )
      }
      <ListGroup style={{ marginTop: '2rem' }}>
        {taskList &&
          taskList.map((task) => (
            <TaskItem key={task._id} task={task} removeTask={removeTask} />
          ))}
      </ListGroup>
    </Container>
  );
};

export default TaskList;
