import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from './actionTypes';

// all reducers need initial state for that reducer and then take in an action from dispatch

// this sets state for product list stuff
export const productListReducer = (
  state = {
    products: [],
  },
  action
) => {
  // determine the action type (the action to do something to this state)
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [], // initially the products array when request is an empty bucket waiting to be filled up by data received from the action being dispatched
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

// this sets state for the currently request product data stuff
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  // determine the action type (the action to do something to this state)
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_FAIL:
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
 * Action creators are functions that dispatch actions like netowrk requests,
 * loading state changes, etc. and the dispatch is usually a action type and the payload to send.
 * Keep in mind that in our store.js, we combine all our reducers which accept actions that were dispatched to the store
 * and all of the reducers get the action and whatever reducer sees the action type the switch ccase matched will perform the action
 * and update the state. So action creators are fired off in components , the acctual logic in them is up to us and
 * then the reducer can accept those actiions and cchange state with the payload and type it saw whiich is seen in this file
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
