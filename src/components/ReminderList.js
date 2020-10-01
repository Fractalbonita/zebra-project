import React from 'react';
import styled from 'styled-components';
import ReminderListItem from './ReminderListItem';
import { FILTER_MAP } from './ReminderListFilter';
import PropTypes from 'prop-types';
import { useReminderList } from '../hooks/useReminderList';

ReminderList.propTypes = {
  reminders: PropTypes.array,
  toggleReminderState: PropTypes.func,
  deleteReminder: PropTypes.func,
  editReminder: PropTypes.func,
  filter: PropTypes.string,
  scheduleReminder: PropTypes.func,
};

export default function ReminderList({
  toggleReminderState,
  deleteReminder,
  editReminder,
  filter,
  scheduleReminder,
  listId,
}) {
  const { reminderList } = useReminderList(listId);

  return (
    <>
      <List>
        {reminderList.reminders &&
          reminderList.reminders
            .filter((reminder) => FILTER_MAP[filter](reminder))
            .map(({ id, reminder, completed, dueDate }) => (
              <ReminderListItem
                previousName={reminder}
                key={id}
                id={id}
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

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
