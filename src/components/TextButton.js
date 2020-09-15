import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

FormIconButton.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default function FormIconButton({
  disabled,
  isPressed,
  name,
  onClick,
  title,
  type,
}) {
  return (
    <Button
      disabled={disabled}
      type={type}
      name={name}
      onClick={onClick}
      aria-pressed={isPressed}
    >
      {title}
    </Button>
  );
}

const Button = styled.button`
  align-items: center;
  background-color: ${(props) => props.background || 'var(--surface)'};
  border: ${(props) => props.border || 'none'};
  color: ${(props) => props.color || 'var(--text)'};
  cursor: pointer;
  display: flex;
  height: 36px;
  justify-content: center;
  padding: 0 8px;
  outline: none;

  &:disabled {
    color: ${(props) => props.color || 'var(--text)'};
    cursor: not-allowed;

    &:hover {
      color: ${(props) => props.color || 'var(--text)'};
    }
  }

  &:hover {
    color: ${(props) => props.color || 'var(--primary)'};
  }

  &:focus {
    background-color: ${(props) => props.background || 'var(--primary)'};
    color: ${(props) => props.color || 'var(--surface)'};
  }

  &:active {
    animation: gradient 0.2s;
    background-color: ${(props) => props.background || 'lightgrey'};
    color: ${(props) => props.color || 'var(--surface)'};
  }

  &[aria-pressed='true'] {
    background-color: ${(props) => props.background || 'var(--surface)'};
    color: ${(props) => props.color || 'var(--primary)'};
    font-size: 16px;
  }
`;
