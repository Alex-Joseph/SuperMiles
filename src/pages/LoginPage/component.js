import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Message } from 'semantic-ui-react';
import { StyledLoginWrapper } from './styledComponents';
import Navbar from '../../components/Navbar';


class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  }

  onChangeUserName = ev => this.setState({ username: ev.target.value });

  onChangePassword = ev => this.setState({ password: ev.target.value });

  handleSubmit = () => {
    const { username, password } = this.state;
    this.props.authenticateUser(username, password, this.props.history);
  }

  render() {
    const { loginError } = this.props;

    return (
      <Fragment>
        <Navbar title="SuperMiles" />
        <StyledLoginWrapper>
          <Form error={loginError} onSubmit={this.handleSubmit}>
            <Form.Input
              label='Username'
              value={this.state.username}
              onChange={this.onChangeUserName}
              type='text'
              maxLength={50}
              autoComplete='username'
            />
            <Form.Input
              label='Password'
              type='password'
              value={this.state.password}
              onChange={this.onChangePassword}
              maxLength={30}
              autoComplete='current-password'
            />
            <Message
              error
              header='Login Failed'
              content='please check your username and password'
              />
            <Button type="submit">Submit</Button>
          </Form>
        </StyledLoginWrapper>
      </Fragment>
    )
  }
}

LoginPage.propTypes = {
  loginError: PropTypes.bool.isRequired,
};

export default LoginPage
