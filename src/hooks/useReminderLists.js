import { useEffect, useState } from 'react';
import {
  saveReminders,
  fetchReminders,
} from '../services/remindersLocalStorageClient';

export function useReminderLists() {
  const key = 'reminderLists';
  const [reminderLists, setReminderLists] = useState([]);

  useEffect(() => {
    if (reminderLists.length > 0) {
      saveReminders(key, reminderLists);
    }
  }, [reminderLists]);

  useEffect(() => {
    const reminderLists = fetchReminders(key);
    if (reminderLists) {
      setReminderLists(reminderLists);
    }
  }, []);

  return [reminderLists, setReminderLists];
}
