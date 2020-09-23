import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormIconButton from '../components/Buttons/FormIconButton';
import IconTextButton from '../components/Buttons/IconTextButton';

ReminderListForm.propTypes = {
  addReminderListTitle: PropTypes.func,
};

export default function ReminderListForm({ addReminderListTitle }) {
  const [value, setValue] = useState('');
  const [isEditing, setEditing] = useState(false);

  return (
    <div>
      <IconTextButton
        type="button"
        icon="add"
        isHidden={true}
        title="New list"
        name="newList"
        onClick={() => setEditing(true)}
      />
      {isEditing && (
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            addReminderListTitle(value);
            setValue('');
          }}
        >
          <label htmlFor="reminderList">What's the title of the list?</label>
          <input
            id="reminderList"
            type="text"
            placeholder="e.g. Remote work"
            value={value}
            min="1"
            onChange={(event) => setValue(event.target.value)}
          />
          <FormIconButton
            type="submit"
            title="Add new list"
            name="addNewList"
            icon="playlist_add_check"
            isHidden={true}
          />
        </Form>
      )}
    </div>
  );
}

const Form = styled.form`
  display: grid;
  grid-template-columns: auto 40px;

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
