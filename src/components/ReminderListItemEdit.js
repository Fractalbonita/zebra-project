import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import IconButton from './Buttons/IconButton';
import FormIconButton from './Buttons/FormIconButton';
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
      <label htmlFor="id">Check reminder</label>
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
        <label htmlFor="reminder">Change reminder name</label>
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
          title="Save"
          name="save"
          icon="save_alt"
          isHidden={true}
        />
      </Form>
      <IconButton
        isHidden={true}
        type="button"
        title="Delete"
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

  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  input {
    justify-self: center;
    height: 16px;
    margin: 0;
    outline: none;
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
    border-left: none;
    border-right: none;
    border-top: none;
    color: var(--text);
    font-size: 16px;
    height: 40px;
    justify-self: center;
    margin: 0;
    padding: 0 8px;
    width: 100%;

    &:hover {
      border-bottom: 1.5px solid var(--primary);
      cursor: text;
    }

    &:focus {
      border-bottom: 2px solid var(--primary);
    }

    &::placeholder {
      font-size: 14px;
    }
  }
`;
