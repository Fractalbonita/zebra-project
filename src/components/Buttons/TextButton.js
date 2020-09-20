import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

TextButton.propTypes = {
  disabled: PropTypes.bool,
  isPressed: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default function TextButton({
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
  background-color: var(--surface);
  border: none;
  color: var(--text);
  cursor: pointer;
  display: flex;
  font-size: 15px;
  height: 36px;
  justify-content: center;
  padding: 0 8px;
  outline: none;

  &:disabled {
    color: var(--text);
    cursor: not-allowed;

    &:hover {
      color: var(--text);
    }
  }

  &:hover {
    color: var(--primary);
  }

  &:focus {
    background-color: var(--primary);
    color: var(--surface);
  }

  &:active {
    animation: gradient 0.2s;
    background-color: var(--accent);
    color: var(--surface);
  }

  &[aria-pressed='true'] {
    background-color: var(--surface);
    border-bottom: 2px solid var(--primary);
    border-radius: 0;
    color: var(--primary);
    font-size: 18px;
    outline: none;
  }
`;
