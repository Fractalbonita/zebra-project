import React from 'react';
import ReminderListCollection from '../components/ReminderListCollection';
import ReminderListForm from '../components/ReminderListForm';

export default function ReminderListCollectionScreen() {
  return (
    <>
      <h2>Lists</h2>
      <ReminderListForm />
      <ReminderListCollection />
    </>
  );
}
