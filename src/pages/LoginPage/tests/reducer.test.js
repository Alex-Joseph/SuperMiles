import { fromJS } from 'immutable';
import { actionTypes } from '../constants';
import { initialState, authReducer } from '../reducer';


describe('reducer', () => {
  describe('initial state', () => {
    it('has an initial state', () => {
      expect(initialState).toMatchSnapshot();
    });
  });

  describe('state after reducer', () => {
    it('changes state after loginSuccess is called', () => {
      const action = { type: actionTypes.LOGIN_SUCCESS };

      expect(authReducer(initialState, action)).toMatchSnapshot();
    });

    it('changes state after loginFailure is called', () => {
      const action = { type: actionTypes.LOGIN_FAILURE };

      expect(authReducer(initialState, action)).toMatchSnapshot();
    });

    it('changes state after logout is called', () => {
      const state = fromJS({ loggedIn: true });
      const action = { type: actionTypes.LOGOUT };

      expect(authReducer(state, action)).toMatchSnapshot();
    });
  });
});
