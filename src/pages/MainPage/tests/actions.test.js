import { postTransaction, insufficientBalance, updateBalance } from '../actions';


describe('action creators', () => {
  it('creates a postTransaction action', () => {
    expect(postTransaction()).toMatchSnapshot();
  });

  it('creates a updateBalance action', () => {
    expect(updateBalance()).toMatchSnapshot();
  });

  it('creates a insufficientBalance action', () => {
    expect(insufficientBalance()).toMatchSnapshot();
  });
});
