import React, { useState } from 'react';
import ModeSwitcher from './components/ModeSwitcher';
import GlobalStyles from './styles/GlobalStyles';
import ReminderForm from './components/ReminderForm';
import { useLocalStorageForReminders } from './hooks/useLocalStorageForReminders';
import ReminderList from './components/ReminderList';
import ReminderListFilter from './components/ReminderListFilter';

function App() {
  const {
    reminders,
    addReminder,
    toggleReminderState,
    deleteReminder,
    editReminder,
  } = useLocalStorageForReminders();

  const [filter, setFilter] = useState('All');

  return (
    <div className="app">
      <GlobalStyles />
      <h1>Hello Zebra!</h1>
      <ModeSwitcher />
      <ReminderListFilter
        filter={filter}
        onFilter={(state) => {
          setFilter(state);
        }}
      />
      <ReminderList
        reminders={reminders}
        toggleReminderState={toggleReminderState}
        deleteReminder={deleteReminder}
        editReminder={editReminder}
        filter={filter}
      />
      <ReminderForm addReminder={addReminder} />
    </div>
  );
}

export default App;
