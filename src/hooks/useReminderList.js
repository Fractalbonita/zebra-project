import { useEffect, useState } from 'react';
import { useReminderLists } from './useReminderLists';
import { v4 as uuid } from 'uuid';

export function useReminderList(listId) {
  const [reminderLists, setReminderLists] = useReminderLists();
  const [reminderList, setReminderList] = useState({ reminders: [] });

  useEffect(() => {
    const reminderList = reminderLists.find((list) => list.listId === listId);
    if (reminderList) setReminderList(reminderList);
  }, [reminderLists, listId]);

  function addReminder(reminder) {
    const newReminder = { reminder: reminder, id: uuid(), completed: false };
    const reminderListsCopy = reminderLists.map((list) => {
      if (list.listId === listId) {
        return { ...list, reminders: [...list.reminders, newReminder] };
      }
      return { ...list };
    });
    setReminderLists(reminderListsCopy);
  }

  return { reminderList, addReminder };
}
