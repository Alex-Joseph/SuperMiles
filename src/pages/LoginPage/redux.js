import { authenticateUser } from './actions';


export const mapStateToProps = state => ({
  loggedIn: state.toJS().auth.loggedIn,
  loginError: state.toJS().auth.loginError,
});

export const mapDispatchToProps = {
  authenticateUser,
};
