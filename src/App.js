import React from 'react';
import ModeSwitcher from './components/ModeSwitcher';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ReminderListView from './screens/ReminderListScreen';

function App() {
  return (
    <div className="app">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <h1>Hello Zebra!</h1>
        <ModeSwitcher />
        <ReminderListView />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
