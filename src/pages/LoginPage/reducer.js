import { fromJS } from 'immutable';
import { actionTypes } from './constants';


export const initialState = fromJS({
  loggedIn: false,
  loginError: false,
});

export const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return state
        .set('loginError', false)
        .set('loggedIn', true);
    case actionTypes.LOGIN_FAILURE:
      return state
        .set('loginError', true);
    case actionTypes.LOGOUT:
      return state
        .set('loggedIn', false);
    default:
      return state;
  }
};
