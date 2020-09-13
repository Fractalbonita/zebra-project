import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import ReminderEdit from './ReminderEdit';

export default function ({
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
        <ReminderEdit
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
        <ReminderView>
          <input
            id={id}
            type="checkbox"
            defaultChecked={completed}
            onChange={onCheck}
          />
          <p>{name}</p>
          <Button
            type="button"
            name="edit"
            icon="edit"
            onClick={() => setEditing(true)}
          />
          <Button
            type="button"
            name="delete"
            icon="delete"
            onClick={onDelete}
          />
        </ReminderView>
      )}
    </li>
  );
}

const ReminderView = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 30px auto 40px 40px;
  margin: 0.5rem 0;
  word-break: normal;

  input {
    justify-self: center;
    margin: 0;

    &:hover {
      cursor: pointer;
    }

    &:checked + p {
      text-decoration: line-through;
      text-decoration-color: var(--text);
    }
  }

  p {
    margin: 0;
  }
`;
