import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  saveReminders,
  fetchReminders,
} from '../services/remindersLocalStorageClient';

export function useLocalStorageForReminders() {
  const key = 'reminders';
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const reminders = fetchReminders(key);
    if (reminders) {
      setReminders(reminders);
    }
  }, []);

  useEffect(() => {
    saveReminders(key, reminders);
  }, [reminders]);

  function addReminder(reminder) {
    const newReminder = { reminder, id: uuid(), completed: false };
    setReminders([...reminders, newReminder]);
  }

  return [reminders, addReminder];
}
