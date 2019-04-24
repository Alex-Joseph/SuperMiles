import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../Navbar';


describe('Navbar', () => {
  it('renders the correct title', () => {
    const expectedTitle = "test title";

    const wrapper = shallow(<Navbar title={expectedTitle} />);

    expect(wrapper.props().children).toEqual(expectedTitle);
  });
});
