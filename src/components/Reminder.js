import React from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function ({ name, id, completed, onChange, onClick }) {
  return (
    <ListItem>
      <input
        id={id}
        type="checkbox"
        defaultChecked={completed}
        onChange={onChange}
      />
      <p>{name}</p>
      <Button type="button" name="delete" icon="delete" onClick={onClick} />
    </ListItem>
  );
}

const ListItem = styled.li`
  align-items: center;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 30px auto 45px;
  margin: 0.5rem 0;
  word-break: normal;

  input {
    border: 1px solid var(--text);
    border-radius: 50%;
    box-shadow: 0 0 0 0px var(--primary);
    height: 20px;
    justify-self: center;
    margin: 0;
    outline: none;
    transition: box-shadow 0.2s;
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
`;
