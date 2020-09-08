import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function ({ addReminder }) {
  const [value, setValue] = useState('');

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        addReminder(value);
        setValue('');
      }}
    >
      <label htmlFor="reminder">Add reminder</label>
      <Container>
        <input
          ide="reminder"
          type="text"
          placeholder="e.g. Foo"
          value={value}
          pattern=".+"
          onChange={(event) => setValue(event.target.value)}
        />
        <Button disabled={!value} type="submit" name="add" icon="add"></Button>
      </Container>
    </Form>
  );
}

const Form = styled.form`
  position: fixed;
  bottom: 50px;
  width: calc(100vw - 40px);

  label {
    display: block;
    font-size: 14px;
    margin: 0.5rem 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  input {
    background-color: var(--surface);
    border: none;
    border-bottom: 1px solid var(--text);
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
    border-top: 1px solid lightgrey;
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
  }
`;
