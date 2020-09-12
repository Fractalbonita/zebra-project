import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function ({
  name,
  id,
  completed,
  onCheck,
  onDelete,
  onChange,
  initialValue,
}) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(initialValue);

  return (
    <ListItem>
      {isEditing ? (
        <div>
          <input
            id={id}
            type="checkbox"
            defaultChecked={completed}
            onChange={onCheck}
          />
          <form
            onSubmit={(event) => {
              console.log('hello');
              event.preventDefault();
              onChange(newName);
              setEditing(false);
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
            />
            <Button type="submit" name="save" icon="save_alt" />
          </form>
          <Button
            type="button"
            name="delete"
            icon="delete"
            onClick={onDelete}
          />
        </div>
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
