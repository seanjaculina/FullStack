import { GET_TASKS, ADD_TASK, DELETE_TASK } from './types';

// Returns an action to get all items and sends no payload
export const getTasks = () => {
  return {
    type: GET_TASKS,
  };
};

// Returns an action to add an item with a payload of the items Name and ID
export const addTask = (id, name) => {
  return {
    type: ADD_TASK,
    payload: { id, name },
  };
};

// Returns an action to delete an item with a payload of the items ID
export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: { id },
  };
};

/**
 * Action creators return an action type and payload (Data from server, etc.)
 * to be sent to the reducer and hits it to basically update some state and then return it such that
 * the store will get that update to state and it will be available to everyone
 */
