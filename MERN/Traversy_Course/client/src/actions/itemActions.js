import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
  return {
    type: GET_ITEMS,
  };
};

/**
 * Action creators return an action type and payload (Data from server, etc.)
 * to be sent to the reducer and hits it to basically update some state and then return it such that
 * the store will get that update to state and it will be available to everyone
 */
