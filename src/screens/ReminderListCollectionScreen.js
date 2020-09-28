import React from 'react';
import ReminderListForm from '../components/ReminderListForm';
import { useLocalStorageForReminderList } from '../hooks/useLocalStorageForReminderList';

export default function ReminderListCollectionScreen() {
  const [
    reminderList,
    addReminderListTitle,
    addReminder,
    toggleReminderState,
    deleteReminder,
    editReminder,
    scheduleReminder,
  ] = useLocalStorageForReminderList();

  return (
    <>
      <h2>Lists</h2>
      <ReminderListForm addReminderListTitle={addReminderListTitle} />
    </>
  );
}
