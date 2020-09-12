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
    <ListItem>
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
        <div>
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
        </div>
      )}
    </ListItem>
  );
}

const ListItem = styled.li`
  div {
    align-items: center;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 30px auto 40px 40px;
    margin: 0.5rem 0;
    word-break: normal;
  }

  input {
    border: 1px solid var(--text);
    height: 20px;
    justify-self: center;
    margin: 0;
    width: 20px;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      border: 2px solid var(--primary);
    }

    &:checked {
      background-color: var(--text);
      color: var(--surface);
    }

    &:checked + p {
      text-decoration: line-through;
      text-decoration-color: var(--text);
    }
  }

  p {
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & #reminder {
    width: 100%;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      border: 2px solid var(--primary);
    }

    &:checked {
      background-color: var(--text);
      color: var(--surface);
    }

    &:checked + p {
      text-decoration: line-through;
      text-decoration-color: var(--text);
    }
  }
`;
