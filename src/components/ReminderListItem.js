import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';
import ReminderListItemEdit from './ReminderListItemEdit';
import PropTypes from 'prop-types';

ReminderListItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  completed: PropTypes.bool,
  onCheck: PropTypes.func,
  onDelete: PropTypes.func,
  onChange: PropTypes.func,
  previousName: PropTypes.string,
};

export default function ReminderListItem({
  name,
  id,
  completed,
  onCheck,
  onDelete,
  onChange,
  previousName,
}) {
  const [isEditing, setEditing] = useState(false);

  return (
    <li>
      {isEditing ? (
        <ReminderListItemEdit
          id={id}
          completed={completed}
          onCheck={onCheck}
          onDelete={onDelete}
          onChange={(newName) => {
            setEditing(false);
            onChange(newName);
          }}
          previousName={previousName}
        />
      ) : (
        <ReminderListItemView>
          <label>
            <input
              id={id}
              type="checkbox"
              defaultChecked={completed}
              onChange={onCheck}
            />
            <span>{name}</span>
          </label>
          <IconButton
            isHidden="true"
            type="button"
            title="edit"
            name="edit"
            icon="edit"
            onClick={() => setEditing(true)}
          />
          <IconButton
            isHidden="true"
            type="button"
            title="delete"
            name="delete"
            icon="delete"
            onClick={onDelete}
          />
        </ReminderListItemView>
      )}
    </li>
  );
}

const ReminderListItemView = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 40px 40px;
  margin: 0.5rem 0;
  word-break: normal;

  label {
    display: grid;
    grid-template-columns: 16px auto;
    align-items: center;
    gap: 16px;
  }

  input {
    justify-self: center;
    height: 16px;
    margin: 0;
    padding: 4px;
    width: 16px;

    &:hover {
      cursor: pointer;
    }

    &:checked + span {
      text-decoration: line-through;
      text-decoration-color: var(--text);
    }
  }

  span {
    margin: 0;
  }
`;
