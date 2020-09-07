import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function ReminderForm({ addReminder }) {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addReminder(value);
        setValue('');
      }}
    >
      <label for="reminder">Add reminder</label>
      <StyledInput
        ide="reminder"
        type="text"
        placeholder="e.g. Foo"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></StyledInput>
      <Button type="submit" name="add" icon="add"></Button>
    </form>
  );
}

const StyledInput = styled.input`
  background-color: var(--surface);
  color: var(--text);
`;
