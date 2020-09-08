import React from 'react';
import styled from 'styled-components';
import Reminder from './Reminder';

export default function ({ reminders }) {
  return (
    <>
      <Counter>
        <span>{reminders.length} </span>
        <span>{reminders.length !== 1 ? 'reminders' : 'reminder'}</span>
      </Counter>
      <List>
        {reminders &&
          reminders.map((reminder) => (
            <Reminder
              key={reminder.id}
              name={reminder}
              status={reminder.completed}
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
