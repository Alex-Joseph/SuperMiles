import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Header, Image, Button, Divider, Modal, Icon } from 'semantic-ui-react';
import { StyledMarketPlaceWrapper, StyledProductsWrapper } from './styledComponents';
import Navbar from '../../components/Navbar';
import AirBudsBlue from '../../images/air_buds_blue.jpg';
import AirBudsBlack from '../../images/air_buds_black.jpg';


const BLACK = 'black';
const BLUE = 'blue';

const priceMap = {
  'black': 40000,
  'blue': 30000,
};

class MainPage extends Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      this.props.history.push('/login');
    }
  };

  state = { cart: null };

  handleCart = (e, { value }) => this.setState({ cart: value });

  handleConfirm = () => this.setState({ modalOpen: true });

  handleCancel = () => this.setState({ modalOpen: false });

  handleTransaction = () => {
    const { postTransaction, balance, history } = this.props;
    const product = {
      cost: priceMap[this.state.cart],
      desc: this.state.cart,
    };
    postTransaction(balance, product, history);
  };

  render() {
    const { cart } = this.state;
    const { balance, logoutUser, history } = this.props;

    return (
      <Fragment>
        <Navbar title="SuperMiles" />
        <StyledMarketPlaceWrapper>
          <Header as='h1'>Balance: {balance}</Header>
          <StyledProductsWrapper>
            <div>
              <Image src={AirBudsBlue} size='medium' rounded />
              <Form.Radio
                label='Blue - 40000 points'
                value={BLUE}
                checked={cart === BLUE}
                onChange={this.handleCart}
              />
            </div>
            <div>
              <Image src={AirBudsBlack} size='medium' rounded />
              <Form.Radio
                label='Black - 30000 points'
                value={BLACK}
                checked={cart === BLACK}
                onChange={this.handleCart}
              />
            </div>
          </StyledProductsWrapper>
          <Divider horizontal></Divider>
          <Button.Group>
            <Button id="cancel" onClick={() => logoutUser(history)}>
              Cancel
            </Button>
            <Button.Or />
            <Button
              positive
              id="purchase"
              onClick={this.handleConfirm}
              disabled={!cart}
            >
              Purchase
            </Button>
          </Button.Group>
        </StyledMarketPlaceWrapper>
        <Modal open={this.state.modalOpen} basic size='small'>
          <Header icon='shopping cart' content='Confirm Order' />
          <Modal.Content>
            <p>
              Would you like to confirm your order for {priceMap[cart]} points?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              basic
              inverted
              color='red'
              id='close'
              onClick={this.handleCancel}
            >
              <Icon name='remove' /> No
            </Button>
            <Button
              inverted
              color='green'
              id='confirm'
              onClick={this.handleTransaction}
            >
              <Icon name='checkmark' /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </Fragment>
    )
  }
}

MainPage.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  balance: PropTypes.number.isRequired,
  logoutUser: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  postTransaction: PropTypes.func.isRequired,
};

export default MainPage
