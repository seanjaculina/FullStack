import axios from 'axios';
import { returnErrors } from './errorActions';
// Remember: we need the action types in both reducers and actions
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';

// Check token and load the user
export const loadUser = () => async (dispatch, getState) => {
  // User loading dispatch action which will set the loading state to true
  dispatch({ type: USER_LOADING });
  try {
    // Fetch the user info from our API
    const user = await axios.get('/api/auth/user', tokenConfig(getState));
    // Dispatch user loaded action with the user information
    dispatch({ type: USER_LOADED, payload: user.data });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: AUTH_ERROR });
  }
};

// Setup config/headers and token helper
export const tokenConfig = (getState) => {
  // Get token from local storage (the state contains the token using .get()) and we stored it in our auth state so we can easily grab it
  const token = getState().auth.token;

  // Add token to authentication Bearer token to headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
};
