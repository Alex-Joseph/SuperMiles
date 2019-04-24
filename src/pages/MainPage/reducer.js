import { fromJS } from 'immutable';
import { actionTypes } from './constants';


export const initialState = fromJS({
  balance: 50000,
  transaction: null,
});

export const walletReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.UPDATE_BALANCE:
      return state
        .set('balance', action.balance)
        .set('transaction', action.transaction);
    default:
      return state;
  }
};
