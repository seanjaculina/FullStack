import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Spinner,
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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

  const removeTask = (id) => {
    dispatch(deleteTask(id)); // dispatch the deleteItem action to our store with the given ID of the item to delete
  };

  return (
    <Container className="mt-5" style={{ width: '85%' }}>
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
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {taskList &&
            taskList.map((task) => (
              <CSSTransition key={task._id} timeout={500} classNames="fade">
                <ListGroupItem className="mb-3" style={{ borderRadius: '5px' }}>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => removeTask(task._id)}
                    style={{ marginRight: '2rem' }}
                  >
                    &times;
                  </Button>
                  {task.name}
                </ListGroupItem>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default TaskList;
