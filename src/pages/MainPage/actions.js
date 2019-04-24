import { actionTypes } from './constants';


export const postTransaction = (balance, product, history) => (dispatch) => {
  if (balance >= product.cost) {
    dispatch(updateBalance(balance - product.cost, product.desc));
    history.push('/receipt');
  } else {
    dispatch(insufficientBalance());
  }
};

export const updateBalance = (newBalance, desc) => ({
  type: actionTypes.UPDATE_BALANCE,
  balance: newBalance,
  transaction: { desc },
});

export const insufficientBalance = () => ({
  type: actionTypes.INSUFFICIENT_BALANCE,
});
