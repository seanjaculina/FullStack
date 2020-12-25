import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Action imports
import { getTasks, deleteTask } from '../actions/itemActions';

const TaskList = () => {
  const dispatch = useDispatch(); // Hook to reference a dispatch method

  const taskState = useSelector((state) => state.tasks); // Hook into our redux store and get the items state

  // Get all the items in the store currently
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const removeTask = (id) => {
    dispatch(deleteTask(id)); // dispatch the deleteItem action to our store with the given ID of the item to delete
  };

  return (
    <Container className="mt-5">
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {taskState.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem style={{ borderRadius: '5px' }}>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => removeTask(id)}
                  style={{ marginRight: '2rem' }}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default TaskList;
