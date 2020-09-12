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

  function toggleReminderState(id) {
    const updatedReminders = reminders.map((reminder) =>
      id === reminder.id
        ? { ...reminder, completed: !reminder.completed }
        : reminder
    );
    setReminders(updatedReminders);
  }

  function deleteReminder(id) {
    const filteredReminders = reminders.filter(
      (reminder) => id !== reminder.id
    );
    setReminders(filteredReminders);
  }

  function editReminder(id, newName) {
    const editedReminders = reminders.map((reminder) =>
      id === reminder.id ? { ...reminder, reminder: newName } : reminder
    );
    setReminders(editedReminders);
  }

  return {
    reminders,
    addReminder,
    toggleReminderState,
    deleteReminder,
    editReminder,
  };
}
