import React from 'react';
import ModeSwitcher from './components/ModeSwitcher';
import GlobalStyles from './styles/GlobalStyles';
import ReminderForm from './components/ReminderForm';
import { useLocalStorageForReminders } from './hooks/useLocalStorageForReminders';
import ReminderList from './components/ReminderList';

function App() {
  const {
    reminders,
    addReminder,
    toggleReminderState,
  } = useLocalStorageForReminders();

  return (
    <div className="app">
      <GlobalStyles />
      <h1>Hello Zebra!</h1>
      <ModeSwitcher />
      <ReminderList
        reminders={reminders}
        toggleReminderState={toggleReminderState}
      />
      <ReminderForm addReminder={addReminder} />
    </div>
  );
}

export default App;
