import React, { useState } from 'react';
import styled from 'styled-components';
import FormIconButton from './Buttons/FormIconButton';
import PropTypes from 'prop-types';
import { useReminderList } from '../hooks/useReminderList';

ReminderForm.propTypes = {
  listId: PropTypes.string,
};

export default function ReminderForm({ listId }) {
  const [value, setValue] = useState('');

  const { addReminder } = useReminderList(listId);

  const submitReminder = (event) => {
    event.preventDefault();
    addReminder(value);
    setValue('');
  };
  const updateValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <Form onSubmit={submitReminder}>
      <label htmlFor="reminder">Add reminder</label>
      <Container>
        <input
          id="reminder"
          type="text"
          placeholder="e.g. Foo"
          value={value}
          min="1"
          onChange={updateValue}
        />
        <FormIconButton
          disabled={!value}
          type="submit"
          title="Add"
          name="add"
          icon="add"
          isHidden={true}
        />
      </Container>
    </Form>
  );
}

const Form = styled.form`
  background-color: var(--surface);
  bottom: 56px;
  position: fixed;
  width: calc(100vw - 40px);

  label {
    display: block;
    font-size: 14px;
    margin: 0.5rem 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
  grid-template-rows: 48px;

  input {
    background-color: var(--surface);
    border-radius: 0;
    border-bottom: 2px solid var(--text);
    border-left: 1px solid var(--accent);
    border-right: 1px solid var(--accent);
    border-top: 1px solid var(--accent);
    color: var(--text);
    font-size: 16px;
    padding: 0 16px;

    &::placeholder {
      font-size: 14px;
    }

    &:hover {
      border: 1.5px solid var(--primary);
      cursor: text;
    }

    &:focus {
      border: 2px solid var(--primary);
    }
  }
`;
