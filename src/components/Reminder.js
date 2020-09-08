import React from 'react';
import styled from 'styled-components';

export default function Reminder({ name, value, onChange }) {
  let { reminder } = name;

  return (
    <StyledListItem>
      <StyledCheckbox
        type="checkbox"
        value={value}
        onChange={onChange}
      ></StyledCheckbox>
      <p>{reminder}</p>
    </StyledListItem>
  );
}
// setStatus((event) => event.target.checked)

const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 45px auto;
  align-items: center;
  margin: 1rem 0;
  word-break: normal;

  p {
    margin: 0;
  }
`;

const StyledCheckbox = styled.input`
  justify-self: center;
  border: 1px solid var(--text);
  border-radius: 50%;
  box-shadow: 0 0 0 0px var(--primary);
  margin: 0;
  outline: none;
  transition: box-shadow 0.2s;
  height: 20px;
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
`;
