import React, { useState } from 'react';
import styled from 'styled-components';
import IconTextButton from './Buttons/IconTextButton';
import ReminderListItemEdit from './ReminderListItemEdit';
import PropTypes from 'prop-types';
import ReminderListItemSchedule from './ReminderListItemSchedule';
import { getLocaleDate } from '../utilities/getLocaleDate';
import DropDownMenu from './DropDownMenu';

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
            {getLocaleDate(dueDate) && <time>{getLocaleDate(dueDate)}</time>}
          </div>
          {isOpen && (
            <ReminderListItemSchedule
              onSchedule={onSchedule}
              onClose={() => setIsOpen(false)}
            />
          )}
          <DropDownMenu>
            <IconTextButton
              dropdown
              type="button"
              icon="schedule"
              isHidden={true}
              title="Schedule"
              name="schedule"
              onClick={() => setIsOpen(true)}
            />
            <IconTextButton
              dropdown
              type="button"
              icon="edit"
              isHidden={true}
              title="Edit"
              name="edit"
              onClick={() => setEditing(true)}
            />
            <IconTextButton
              dropdown
              type="button"
              icon="delete"
              isHidden={true}
              title="Delete"
              name="delete"
              onClick={onDelete}
            />
          </DropDownMenu>
        </ReminderListItemView>
      )}
    </li>
  );
}

const ReminderListItemView = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 32px 1fr 40px;
  grid-template-rows: 40px;
  margin: 1rem 0;
  word-break: normal;

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
