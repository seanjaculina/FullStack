import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducer imports
import { productListReducer } from './reducers/productReducers';

// The reducer will be an object of all the reducers in our application combined such that
// we can always send actions and each reducer will see the action and determine what reducer
//to fire off and change some state. This is important
const rootReducer = combineReducers({
  productList: productListReducer, // the productList is an array of products that will be received whenever the productListReducer receives an action type that is for getting data from backend!
  // all properties of the object in combineReducers contain some data / state returned from separate reducers
});

// the initial app state - can be empty or anything you want by default when app loads
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer, // takes in the root reducer which is the overarching state
  initialState, // takes in the initial state
  composeWithDevTools(applyMiddleware(...middleware))
  // also a third option which is middleware and in this case, this allows us to use
  // redux devtools and apply any middlewares to it (in this case thunk)
);

export default store;
