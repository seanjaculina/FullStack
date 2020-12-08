import { CART_ADD_ITEM, CART_REMOVE_ITEM } from './actionTypes';

/**
 * Remember:
 * reducers take initial state for some store and the action
 * that was dispatched. We use a switch to get the action type from
 * that object to see if THIS reducer should update state.
 *
 * remember a dispatch() will ALWAYS send an action to the store, which has all our reducers
 * combined which means all the reducers will use their switches to see that action and only the reducers
 * which passed the switch case will run
 */
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      // the payload of the action that was sent
      const item = action.payload;
      const existItem = state.cartItems.find(
        (itm) => itm.product === item.product,
      );

      // if the item already exists in the cartitems state, we can ignore
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((itm) =>
            itm.product === existItem.product ? item : itm,
          ),
        };
      } else {
        // if the item did not exist, add the item being added to the current
        // cartItems state (remember we do no mutate the state so we need to return
        // all the state in the store + the state we are adding to (which is always the argument in the reducer)
        // and use the spread operator and then also adding the new item )
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          // filter out the product that we are trying to remove (.product is associated to the products id. We just did not name it ID)
          (itm) => itm.product !== action.payload,
        ),
      };
    default:
      return state; // if the action dispsatched does not pass the conditions in this reducer, just return state. the dispatched action must be handled in another reducer
  }
};
