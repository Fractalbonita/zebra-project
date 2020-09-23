import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  saveReminders,
  fetchReminders,
} from '../services/remindersLocalStorageClient';

export function useLocalStorageForReminderList() {
  const key = 'reminderList';
  const [reminderList, setReminderList] = useState({
    listTitle: '',
    reminders: [],
  });
  const { reminders } = reminderList;

  useEffect(() => {
    const reminderList = fetchReminders(key);
    if (reminderList) {
      setReminderList(reminderList);
    }
  }, []);

  useEffect(() => {
    saveReminders(key, reminderList);
  }, [reminderList]);

  function addReminderListTitle(title) {
    setReminderList({ ...reminderList, listTitle: title });
  }

  function addReminder(reminder) {
    const newReminder = { reminder, id: uuid(), completed: false };
    setReminderList({
      ...reminderList,
      reminders: [...reminders, newReminder],
    });
  }

  function toggleReminderState(id) {
    const updatedReminders = reminders.map((reminder) =>
      id === reminder.id
        ? { ...reminder, completed: !reminder.completed }
        : reminder
    );
    setReminderList({ ...reminderList, reminders: updatedReminders });
  }

  function deleteReminder(id) {
    const filteredReminders = reminders.filter(
      (reminder) => id !== reminder.id
    );
    setReminderList({ ...reminderList, reminders: filteredReminders });
  }

  function editReminder(id, newName) {
    const editedReminders = reminders.map((reminder) =>
      id === reminder.id ? { ...reminder, reminder: newName } : reminder
    );
    setReminderList({ ...reminderList, reminders: editedReminders });
  }

  function scheduleReminder(id, date) {
    const scheduledReminders = reminders.map((reminder) =>
      id === reminder.id ? { ...reminder, dueDate: date.getTime() } : reminder
    );
    setReminderList({ ...reminderList, reminders: scheduledReminders });
  }

  return {
    reminderList,
    addReminderListTitle,
    addReminder,
    toggleReminderState,
    deleteReminder,
    editReminder,
    scheduleReminder,
  };
}
