import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Header, Image, Button } from 'semantic-ui-react';
import { StyledMarketPlaceWrapper } from './styledComponents';
import Navbar from '../../components/Navbar';
import AirBudsBlue from '../../images/air_buds_blue.jpg';
import AirBudsBlack from '../../images/air_buds_black.jpg';


const imageMap = {
  'black': AirBudsBlack,
  'blue': AirBudsBlue,
};

const ReceiptPage = ({ balance, logoutUser, transaction, loggedIn, history }) => (
  <Fragment>
    <Navbar title="SuperMiles" />
    <StyledMarketPlaceWrapper>
      <Header as='h1'>New Balance: {balance}</Header>
      <Image src={imageMap[transaction.desc]} size='medium' rounded />
      <Button onClick={() => logoutUser(history)}>Logout</Button>
    </StyledMarketPlaceWrapper>
  </Fragment>
);

ReceiptPage.propTypes = {
  balance: PropTypes.number.isRequired,
  logoutUser: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  transaction: PropTypes.shape({}).isRequired,
};

ReceiptPage.defaultProps = {
  transaction: {},
};

export default ReceiptPage
