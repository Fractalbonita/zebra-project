import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import ReminderForm from './ReminderForm';

describe('ReminderForm', () => {
  test('renders component', () => {
    render(<ReminderForm />);
  });

  test('renders input of type text and associated label', () => {
    const { getByLabelText, getByRole } = render(<ReminderForm />);
    expect(getByLabelText('Add reminder')).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  test('renders placeholder "e.g. Foo', () => {
    const { getByPlaceholderText } = render(<ReminderForm />);
    expect(getByPlaceholderText('e.g. Foo')).toBeInTheDocument();
  });

  test('renders disabled button', () => {
    let clicked = false;
    const { getByRole } = render(<ReminderForm />);
    fireEvent.click(getByRole('button'));
    expect(clicked).toBe(false);
  });

  test('submits no data if the input value is zero', async () => {
    const onChange = jest.fn();
    const { getByRole } = render(<ReminderForm addReminder={onChange} />);
    await fireEvent.change(getByRole('textbox'), { target: { value: '' } });
    await fireEvent.click(getByRole('button'));
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  test('submits data if the input value equals one character', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<ReminderForm addReminder={onChange} />);
    fireEvent.change(getByRole('textbox'), { target: { value: 'F' } });
    fireEvent.click(getByRole('button'));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(getByRole('textbox').value).toBe('');
  });
});
