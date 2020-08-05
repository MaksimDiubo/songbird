import React from 'react';
import PropTypes from 'prop-types';

import NavItem from '../NavItem';

import './Navigation.scss';

const Navigation = ({ birdGroups, navClickHandler }) => {
  Navigation.propTypes = {
    navClickHandler: PropTypes.func.isRequired,
    birdGroups: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        id: PropTypes.number,
      })
    ).isRequired,
  };

  return (
    <nav className="navigation">
      {birdGroups.map((el, i) => {
        const { id, value } = el;
        return (
          <NavItem
            key={id.toString()}
            value={value}
            index={i}
            navClickHandler={navClickHandler}
          />
        );
      })}
    </nav>
  );
};

export default Navigation;
