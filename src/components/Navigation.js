import React from 'react';
import styled from 'styled-components';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  return (
    <Nav>
      <ul>
        <NavigationLink
          title="Collection"
          address="/"
          icon="playlist_add_check"
        />
        <NavigationLink title="List" address="/reminderlist" icon="check" />
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  align-items: center;
  background-color: var(--surface);
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr;
  height: 56px;
  left: 0;
  position: fixed;
  right: 0;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
