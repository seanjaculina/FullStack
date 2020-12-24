import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Action imports
import { getItems } from '../actions/itemActions';

const ShoppingList = () => {
  const dispatch = useDispatch(); // Hook to reference a dispatch method

  const itemState = useSelector((state) => state.items);
  // Hook into our redux store and get the items state

  // Get all the items in the store currently
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  // const getItemInput = () => {
  //   const name = prompt('Enter the task');
  //   if (name) {
  //     setItems((oldState) => [...oldState, { id: v4(), name }]);
  //   }
  // };

  // const removeItem = (id) => {
  //   setItems((oldState) => oldState.filter((item) => item.id !== id));
  // };

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
