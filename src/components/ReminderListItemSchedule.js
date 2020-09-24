import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

ReminderListItemSchedule.propTypes = {
  onClose: PropTypes.func,
  onSchedule: PropTypes.func,
};

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: 'var(--primary)',
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: 'var(--on-surface)',
        color: 'var(--text)',
      },
      iconButton: {
        backgroundColor: 'var(--on-surface)',
        color: 'var(--text)',
      },
      dayLabel: {
        color: 'var(--accent)',
      },
    },
    MuiIconButton: {
      label: {},
    },
    MuiPickersBasePicker: {
      pickerView: {
        backgroundColor: 'var(--on-surface)',
      },
    },
    MuiPickersDay: {
      day: {
        color: 'var(--text)',
        '&:hover': {
          backgroundColor: 'var(--text)',
          color: 'var(--surface)',
        },
      },
      daySelected: {
        backgroundColor: 'var(--primary)',
        '&:hover': {
          backgroundColor: 'var(--text)',
          color: 'var(--surface)',
        },
      },
      dayDisabled: {
        color: 'var(--accent)',
      },
      current: {
        color: 'var(--primary)',
      },
    },
    MuiDialogActions: {
      root: {
        backgroundColor: 'var(--on-surface)',
      },
    },
    MuiButton: {
      label: {
        color: 'var(--primary)',
      },
    },
    MuiPickersYear: {
      root: {
        color: 'var(--text)',
      },
      yearSelected: {
        color: 'var(--primary)',
      },
    },
  },
});

export default function ReminderListItemSchedule({ onClose, onSchedule }) {
  const [date, setDate] = useState(new Date());

  return (
    <ThemeProvider theme={materialTheme}>
      <DatePicker
        variant="dialog"
        value={date}
        onChange={setDate}
        open={true}
        onClose={onClose}
        onAccept={onSchedule}
        format="dd MMM yyyy"
        disablePast={true}
        maxDate="2030-01-01"
        minDate="2019-01-01"
        ampm={false}
        TextFieldComponent={() => null}
      />
    </ThemeProvider>
  );
}
