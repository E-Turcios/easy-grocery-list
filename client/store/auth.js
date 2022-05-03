import axios from 'axios';
import history from '../routes/history';

const TOKEN = 'auth';

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH';

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });

/**
 * THUNK CREATORS
 */
export const fetchUserInfo = (token) => async (dispatch) => {
  if (token) {
    const res = await axios.get('/api/user', {
      headers: {
        authorization: 'Bearer ' + token,
      },
    });
    return dispatch(setAuth(res.data));
  }
};

export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
