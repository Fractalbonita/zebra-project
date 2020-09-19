import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from './Buttons/IconButton';
import ReminderListItemEdit from './ReminderListItemEdit';
import PropTypes from 'prop-types';
import ReminderListItemSchedule from './ReminderListItemSchedule';
import { getLocaleDate } from '../utilities/getLocaleDate';

ReminderListItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  completed: PropTypes.bool,
  onCheck: PropTypes.func,
  onDelete: PropTypes.func,
  onChange: PropTypes.func,
  previousName: PropTypes.string,
  onSchedule: PropTypes.func,
  dueDate: PropTypes.number,
};

export default function ReminderListItem({
  name,
  id,
  completed,
  onCheck,
  onDelete,
  onChange,
  previousName,
  onSchedule,
  dueDate,
}) {
  const [isEditing, setEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
          <input
            id={id}
            type="checkbox"
            defaultChecked={completed}
            onChange={onCheck}
          />
          <div>
            <label htmlFor={id}>{name}</label>
            <time>{getLocaleDate(dueDate)}</time>
          </div>
          {isOpen && (
            <ReminderListItemSchedule
              onSchedule={onSchedule}
              onClose={() => setIsOpen(false)}
            />
          )}
          <IconButton
            isHidden={true}
            type="button"
            title="schedule"
            name="schedule"
            icon="schedule"
            onClick={() => setIsOpen(true)}
          />
          <IconButton
            isHidden={true}
            type="button"
            title="edit"
            name="edit"
            icon="edit"
            onClick={() => setEditing(true)}
          />
          <IconButton
            isHidden={true}
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
  margin: 1rem 0;
  word-break: normal;

  align-items: center;
  display: grid;
  grid-template-columns: 32px 1fr repeat(3, 40px);
  grid-template-rows: 40px;

  input {
    height: 16px;
    justify-self: start;
    margin: 0;
    padding: 4px;
    width: 16px;

    &:hover {
      cursor: pointer;
    }

    &:checked + span {
      color: var(--text);
      text-decoration: line-through;
      text-decoration-color: var(--text);
    }
  }

  time {
    color: var(--accent);
    display: block;
    font-size: 14px;
    margin: 0.2rem 0;
  }
`;
