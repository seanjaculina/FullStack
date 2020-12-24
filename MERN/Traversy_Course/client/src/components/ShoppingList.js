import React, { useState, useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 } from 'uuid';

const dummyData = [
  { id: v4(), name: 'Buy Eggs' },
  { id: v4(), name: 'Buy Groceries' },
  { id: v4(), name: 'Go to the Gym' },
  { id: v4(), name: 'Get some weights for home gym' },
];

const ShoppingList = () => {
  const [items, setItems] = useState(dummyData);
  const [taskName, setTaskName] = useState('');

  const getItemInput = () => {
    const name = prompt('Enter the task');
    if (name) {
      setTaskName(name);
      setItems((oldState) => [...oldState, { id: v4(), name }]);
    }
  };

  const removeItem = (id) => {
    setItems((oldState) => oldState.filter((item) => item.id !== id));
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
          {items.map(({ id, name }) => (
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
