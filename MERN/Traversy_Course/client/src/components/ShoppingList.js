import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Action imports
import { getItems, addItem, deleteItem } from '../actions/itemActions';

const ShoppingList = () => {
  const dispatch = useDispatch(); // Hook to reference a dispatch method

  const itemState = useSelector((state) => state.items); // Hook into our redux store and get the items state

  // Get all the items in the store currently
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const getItemInput = () => {
    const name = prompt('Enter the task');
    if (name) {
      dispatch(addItem(v4(), name)); // dispatch the addItem action to our store
    }
  };

  const removeItem = (id) => {
    dispatch(deleteItem(id)); // dispatch the deleteItem action to our store with the given ID of the item to delete
  };

  return (
    <Container>
      <Button
        color="dark"
        style={{ marginBottom: '2rem' }}
        onClick={getItemInput}
      >
        Add Item
      </Button>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {itemState.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => removeItem(id)}
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

export default ShoppingList;
