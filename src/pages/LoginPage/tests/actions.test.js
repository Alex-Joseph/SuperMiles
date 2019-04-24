import { authenticateUser, loginSuccess, loginFailure, logout } from '../actions';


describe('action creators', () => {
  it('creates a authenticateUser action', () => {
    expect(authenticateUser()).toMatchSnapshot();
  });
  it('creates a loginSuccess action', () => {
    expect(loginSuccess()).toMatchSnapshot();
  });

  it('creates a loginFailure action', () => {
    expect(loginFailure()).toMatchSnapshot();
  });

  it('creates a logout action', () => {
    expect(logout()).toMatchSnapshot();
  });
});
