import React from 'react';
import ReminderListCollectionItem from './ReminderListCollectionItem';
import { useReminderLists } from '../hooks/useReminderLists';

export default function ReminderListCollection() {
  const [reminderLists] = useReminderLists();

  return (
    <>
      {reminderLists &&
        reminderLists.map(({ listId, listTitle, reminders }) => (
          <ReminderListCollectionItem
            key={listId}
            listId={listId}
            title={listTitle}
            reminders={reminders}
          />
        ))}
    </>
  );
}
