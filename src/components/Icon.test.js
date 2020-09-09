import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Icon from './Icon';

describe('Icon', () => {
  test('renders a material icon', () => {
    const { container } = render(<Icon icon="bedtime" />);
    expect(container.innerHTML).toBe(
      '<span class="material-icons">bedtime</span>'
    );
  });

  test('renders an icon of a given icon type', () => {
    const { queryByText } = render(<Icon icon="bedtime" />);
    expect(queryByText('bedtime')).toBeTruthy();
    expect(queryByText('code')).toBeFalsy();
  });

  test('renders props, e.g. calls the onClick callback handler', () => {
    const clickHandler = jest.fn();
    const { getByText } = render(
      <Icon icon="bedtime" onClick={clickHandler} />
    );
    fireEvent.click(getByText('bedtime'));
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
