import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  GET_TASKS_REQUEST,
  ADD_TASK_REQUEST,
  DELETE_TASK_REQUEST,
} from './types';
import axios from 'axios';

// Returns an action to get all items and sends no payload
export const getTasks = () => async (dispatch, getState) => {
  dispatch({
    type: GET_TASKS_REQUEST,
  });
  const { data } = await axios.get('/api/tasks/'); // perform the request to the backend
  dispatch({
    type: GET_TASKS,
    payload: data,
  });
};

// Returns an action to add an item with a payload of the items Name and ID
export const addTask = (name) => async (dispatch, getState) => {
  dispatch({
    type: ADD_TASK_REQUEST,
  });
  const { data } = await axios.post(
    '/api/tasks/',
    { name },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  dispatch({
    type: ADD_TASK,
    payload: data,
  });
};

// Returns an action to delete an item with a payload of the items ID
export const deleteTask = (id) => async (dispatch, getState) => {
  dispatch({
    type: DELETE_TASK_REQUEST,
  });
  const { data } = await axios.delete(`/api/tasks/${id}`);
  // remember: to do async actions, we need to perform  routine requests but actually use the dispatch method to dispatch the
  // action to the state. If not async, we would just return the action creator here with a type and payload which would then populate the state
  dispatch({
    type: DELETE_TASK,
    payload: data,
  });
};

/**
 * Action creators return an action type and payload (Data from server, etc.)
 * to be sent to the reducer and hits it to basically update some state and then return it such that
 * the store will get that update to state and it will be available to everyone
 */
