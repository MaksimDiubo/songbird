import React from 'react';
import PropTypes from 'prop-types';

import './NavItem.scss';

const NavItem = ({ value, index, navClickHandler }) => {
  NavItem.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    navClickHandler: PropTypes.func.isRequired,
  };

  return (
    <li className="navItem">
      <button type="button" value={value} onClick={() => navClickHandler(index)}>
        {value}
      </button>
    </li>
  );
};

export default NavItem;
