import { GET_TASKS, ADD_TASK, DELETE_TASK } from './types';
import axios from 'axios';

// Returns an action to get all items and sends no payload
export const getTasks = () => async (dispatch, getState) => {
  const { data } = await axios.get('/api/tasks/'); // perform the request to the backend
  dispatch({
    type: GET_TASKS,
    payload: data,
  });
};

// Returns an action to add an item with a payload of the items Name and ID
export const addTask = (name) => async (dispatch, getState) => {
  const { data } = await axios.post(
    '/api/tasks/',
    { name: name },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  dispatch({
    type: ADD_TASK,
    payload: { id: data._id, name: data.name },
  });
};

// Returns an action to delete an item with a payload of the items ID
export const deleteTask = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/tasks/${id}`); // perform the request to the backend
  return {
    type: DELETE_TASK,
    payload: { id: data._id },
  };
};

/**
 * Action creators return an action type and payload (Data from server, etc.)
 * to be sent to the reducer and hits it to basically update some state and then return it such that
 * the store will get that update to state and it will be available to everyone
 */
