/* eslint-disable import/no-anonymous-default-export */
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ITEMS:
      return [...state];
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload.id); // removes the item with the given id
    default:
      return state;
  }
};

export default itemReducer;
