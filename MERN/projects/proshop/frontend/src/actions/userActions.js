import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../reducers/actionTypes';

export const login = (email, password) => async (dispatch) => {
  try {
    // dispatch the action first to reducers - this simply is going to be used for setting some state for a loading bar or spinner
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('/api/users/login', config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data, // send this data as the payload for this action
    });
    // save the user information in local storage: contains the users id, name email, admin permission and token
    // we will want to load this initially (if it existed) into initial state in our store.js. See the code there
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }
};
