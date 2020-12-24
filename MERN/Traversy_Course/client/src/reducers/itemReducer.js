/* eslint-disable import/no-anonymous-default-export */
import { v4 } from 'uuid';

// Bring in our action type constants that match the type of reducer we are
// making
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = [
  { id: v4(), name: 'Buy Eggs' },
  { id: v4(), name: 'Buy Groceries' },
  { id: v4(), name: 'Go to the Gym' },
  { id: v4(), name: 'Get some weights for home gym' },
];

/**
 * Reducer always takes in some initial state we can define above or inline
 * and an action which is the possible dispatched action to this reducer from the store
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
