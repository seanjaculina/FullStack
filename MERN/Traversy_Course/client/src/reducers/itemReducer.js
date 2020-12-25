/* eslint-disable import/no-anonymous-default-export */
import { GET_TASKS, ADD_TASK, DELETE_TASK } from '../actions/types';

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TASKS:
      return [...action.payload];
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter((item) => item.id !== action.payload.id); // removes the item with the given id
    default:
      return state;
  }
};

export default itemReducer;
