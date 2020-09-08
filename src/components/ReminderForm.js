import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function ReminderForm({ addReminder }) {
  const [value, setValue] = useState('');

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        addReminder(value);
        setValue('');
      }}
    >
      <StyledLabel htmlFor="reminder">Add reminder</StyledLabel>
      <StyledContainer>
        <StyledInput
          ide="reminder"
          type="text"
          placeholder="e.g. Foo"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></StyledInput>
        <Button type="submit" name="add" icon="add"></Button>
      </StyledContainer>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: fixed;
  bottom: 50px;
  width: calc(100vw - 40px);
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 14px;
  margin: 0.5rem 0;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledInput = styled.input`
  background-color: var(--surface);
  border: none;
  border-bottom: 1px solid var(--text);
  border-top: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  color: var(--text);
  height: 36px;
  font-size: 16px;
  padding: 0 10px;
  width: 100%;

  &::placeholder {
    font-size: 14px;
  }

  &:hover {
    cursor: text;
  }

  &:focus {
    border: 1.5px solid var(--primary);
  }
`;
