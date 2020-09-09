import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReminderList from './ReminderList';

describe('ReminderList', () => {
  test('renders counter of length 1', () => {
    const length = '1';
    const onChange = jest.fn();
    const reminders = [
      { reminder: 'Foo' + Math.random(), id: '1234', completed: false },
    ];
    const { container, getByText } = render(
      <ReminderList reminders={reminders} onChange={onChange} />
    );
    expect(container.querySelector('span').textContent).toBe(
      `${reminders.length}`
    );
    expect(container.querySelector('span').textContent).toBe(length);
    expect(container.querySelector('span').textContent).not.toBe('0');
    expect(getByText('reminder')).toBeInTheDocument();
    expect(getByText('reminder').tagName).toBe('SPAN');
  });

  test('renders counter of length 3', () => {
    const onChange = jest.fn();
    const length = '3';
    const reminders = [
      { reminder: 'Foo' + Math.random(), id: '123', completed: false },
      { reminder: 'Bar' + Math.random(), id: '456', completed: false },
      { reminder: 'Buzz' + Math.random(), id: '789', completed: false },
    ];
    const { container, getByText } = render(
      <ReminderList reminders={reminders} onChange={onChange} />
    );
    expect(container.querySelector('span').textContent).toBe(
      `${reminders.length}`
    );
    expect(container.querySelector('span').textContent).toBe(length);
    expect(container.querySelector('span').textContent).not.toBe('0');
    expect(getByText('reminders')).toBeInTheDocument();
    expect(getByText('reminders').tagName).toBe('SPAN');
  });

  test('renders a list of 3 reminders', () => {
    const onChange = jest.fn();
    const reminders = [
      { reminder: 'Foo' + Math.random(), id: '123', completed: false },
      { reminder: 'Bar' + Math.random(), id: '456', completed: false },
      { reminder: 'Buzz' + Math.random(), id: '789', completed: false },
    ];
    const { getByText } = render(
      <ReminderList reminders={reminders} onChange={onChange} />
    );
    reminders.forEach((item) => {
      expect(getByText(item.reminder)).toBeInTheDocument();
      expect(getByText(item.reminder).tagName).toBe('P');
    });
  });

  test('calls checkbox on click', () => {
    const onChange = jest.fn();
    const reminders = [
      { reminder: 'Foo' + Math.random(), id: '123', completed: false },
      { reminder: 'Bar' + Math.random(), id: '456', completed: false },
      { reminder: 'Buzz' + Math.random(), id: '789', completed: false },
    ];
    const { container } = render(
      <ReminderList reminders={reminders} onChange={onChange} />
    );
    container
      .querySelectorAll('input')
      .forEach((checkbox) => fireEvent.click(checkbox));
    expect(onChange).toHaveBeenCalledTimes(3);
  });
});
