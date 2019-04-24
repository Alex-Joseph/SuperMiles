import { actionTypes } from './constants';


export const authenticateUser = (username, password, history) => (dispatch) => {
  if (username === 'username' && password === 'password') {
    dispatch(loginSuccess())
    history.push('/');
  } else {
    dispatch(loginFailure())
  }
};

export const logoutUser = history => (dispatch) => {
  history.push('/login');
  dispatch(logout())
};

export const loginSuccess = () => ({
  type: actionTypes.LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: actionTypes.LOGIN_FAILURE,
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});
