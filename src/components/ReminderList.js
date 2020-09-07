import React from 'react';
import styled from 'styled-components';
import Reminder from './Reminder';

export default function ReminderList({ reminders }) {
  return (
    <div>
      <span>{reminders.length} </span>
      <span>{reminders.length !== 1 ? 'reminders' : 'reminder'}</span>
      <StyledReminderList>
        {reminders &&
          reminders.map((reminder) => (
            <Reminder
              key={reminder.id}
              name={reminder}
              status={reminder.completed}
            />
          ))}
      </StyledReminderList>
    </div>
  );
}

const StyledReminderList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
