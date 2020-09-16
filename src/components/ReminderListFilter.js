import React from 'react';
import styled from 'styled-components';
import TextButton from './Buttons/TextButton';
import PropTypes from 'prop-types';

ReminderListFilter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

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
        <TextButton
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem 0;
`;
