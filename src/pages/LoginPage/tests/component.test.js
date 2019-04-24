import React from 'react';
import { shallow, mount } from 'enzyme';
import LoginPage from '../component';


describe('LoginPage', () => {
  it('renders correct snapshot', () => {
    const wrapper = shallow(
      <LoginPage
        loggedIn={false}
        loginError={false}
        history={{}}
        authenticateUser={jest.fn()}
      />
    );
    const expectedLabel = 'Username';
    const expectedType = 'password';
    const formInputs = wrapper.find('FormInput');

    expect(wrapper.find('Form').props().error).toBe(false);
    expect(formInputs).toHaveLength(2);
    expect(formInputs.first().props().label).toEqual(expectedLabel);
    expect(formInputs.last().props().type).toEqual(expectedType);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an error in the form if incorrect credentials are submitted', () => {
    const wrapper = shallow(
      <LoginPage
        loggedIn={false}
        loginError={true}
        history={{}}
        authenticateUser={jest.fn()}
      />
    );

    const expectedHeader = 'Login Failed';

    expect(wrapper.find('Form').props().error).toBe(true);
    expect(wrapper.find('Message').props().header).toEqual(expectedHeader);
  });

  it('calls authenticateUser with username and password onSubmit', () => {
    const authenticateUser = jest.fn();
    const wrapper = mount(
      <LoginPage
        history={{}}
        loggedIn={false}
        loginError={true}
        authenticateUser={authenticateUser}
      />
    );
    const username = 'user1';
    const password = 'password';

    wrapper.setState({ username, password });
    wrapper.find('[type="submit"]').at(0).simulate('submit');

    expect(authenticateUser).toHaveBeenCalledWith(username, password, {});
  });
});
