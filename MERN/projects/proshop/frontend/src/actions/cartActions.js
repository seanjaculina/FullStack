import axios from 'axios';

// action creator files of course should bring in those constants we made available
import { CART_ADD_ITEM } from '../reducers/actionTypes';

// this action is asynchronous so we need to use dispatch with the normal arrow function
export const addToCart = (id, qty) => async (dispatch, getState) => {
  // get the item from the backend from the ID of that item being sent in
  // we need this so we can get all the data about this product so we can send it in the payload
  // of the action we are dispatching here so that the store knows what item to add to the cart state
  const { data } = await axios.get(`/api/products/${id}`);

  // remember action creators accept data from UI interaction , and then they perform the api requests, other data stuff, etc.
  // and then they are dispatched to the store to find a reducer which will get the action type and the payload
  // and actually update the state from the payload in the action being dispatched
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  // we want to persist the users cart in local storage so they can go back to this page later and see their current cart items
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
