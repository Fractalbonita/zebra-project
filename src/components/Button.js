import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

export default function ({
  background,
  border,
  disabled,
  font,
  fontSize,
  height,
  icon,
  iconSize,
  name,
  onClick,
  radius,
  textTransform,
  title,
  type,
}) {
  return (
    <Button disabled={disabled} type={type} name={name} onClick={onClick}>
      <Icon icon={icon} />
      {title}
    </Button>
  );
}

const Button = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;
  background-color: ${(props) => props.background || 'var(--primary)'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.radius || '0'};
  color: ${(props) => props.background || 'var(--surface)'};
  font-family: ${(props) => props.font || 'Halvetica'};
  font-size: ${(props) => props.fontSize || '16px'};
  height: ${(props) => props.height || '36px'};
  text-transform: ${(props) => props.textTransform || 'none'};
  padding: 0 16px;

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.background || 'var(--text)'};

    &:hover {
      background-color: ${(props) => props.background || 'var(--text)'};
    }
  }

  &:hover {
    background-color: ${(props) => props.background || 'var(--primary)'};
    color: ${(props) => props.background || 'var(--surface)'};
  }

  &:focus {
    background-color: ${(props) => props.background || 'var(--primary)'};
    color: ${(props) => props.background || 'var(--surface)'};
  }

  &:active {
    background-color: ${(props) => props.background || 'lightgrey'};
    color: ${(props) => props.background || 'var(--surface)'};
    animation: gradient 0.2s;
  }

  span {
    font-size: 18px;
    font-weight: bolder;
  }
`;
