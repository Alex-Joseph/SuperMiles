import { logoutUser } from '../LoginPage/actions';
import { postTransaction } from './actions';


export const mapStateToProps = state => ({
  loggedIn: state.toJS().auth.loggedIn,
  balance: state.toJS().wallet.balance,
  insufficientBalance: state.toJS().wallet.insufficientBalance,
});

export const mapDispatchToProps = {
  logoutUser,
  postTransaction,
};
