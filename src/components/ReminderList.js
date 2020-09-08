import React from 'react';
import styled from 'styled-components';
import Reminder from './Reminder';

export default function ReminderList({ reminders }) {
  return (
    <div>
      <StyledCounter>
        <span>{reminders.length} </span>
        <span>{reminders.length !== 1 ? 'reminders' : 'reminder'}</span>
      </StyledCounter>
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

const StyledCounter = styled.div`
  margin: 0.5rem 0;

  span:first-of-type {
    font-size: 20px;
    font-weight: bold;
  }
`;

const StyledReminderList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
