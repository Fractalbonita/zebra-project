import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../Icon';
import PropTypes from 'prop-types';

IconButton.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  isHidden: PropTypes.bool,
  isShown: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default function IconButton({
  disabled,
  icon,
  isHidden,
  isShown,
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
      isShown={isShown}
    >
      <Icon aria-hidden={isHidden} icon={icon} />
      <div>{title}</div>
    </Button>
  );
}

const Button = styled.button`
  align-items: center;
  border-radius: 50%;
  background-color: var(--surface);
  border: none;
  color: var(--text);
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0;
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
    ${(props) =>
      props.isShown &&
      css`
        background-color: var(--surface);
        color: var(--text);
      `}
  }

  &:active {
    animation: gradient 0.2s;
    background-color: var(--accent);
    color: var(--surface);
  }

  span {
    font-size: 24px;
    padding: 8px;
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
