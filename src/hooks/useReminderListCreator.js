import { useEffect, useState } from 'react';
import { useReminderLists } from './useReminderLists';
import { v4 as uuid } from 'uuid';

export function useReminderListCreator(compareValue) {
  const [reminderLists, setReminderLists] = useReminderLists();
  const [listId, setListId] = useState();

  function addReminderList(title) {
    const newReminderList = { listId: uuid(), listTitle: title, reminders: [] };
    setReminderLists([...reminderLists, newReminderList]);
  }

  useEffect(() => {
    const listId = reminderLists
      .filter(({ listTitle }) => compareValue(listTitle))
      .map(({ listId }) => listId)
      .pop();
    setListId(listId);
  }, [reminderLists, compareValue]);

  return [listId, addReminderList];
}
