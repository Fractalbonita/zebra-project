import React from 'react';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <NavigationLink title="Collection" address="/" icon="list" />
        <NavigationLink title="List" address="/reminderlist" icon="check" />
      </ul>
    </nav>
  );
}
