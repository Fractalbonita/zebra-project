import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

// TextButton
// OutlinedButton
// ContainedButton
// FloatingActionButton FAB

// enabled, disabled, focused, pressed, hover

export default function Button({
  background,
  border,
  case,
  font,
  fontSize,
  icon,
  iconSize,
  name,
  onClick,
  radius,
  size,
  title,
  type,
}) {
  return (
    <StyledButton type={type} name={name} onClick={onClick}>
      <Icon icon={icon} />
      {title}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: ${(props) => props.background || '#000000'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.radius || '25%'};
  color: ${(props) => props.background || '#ffffff'};
  font-family: ${(props) => props.font || 'Halvetica'};
  font-size: ${(props) => props.fontSize || '14px'};
  text-transform: ${(props) => props.case || 'none'};
  width: ${(props) => props.size || '44px'};
`;
