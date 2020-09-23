import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from './Icon';

NavigationLink.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.string,
};

export default function NavigationLink({ title, address, icon }) {
  return (
    <li>
      <NavLink exact to={address} activeClassName="active">
        <Icon icon={icon} />
        {title}
      </NavLink>
    </li>
  );
}
