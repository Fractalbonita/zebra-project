import React from 'react';
import styled from 'styled-components';
import { useSavedMode } from '../hooks/useSavedMode';

export default function () {
  const [mode, switchColorTheme] = useSavedMode();
  return (
    <SliderContainer>
      <label>
        <input
          type="checkbox"
          defaultChecked={mode === 'dark'}
          onClick={({ target }) => switchColorTheme(target)}
        />
        <div className="slider round"></div>
      </label>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  display: flex;
  align-items: center;

  label {
    display: inline-block;
    height: 40px;
    position: relative;
    width: 80px;
  }

  input {
    display: none;
  }

  input:checked + .slider {
    background-color: #404040;
    color: #fff44f;
  }

  input:checked + .slider:before {
    transform: translate(40px);
  }

  .slider {
    background-color: #000000;
    bottom: 0%;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.5s;
  }

  .slider:before {
    background-color: #ffffff;
    bottom: 4px;
    content: '';
    height: 32px;
    left: 4px;
    position: absolute;
    transition: 0.5s;
    width: 32px;
  }

  .slider.round {
    border-radius: 42px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
