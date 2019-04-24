import { logoutUser } from '../LoginPage/actions';


export const mapStateToProps = state => ({
  loggedIn: state.toJS().auth.loggedIn,
  balance: state.toJS().wallet.balance,
  transaction: state.toJS().wallet.transaction,
});

export const mapDispatchToProps = {
  logoutUser,
};
