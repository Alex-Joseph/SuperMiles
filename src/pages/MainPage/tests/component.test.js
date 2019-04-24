import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../component';


describe('MainPage', () => {
  const postTransaction = jest.fn();
  const logoutUser = jest.fn();
  const push = jest.fn();
  const history = {push};
  const balance = 20000;
  const BLUE = 'blue';

  it('renders correct snapshot', () => {
    const wrapper = shallow(
      <MainPage
        loggedIn={true}
        balance={balance}
        history={history}
        logoutUser={logoutUser}
        postTransaction={postTransaction}
      />,
    );

    expect(wrapper.find('#purchase').props().disabled).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('when state is updated the correct radio button is checked', () => {
    const wrapper = shallow(
      <MainPage
        loggedIn={true}
        balance={balance}
        history={history}
        logoutUser={logoutUser}
        postTransaction={postTransaction}
      />,
    );

    wrapper.setState({cart: BLUE});

    const radioButton = wrapper.find('FormRadio').first();

    expect(radioButton.props().checked).toBe(true);
    expect(radioButton.props().value).toBe(BLUE);
  });

  it('calls logoutUser when the Cancel button is pressed', () => {
    const wrapper = shallow(
      <MainPage
        loggedIn={true}
        balance={balance}
        history={history}
        logoutUser={logoutUser}
        postTransaction={postTransaction}
      />,
    );

    wrapper.find('#cancel').simulate('click');

    expect(logoutUser).toHaveBeenCalledWith(history);
  });

  it('the modal can open and close when a product is selected', () => {
    const wrapper = shallow(
      <MainPage
        loggedIn={true}
        balance={balance}
        history={history}
        logoutUser={logoutUser}
        postTransaction={postTransaction}
      />,
    );

    wrapper.setState({cart: BLUE});
    wrapper.find('#purchase').simulate('click');

    expect(wrapper.find('Modal').props().open).toBe(true);

    wrapper.find('#close').simulate('click');

    expect(wrapper.find('Modal').props().open).toBe(false);
  });

  it('calls postTransaction when a user purchases a product', () => {
    const wrapper = shallow(
      <MainPage
        loggedIn={true}
        balance={balance}
        history={history}
        logoutUser={logoutUser}
        postTransaction={postTransaction}
      />,
    );

    wrapper.setState({cart: BLUE});
    wrapper.find('#purchase').simulate('click');
    wrapper.find('#confirm').simulate('click');

    const expectedProduct = {cost: 30000, desc: BLUE};
    expect(postTransaction).toHaveBeenCalledWith(balance, expectedProduct, history);
  });
});
