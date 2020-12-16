import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducer imports
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducer } from './reducers/userReducers';

// The reducer will be an object of all the reducers in our application combined such that
// we can always send actions and each reducer will see the action and determine what reducer
//to fire off and change some state. This is important
const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer, // holds the state for shopping cart
  userLogin: userLoginReducer, // holds an object of user data. When logged out action is fired, this reducer will empty it and make it {} null
});

// Get the cart from local storage (initially this will be empty of course when we are building this app)
const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

// See if the users info from a login is present in local storage or not (return null) because a user can be logged in after navigating away and we are storing the logged in user for a good UX
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

// the initial app state - can be empty or anything you want by default when app loads
// this can be local_storage, or just empty object. Whatever we want as the team / engineer
const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  rootReducer, // takes in the root reducer which is the overarching state
  initialState, // takes in the initial state (this is optional in apps. Of ocurse it makes sense for the initial state in our case to be the stuff in local storage if there is anything!)
  composeWithDevTools(applyMiddleware(...middleware)),
  // also a third option which is middleware and in this case, this allows us to use
  // redux devtools and apply any middlewares to it (in this case thunk)
);

export default store;
