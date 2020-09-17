import React from 'react';
import styled from 'styled-components';
import ReminderListItem from './ReminderListItem';
import { FILTER_MAP } from './ReminderListFilter';
import PropTypes from 'prop-types';

ReminderList.propTypes = {
  reminders: PropTypes.array,
  toggleReminderState: PropTypes.func,
  deleteReminder: PropTypes.func,
  editReminder: PropTypes.func,
  filter: PropTypes.string,
  scheduleReminder: PropTypes.func,
};

export default function ReminderList({
  reminders,
  toggleReminderState,
  deleteReminder,
  editReminder,
  filter,
  scheduleReminder,
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
            .map(({ id, reminder, completed, dueDate }) => (
              <ReminderListItem
                previousName={reminder}
                key={id}
                name={reminder}
                completed={completed}
                dueDate={dueDate}
                onCheck={() => toggleReminderState(id)}
                onDelete={() => deleteReminder(id)}
                onChange={(newName) => editReminder(id, newName)}
                onSchedule={(date) => scheduleReminder(id, date)}
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
