import React from 'react';
import styled from 'styled-components';
import Reminder from './ReminderListItem';
import { FILTER_MAP } from './ReminderListFilter';
import PropTypes from 'prop-types';

ReminderList.propTypes = {
  reminders: PropTypes.array,
  toggleReminderState: PropTypes.func,
  deleteReminder: PropTypes.func,
  editReminder: PropTypes.func,
  filter: PropTypes.string,
};

export default function ReminderList({
  reminders,
  toggleReminderState,
  deleteReminder,
  editReminder,
  filter,
}) {
  return (
    <>
      <Counter>
        <span>{reminders.length}</span>
        <span>{reminders.length !== 1 ? ' reminders' : ' reminder'}</span>
      </Counter>
      <List>
        {reminders &&
          reminders
            .filter((reminder) => FILTER_MAP[filter](reminder))
            .map(({ id, reminder, completed }) => (
              <Reminder
                previousName={reminder}
                key={id}
                name={reminder}
                completed={completed}
                onCheck={() => toggleReminderState(id)}
                onDelete={() => deleteReminder(id)}
                onChange={(newName) => editReminder(id, newName)}
              />
            ))}
      </List>
    </>
  );
}

const Counter = styled.div`
  margin: 0.5rem 0;

  span:first-of-type {
    font-size: 20px;
    font-weight: bold;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
