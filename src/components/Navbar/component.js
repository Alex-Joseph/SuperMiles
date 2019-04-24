import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavbar } from './styledComponents';


const Navbar = ({ title }) => (
  <StyledNavbar>{title}</StyledNavbar>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
