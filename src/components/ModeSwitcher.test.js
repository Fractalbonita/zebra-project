import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import ModeSwitcher from './ModeSwitcher';

describe('ModeSwitcher', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(() => null),
        getItem: jest.fn(() => null),
      },
      writeable: true,
    });
  });

  afterEach(() => {
    const { baseElement } = render('<></>');
    baseElement.className = '';
    cleanup();
  });

  test('renders ModeSwitcher', () => {
    const getItem = spyOn(window.localStorage, 'getItem');
    const setItem = spyOn(window.localStorage, 'setItem');
    const renderedModeSwitcher = render(<ModeSwitcher />);
    expect(renderedModeSwitcher).toBeTruthy();
    expect(getItem).toHaveBeenCalledTimes(1);
    expect(setItem).toHaveBeenCalledWith('theme', 'light');
  });

  test('renders icon of type wb_sunny', () => {
    const { getByText } = render(<ModeSwitcher />);
    expect(getByText('wb_sunny')).toBeInTheDocument();
  });

  test('renders icon of type bedtime', () => {
    const { getByText } = render(<ModeSwitcher />);
    expect(getByText('bedtime')).toBeInTheDocument();
  });

  test('changes the checkbox and calls the localStorage on click ', () => {
    const setItem = spyOn(window.localStorage, 'setItem');
    const { container } = render(<ModeSwitcher />);
    const checkbox = container.querySelector('input');
    expect(setItem).toHaveBeenCalledWith('theme', 'light');
    fireEvent.click(checkbox, { target: { checked: true } });
    expect(checkbox.checked).toEqual(true);
    expect(setItem).toHaveBeenCalledWith('theme', 'dark');
    fireEvent.click(checkbox, { target: { checked: false } });
    expect(checkbox.checked).toEqual(false);
    expect(setItem).toHaveBeenCalledWith('theme', 'light');
  });

  test('adds the specified class to the body when activated', () => {
    const { container, baseElement } = render(<ModeSwitcher />);
    const checkbox = container.querySelector('input');
    const body = baseElement;
    expect(body.classList.contains('switch-color-scheme')).toBe(false);
    fireEvent.click(checkbox, { target: { checked: true } });
    expect(body.classList.contains('switch-color-scheme')).toBe(true);
  });

  test('removes the specified class from the body when deactivated', () => {
    const { container, baseElement } = render(<ModeSwitcher />);
    const checkbox = container.querySelector('input');
    const body = baseElement;
    expect(body.classList.contains('switch-color-scheme')).toBe(false);
    fireEvent.click(checkbox, { target: { checked: true } });
    expect(body.classList.contains('switch-color-scheme')).toBe(true);
    fireEvent.click(checkbox, { target: { checked: false } });
    expect(body.classList.contains('switch-color-scheme')).toBe(false);
  });
});
