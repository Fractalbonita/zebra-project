import React from 'react';
import styled from 'styled-components';

export default function () {
  return (
    <SliderContainer>
      <label>
        <input
          type="checkbox"
          onClick={({ target }) => switchColorTheme(target)}
          checked={loadSavedMode()}
        />
        <div className="slider round"></div>
      </label>
    </SliderContainer>
  );
}

function switchColorTheme(input) {
  if (document.body.classList.toggle('switch-color-scheme')) {
    input.checked = true;
    localStorage.setItem('mode', 'dark');
  } else {
    input.checked = false;
    localStorage.setItem('mode', 'light');
  }
}

function loadSavedMode() {
  const savedMode = localStorage.getItem('mode');

  if (savedMode === 'dark') {
    document.body.classList.add('switch-color-scheme');
  }
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
    background-color: #003366;
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
