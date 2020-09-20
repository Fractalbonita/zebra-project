import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../Icon';
import PropTypes from 'prop-types';

IconTextButton.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  isHidden: PropTypes.bool,
  dropdown: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default function IconTextButton({
  disabled,
  icon,
  isHidden,
  dropdown,
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
      dropdown={dropdown}
    >
      <Icon aria-hidden={isHidden} icon={icon} />
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
  justify-content: flex-start;
  padding: 0 16px 0 12px;
  outline: none;
  text-align: left;
  width: ${(props) => props.dropdownWidth || ''};

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

  span {
    font-size: 18px;
    padding-right: 8px;
  }

  ${(props) =>
    props.dropdown &&
    css`
      background-color: var(--on-surface);
      width: 100%;
    `}
`;
