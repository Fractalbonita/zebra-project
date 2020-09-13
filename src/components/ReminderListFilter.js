import React from 'react';
import styled from 'styled-components';
import Button from './Button';

// object with functions as values
// Functions are used to filter the reminder array
export const FILTER_MAP = {
  All: () => true,
  Active: (reminder) => !reminder.completed,
  Completed: (reminder) => reminder.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function ReminderListFilter({ filter, onFilter }) {
  return (
    <Container>
      {FILTER_NAMES.map((name) => (
        <Button
          key={name}
          title={name}
          type="button"
          name="filter"
          isPressed={name === filter}
          onClick={() => onFilter(name)}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem 0;
`;
