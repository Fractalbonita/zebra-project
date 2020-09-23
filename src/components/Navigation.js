import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

const AppLink = ({ title, address, icon }) => (
  <NavLink exact to={address} activeClassName="active">
    <Icon icon={icon} />
    {title}
  </NavLink>
);

export default function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <AppLink title="Collection" address="/" icon="list" />
          </li>
          <li>
            <AppLink title="List" address="/reminderlist" icon="check" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
