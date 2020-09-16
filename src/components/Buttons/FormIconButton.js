import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import PropTypes from 'prop-types';

FormIconButton.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  isHidden: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default function FormIconButton({
  disabled,
  icon,
  isHidden,
  name,
  onClick,
  title,
  type,
}) {
  return (
    <Button disabled={disabled} type={type} name={name} onClick={onClick}>
      <Icon aria-hidden={isHidden} icon={icon} />
      <div>{title}</div>
    </Button>
  );
}

const Button = styled.button`
  align-items: center;
  background-color: var(--primary);
  border: none;
  border-radius: 0;
  color: var(--surface);
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0;
  outline: none;

  &:disabled {
    background-color: var(--accent);
    cursor: not-allowed;

    &:hover {
      background-color: var(--accent);
    }
  }

  &:hover {
    background-color: var(--primary);
    color: var(--surface);
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

  span {
    font-size: 24px;
    padding: 0;
  }

  div {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;
