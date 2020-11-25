import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../reducers/actionTypes';

import axios from 'axios';

// action creator to fetch all items from ourbackend - this is async
// so this is where the thunk middleware comes in which basically needs us
// to return an async function that takes in a callback called dispatch that we will use to
// send these actions to the reducers which will then be changing state
export const listProducts = () => async (dispatch) => {
  try {
    // dispatch the action to initial a 'request' state
    dispatch({ type: PRODUCT_LIST_REQUEST });

    // send the request
    const { data } = await axios.get('/api/products');

    // Dispatch the successful action and remember, it took a payload
    // of the data received from the call to the backend and it will populate our
    // store with the products
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err) {
    // if err, dispatch the error as the payload to the state instead
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

// this action creator accepts the ID from the URL of a clicked item and will be fired off. It will essentially change the state to loading true, then
// perform the get request to our API and then dispatch the data returned from the api with a type of success which would be seen in our store, theright reducer will see that action type and
//then manipulate our store
export const listProductDetails = (id) => async (dispatch) => {
  try {
    // dispatch the action to send details request which will change state to loading true, and then return also whatever the state currently was
    // we like to use actions to initiate loading state for each reducer that performs some state change from an action
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    // send the request to get this products details
    const { data } = await axios.get(`/api/products/${id}`);
    // dispatch the product details success action with the product data received from the API
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
