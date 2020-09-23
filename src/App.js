import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Header from './components/Header';
import ReminderListScreen from './screens/ReminderListScreen';
import ReminderListCollectionScreen from './screens/ReminderListCollectionScreen';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="app">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={ReminderListCollectionScreen} />
            <Route path="/reminderlist" component={ReminderListScreen} />
          </Switch>
        </main>
        <Navigation />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
