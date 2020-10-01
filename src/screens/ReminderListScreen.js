import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReminderForm from '../components/ReminderForm';
import ReminderList from '../components/ReminderList';
import ReminderListFilter from '../components/ReminderListFilter';
import ReminderListTitle from '../components/ReminderListTitle';
import styled from 'styled-components';
import { useReminderList } from '../hooks/useReminderList';

export default function ReminderListScreen() {
  const [filter, setFilter] = useState('Active');
  const { listId } = useParams();
  const { reminderList } = useReminderList(listId);
  const { listTitle, reminders } = reminderList;

  return (
    <>
      <ReminderListTitle listTitle={listTitle} />
      <Counter>
        <span>{reminders.length}</span>
        <span>{reminders.length !== 1 ? ' reminders' : ' reminder'}</span>
      </Counter>
      <ReminderListFilter
        filter={filter}
        onFilter={(state) => {
          setFilter(state);
        }}
      />
      {listId && (
        <>
          <ReminderList listId={listId} filter={filter} />
          <ReminderForm listId={listId} />
        </>
      )}
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
