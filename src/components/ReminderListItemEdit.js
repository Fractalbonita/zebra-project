import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function ({
  id,
  completed,
  onCheck,
  onDelete,
  onChange,
  previousName,
}) {
  const [newName, setNewName] = useState(previousName);
  const editInputRef = useRef(null);

  useEffect(() => {
    editInputRef.current.focus();
  }, [editInputRef]);

  return (
    <Container>
      <input
        id={id}
        type="checkbox"
        defaultChecked={completed}
        onChange={onCheck}
      />
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          onChange(newName);
        }}
      >
        <input
          id="reminder"
          type="text"
          value={newName}
          min="1"
          onChange={(event) => {
            setNewName(event.target.value);
          }}
          ref={editInputRef}
        />
        <Button type="submit" name="save" icon="save_alt" />
      </Form>
      <Button type="button" name="delete" icon="delete" onClick={onDelete} />
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 30px auto 40px;
  margin: 0.5rem 0;

  input {
    justify-self: center;
    margin: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: auto 40px;

  input {
    background-color: var(--surface);
    border-bottom: 1px solid var(--text);
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
    border-top: 1px solid lightgrey;
    justify-self: center;
    color: var(--text);
    font-size: 16px;
    height: 36px;
    margin: 0;
    padding: 0 10px;
    width: 100%;

    &:hover {
      cursor: text;
    }

    &:focus {
      border: 1px solid var(--primary);
    }

    &::placeholder {
      font-size: 14px;
    }
  }
`;
