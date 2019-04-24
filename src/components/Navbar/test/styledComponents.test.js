import React from 'react';
import { shallow } from 'enzyme';
import { StyledNavbar } from '../styledComponents';


describe('StyledNavbar', () => {
  it('renders correct snapshot for a StyledNavbar', () => {
    const wrapper = shallow(<StyledNavbar />);

    expect(wrapper).toMatchSnapshot();
  });
});
