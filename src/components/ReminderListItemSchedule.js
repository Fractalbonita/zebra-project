import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import PropTypes from 'prop-types';

ReminderListItemSchedule.propTypes = {
  onClose: PropTypes.func,
  onSchedule: PropTypes.func,
};

export default function ReminderListItemSchedule({ onClose, onSchedule }) {
  const [date, setDate] = useState(new Date());
  return (
    <DatePicker
      variant="dialog"
      value={date}
      onChange={setDate}
      open={true}
      onClose={onClose}
      onAccept={onSchedule}
      format="dd MMM yyyy"
      disablePast={true}
      maxDate="2025-01-01"
      ampm={false}
      TextFieldComponent={() => null}
    />
  );
}
