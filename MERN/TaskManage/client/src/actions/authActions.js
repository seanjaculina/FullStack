import axios from 'axios';
import { returnErrors } from './errorActions';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
} from './types';

// Load user: used for initial load and reload
export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: getState().auth.token,
    },
  };

  try {
    const { data } = await axios.get('/api/auth/user', config);
    dispatch({ type: USER_LOADED, payload: data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register new user action
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email, password });

  try {
    // Perform the request
    const userRegister = await axios.post('/api/users', body, config);

    // Dispatch to state our succes with the new user
    dispatch({ type: REGISTER_SUCCESS, payload: userRegister.data });
  } catch (error) {
    dispatch(
      returnErrors(error.response.data, error.response.status, 'REGISTER_FAIL'),
    );
    dispatch({ type: REGISTER_FAIL });
  }
};

// Update user profile
export const updateUserProfile = (name, email) => async (
  dispatch,
  getState,
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (!name || name === '') {
    name = getState().auth.user.name;
  }
  if (!email || email === '') {
    email = getState().auth.user.email;
  }
  const body = JSON.stringify({ name, email });

  try {
    // Perform the request
    const { data } = await axios.put('/api/users', body, config);
    // Dispatch to state our succes with the new user
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch(
      returnErrors(
        error.response.data,
        error.response.status,
        'USER_UPDATE_FAIL',
      ),
    );
    dispatch({ type: USER_UPDATE_FAIL });
  }
};

// Login user
export const login = (user) => async (dispatch, getState) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email: user.email, password: user.password });

  try {
    const { data } = await axios.post('/api/auth', body, config);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch(
      returnErrors(error.response.data, error.response.status, 'LOGIN_FAIL'),
    );
    dispatch({ type: LOGIN_FAIL });
  }
};

// Logout action
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
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
