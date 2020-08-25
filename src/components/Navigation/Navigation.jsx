import React from 'react';
import PropTypes from 'prop-types';

import NavItem from '../NavItem';

import './Navigation.scss';

const Navigation = ({ birdGroups, index }) => {
  Navigation.propTypes = {
    birdGroups: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        id: PropTypes.number,
      })
    ).isRequired,
    index: PropTypes.number.isRequired,
  };

  return (
    <nav className="navigation">
      {birdGroups.map((el) => {
        const { id, value } = el;
        return (
          <NavItem
            key={id.toString()}
            value={value}
            index={index}
            id={id}
          />
        );
      })}
    </nav>
  );
};

export default Navigation;
