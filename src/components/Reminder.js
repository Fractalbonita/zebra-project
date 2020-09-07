import React from 'react';
import styled from 'styled-components';

export default function Reminder({ name, value, onChange }) {
  let { reminder } = name;

  return (
    <li>
      <StyledCheckbox
        type="checkbox"
        value={value}
        onChange={onChange}
      ></StyledCheckbox>
      {reminder}
    </li>
  );
}
// setStatus((event) => event.target.checked)

const StyledCheckbox = styled.input`
  margin: 0 15px;
`;
