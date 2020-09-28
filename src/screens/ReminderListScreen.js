import React, { useState } from 'react';
import ReminderForm from '../components/ReminderForm';
import { useLocalStorageForReminderList } from '../hooks/useLocalStorageForReminderList';
import ReminderList from '../components/ReminderList';
import ReminderListFilter from '../components/ReminderListFilter';
import ReminderListTitle from '../components/ReminderListTitle';
import ReminderListForm from '../components/ReminderListForm';

export default function ReminderListScreen() {
  const [
    reminderList,
    addReminderListTitle,
    addReminder,
    toggleReminderState,
    deleteReminder,
    editReminder,
    scheduleReminder,
  ] = useLocalStorageForReminderList();

  const { reminders, listTitle } = reminderList;
  const [filter, setFilter] = useState('Active');

  return (
    <>
      <ReminderListForm addReminderListTitle={addReminderListTitle} />
      <ReminderListTitle listTitle={listTitle} />
      <ReminderListFilter
        filter={filter}
        onFilter={(state) => {
          setFilter(state);
        }}
      />
      <ReminderList
        reminders={reminders}
        toggleReminderState={toggleReminderState}
        deleteReminder={deleteReminder}
        editReminder={editReminder}
        filter={filter}
        scheduleReminder={scheduleReminder}
      />
      <ReminderForm addReminder={addReminder} />
    </>
  );
}
