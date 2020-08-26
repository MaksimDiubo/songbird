import React from 'react';
import PropTypes from 'prop-types';

import './NavItem.scss';

const NavItem = ({ value, id, index }) => {
  NavItem.propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  };

  return <li className={id === index + 1 ? 'navItem active' : 'navItem'}>{value}</li>;
};

export default NavItem;
