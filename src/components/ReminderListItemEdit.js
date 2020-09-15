import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';
import FormIconButton from './FormIconButton';
import PropTypes from 'prop-types';

ReminderListItemEdit.propTypes = {
  id: PropTypes.string,
  completed: PropTypes.bool,
  onCheck: PropTypes.func,
  onDelete: PropTypes.func,
  onChange: PropTypes.func,
  previousName: PropTypes.string,
};

export default function ReminderListItemEdit({
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
        <FormIconButton
          type="submit"
          title="save"
          name="save"
          icon="save_alt"
        />
      </Form>
      <IconButton
        type="button"
        title="delete"
        name="delete"
        icon="delete"
        onClick={onDelete}
      />
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 16px auto 40px;
  margin: 0.5rem 0;

  input {
    justify-self: center;
    height: 16px;
    margin: 0;
    padding: 4px;
    width: 16px;

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
    border-radius: 0;
    border-bottom: 1.5px solid var(--text);
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
    border-top: 1px solid lightgrey;
    justify-self: center;
    color: var(--text);
    font-size: 16px;
    height: 40px;
    margin: 0;
    padding: 0 8px;
    width: 100%;

    &:hover {
      border: 1.5px solid var(--primary);
      cursor: text;
    }

    &:focus {
      border: 2px solid var(--primary);
    }

    &::placeholder {
      font-size: 14px;
    }
  }
`;
