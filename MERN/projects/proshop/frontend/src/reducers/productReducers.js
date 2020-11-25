import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from './actionTypes';

// the initial state of product list. Empty initially. Should be populated when
// the server is hit from the useEffect on the homepage that fetches all products
const initialState = {
  products: [],
};

export const productListReducer = (state = initialState, action) => {
  // determine the action type (the action to do something to this state)
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

/**
 * All reducers take in two things:
 *  - the initial state
 *  - the action being dispatched and accepted by the reducer
 *    to manipulate some state
 *
 * Reducers simply accept actions and manipulate the state
 *
 * The above reducer design is the same paradigm we use for all reducers and becomes
 * very repetitive and easy to understand!
 *
 * Reducers go into separate files for each different reducer functioniality
 * and must be imported to store.js to be put into our combined reducers
 *
 * They are named exports so they must be destructured in the import step
 */
