import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
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
