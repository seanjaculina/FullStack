import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

// Returns an action to get all items and sends no payload
export const getItems = () => {
  return {
    type: GET_ITEMS,
  };
};

// Returns an action to add an item with a payload of the items Name and ID
export const addItem = (id, name) => {
  return {
    type: ADD_ITEM,
    payload: { id, name },
  };
};

// Returns an action to delete an item with a payload of the items ID
export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: { id },
  };
};

/**
 * Action creators return an action type and payload (Data from server, etc.)
 * to be sent to the reducer and hits it to basically update some state and then return it such that
 * the store will get that update to state and it will be available to everyone
 */
