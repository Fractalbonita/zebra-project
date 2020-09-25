import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';
import { useNavToggle } from '../hooks/useNavToggle';

NavigationLink.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.string,
};

export default function NavigationLink({ title, address, icon }) {
  const [isActive, navToggle, showCaption] = useNavToggle();

  return (
    <li>
      <Link
        ref={navToggle}
        exact
        to={address}
        activeClassName="active"
        onClick={() => showCaption(true)}
      >
        <Icon icon={icon} />
        {isActive ? <span>{title}</span> : null}
      </Link>
    </li>
  );
}

const Link = styled(NavLink)`
  color: var(--text);
  display: flex;
  flex-direction: column;
  font-size: 12px;
  height: 48px;
  justify-content: center;
  outline: none;
  text-align: center;
  text-decoration: none;

  &.active {
    color: var(--primary);
    font-weight: 900;
  }

  &.hover {
    color: var(--primary);
  }
`;
