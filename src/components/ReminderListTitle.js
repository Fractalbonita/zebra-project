import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconTextButton from '../components/Buttons/IconTextButton';
import FormIconButton from './Buttons/FormIconButton';

ReminderListTitle.propTypes = {
  addReminderListTitle: PropTypes.func,
  listTitle: PropTypes.string,
};

export default function ReminderListTitle({ addReminderListTitle, listTitle }) {
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
      {isEditing ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addReminderListTitle(value);
            setValue('');
            setEditing(false);
          }}
        >
          <input
            id="reminderList"
            type="text"
            placeholder="title"
            value={value}
            min="1"
            onChange={(event) => setValue(event.target.value)}
          />
          <FormIconButton
            type="submit"
            title="Save"
            name="save"
            icon="save_alt"
            isHidden={true}
          />
        </form>
      ) : (
        <h2>{listTitle}</h2>
      )}
    </div>
  );
}
