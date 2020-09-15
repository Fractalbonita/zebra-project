import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
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
  border-radius: 50%;
  background-color: ${(props) => props.background || 'var(--surface)'};
  border: ${(props) => props.border || 'none'};
  color: ${(props) => props.background || 'var(--text)'};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0;
  outline: none;

  &:disabled {
    color: ${(props) => props.background || 'var(--text)'};
    cursor: not-allowed;

    &:hover {
      color: ${(props) => props.background || 'var(--text)'};
    }
  }

  &:hover {
    color: ${(props) => props.background || 'var(--primary)'};
  }

  &:focus {
    background-color: ${(props) => props.background || 'var(--primary)'};
    color: ${(props) => props.background || 'var(--surface)'};
  }

  &:active {
    animation: gradient 0.2s;
    background-color: ${(props) => props.background || 'lightgrey'};
    color: ${(props) => props.background || 'var(--surface)'};
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
