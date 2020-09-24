import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';

NavigationLink.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.string,
};

export default function NavigationLink({ title, address, icon }) {
  return (
    <li>
      <Link exact to={address} activeClassName="active">
        <Icon icon={icon} />
        {title}
      </Link>
    </li>
  );
}

const Link = styled(NavLink)`
  color: var(--accent);
  display: flex;
  flex-direction: column;
  height: 48px;
  justify-content: center;
  outline: none;
  text-align: center;
  text-decoration: none;

  &.active {
    color: var(--primary);
    font-weight: 900;
  }
`;

// margin: 0;
// padding: 0 5px;
// text-transform: uppercase;
