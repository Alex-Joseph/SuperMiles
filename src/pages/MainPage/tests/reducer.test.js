import { fromJS } from 'immutable';
import { actionTypes } from '../constants';
import { initialState, walletReducer } from '../reducer';


describe('reducer', () => {
  describe('initial state', () => {
    it('has an initial state', () => {
      expect(initialState).toMatchSnapshot();
    });
  });

  describe('state after reducer', () => {
    it('changes state after updateBalance is called', () => {
      const action = {
        type: actionTypes.UPDATE_BALANCE,
        balance: 10000,
        transaction: {test: 'test'}
      };

      expect(walletReducer(initialState, action)).toMatchSnapshot();
    });

    it('changes state after closeErrorBanner is called', () => {
      const state = fromJS({ bannerVisible: true });
      const action = { type: actionTypes.CLOSE_ERROR_BANNER };

      expect(walletReducer(state, action)).toMatchSnapshot();
    });
  });
});
