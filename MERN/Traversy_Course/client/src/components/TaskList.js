import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ListGroup, Spinner } from 'reactstrap';
import TaskBarInput from './TaskBarInput';
import TaskItem from './TaskItem';
// Action imports
import { getTasks, deleteTask } from '../actions/itemActions';

const TaskList = () => {
  const dispatch = useDispatch(); // Hook to reference a dispatch method

  const taskState = useSelector((state) => state.tasks); // Hook into our redux store and get the items state
  const { taskList, success, error, loading } = taskState;

  // Get all the items in the store currently
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

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
      <ListGroup style={{ marginTop: '2rem' }}>
        {taskList &&
          taskList.map((task) => (
            <TaskItem task={task} removeTask={removeTask} />
          ))}
      </ListGroup>
    </Container>
  );
};

export default TaskList;
