import React from 'react';
import styled from 'styled-components';
import { useSavedMode } from '../hooks/useSavedMode';
import Icon from './Icon';

export default function ModeSwitcher () {
  const [theme, switchColorTheme] = useSavedMode();

  return (
    <SliderContainer>
      <Icon icon="wb_sunny" />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={switchColorTheme}
        />
        <div className="slider round"></div>
      </label>
      <Icon icon="bedtime" />
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 24px;
    padding: 0 8px;
  }

  label {
    display: inline-block;
    height: 32px;
    position: relative;
    width: 64px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  input:checked + .slider {
    background-color: #404040;
    color: #fff44f;
  }

  input:checked + .slider:before {
    transform: translate(32px);
  }

  .slider {
    background-color: #000000;
    bottom: 0%;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: background-color 0.5s;
  }

  @media (prefers-color-scheme: dark) {
    .slider {
      transform: scaleX(-1);
      background-color: #404040;
    }
  }

  .slider:before {
    background-color: #ffffff;
    bottom: 4px;
    content: '';
    height: 24px;
    left: 4px;
    position: absolute;
    transition: all 0.5s;
    width: 24px;
  }

  input:focus + .slider:before {
    background-color: var(--primary);
  }

  input:hover + .slider:before {
    background-color: var(--primary);
  }

  .slider.round {
    border-radius: 40px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
