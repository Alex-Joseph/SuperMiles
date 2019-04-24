import React from 'react';
import { shallow } from 'enzyme';
import ReceiptPage from '../component';


describe('ReceiptPage', () => {
  const balance = 10000;
  const logoutUser = jest.fn();
  const push = jest.fn();
  const transaction = {desc: 'black'};

  it('renders correct snapshot', () => {
    const wrapper = shallow(
      <ReceiptPage
        balance={balance}
        logoutUser={logoutUser}
        transaction={transaction}
        history={{push}}
      />,
    );
    const expectedImageSrc = 'air_buds_black.jpg';

    expect(wrapper.find('Header').props().children[1]).toEqual(balance);
    expect(wrapper.find('Image').props().src).toEqual(expectedImageSrc);
    expect(wrapper).toMatchSnapshot();
  });

  it('calles logoutUser when the Logout Button is clicked', () => {
    const wrapper = shallow(
      <ReceiptPage
        balance={balance}
        logoutUser={logoutUser}
        transaction={transaction}
        history={{push}}
      />,
    );

    wrapper.find('Button').simulate('click');

    expect(logoutUser).toHaveBeenCalledWith({push});
  });
});
