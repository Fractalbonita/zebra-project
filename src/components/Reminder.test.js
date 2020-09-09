import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Reminder from './Reminder';

describe('Reminder', () => {
  test('renders component', () => {
    const reminder = 'Foo bar buzz';
    const { container, getByText } = render(<Reminder name={{ reminder }} />);
    expect(getByText(reminder)).toBeInTheDocument();
    expect(container.querySelector('p').textContent).toBe(reminder);
  });

  test('calls checkbox on click', () => {
    const onChange = jest.fn();
    const reminder = 'Foo bar buzz';
    const { container } = render(
      <Reminder name={{ reminder }} onChange={onChange} />
    );
    const checkbox = container.querySelector('input');
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
