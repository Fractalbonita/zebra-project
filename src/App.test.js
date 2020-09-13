import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('./components/ModeSwitcher', () => jest.fn());
jest.mock('./components/ReminderList', () => jest.fn());
jest.mock('./components/ReminderForm', () => jest.fn());

import ModeSwitcher from './components/ModeSwitcher';
import ReminderList from './components/ReminderList';
import ReminderForm from './components/ReminderForm';

ModeSwitcher.mockImplementation(() => <div />);
ReminderList.mockImplementation(() => <div />);
ReminderForm.mockImplementation(() => <div />);

const ActualReminderForm = jest.requireActual('./components/ReminderForm');

describe('App', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(() => null),
        getItem: jest.fn(() => null),
      },
      writeable: true,
    });
  });

  test('renders app', () => {
    const getItem = spyOn(window.localStorage, 'getItem');
    const setItem = spyOn(window.localStorage, 'setItem');
    const key = 'reminders';
    const value = '[]';
    render(<App />);
    expect(setItem).toHaveBeenCalledWith(key, value);
    // expect(getItem).toHaveBeenCalledTimes(1);
  });

  test('contains ModeSwitcher', () => {
    const id = 'id' + Math.random();
    ModeSwitcher.mockImplementation(() => <div data-testid={id} />);
    const { getByTestId } = render(<App />);
    expect(getByTestId(id)).toBeInTheDocument();
  });
  test('contains ReminderList', () => {
    const id = 'id' + Math.random();
    ReminderList.mockImplementation(() => <div data-testid={id} />);
    const { getByTestId } = render(<App />);
    expect(getByTestId(id)).toBeInTheDocument();
  });

  test('contains ReminderForm', () => {
    const id = 'id' + Math.random();
    ReminderForm.mockImplementation(() => <div data-testid={id} />);
    const { getByTestId } = render(<App />);
    expect(getByTestId(id)).toBeInTheDocument();
  });

  test('renders title', () => {
    const { queryByText } = render(<App />);
    const title = queryByText(/Hello Zebra!/i);
    expect(title).toBeInTheDocument();
  });

  test('renders title as h1', () => {
    const { queryByText } = render(<App />);
    const title = queryByText(/Hello Zebra!/i);
    expect(title.tagName).toBe('H1');
  });

  test('applies global styles', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.app')).toHaveStyle(
      'box-sizing: border-box',
      'color: inherit',
      'height: 100vh'
    );
  });

  test.skip('calls localStorage on reminder submit', () => {
    const setItem = spyOn(window.localStorage, 'setItem');
    ReminderForm.mockImplementation(({ ...props }) => (
      <ActualReminderForm {...props} />
    ));
    const { queryByPlaceholderText } = render(<App />);
    const input = queryByPlaceholderText('e.g. Foo');
    fireEvent.change(input, { target: { value: 'Foo' } });
    expect(setItem).toHaveBeenCalledTimes(1);
    expect(setItem).toHaveBeenCalledWith('reminders', 'Foo');
  });
});
