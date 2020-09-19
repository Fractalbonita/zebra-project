import React, { useState } from 'react';
import ModeSwitcher from './components/ModeSwitcher';
import ReminderForm from './components/ReminderForm';
import { useLocalStorageForReminders } from './hooks/useLocalStorageForReminders';
import ReminderList from './components/ReminderList';
import ReminderListFilter from './components/ReminderListFilter';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import DropDownMenu from './components/DropDownMenu';

function App() {
  const {
    reminders,
    addReminder,
    toggleReminderState,
    deleteReminder,
    editReminder,
    scheduleReminder,
  } = useLocalStorageForReminders();

  const [filter, setFilter] = useState('Active');

  return (
    <div className="app">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
          scheduleReminder={scheduleReminder}
        />
        <DropDownMenu />
        <ReminderForm addReminder={addReminder} />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
