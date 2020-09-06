import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Icon from './Icon';

describe('Icon', () => {
  test('renders a material icon', () => {
    const { container } = render(<Icon type="bedtime" />);
    expect(container.innerHTML).toBe(
      '<span class="material-icons">bedtime</span>'
    );
  });

  test('renders an icon of a given type', () => {
    const { queryByText } = render(<Icon type="bedtime" />);
    expect(queryByText('bedtime')).toBeTruthy();
    expect(queryByText('code')).toBeFalsy();
  });

  test('renders props, e.g. calls the onClick callback handler', async () => {
    const clickHandler = jest.fn();
    const { getByText } = render(
      <Icon type="bedtime" onClick={clickHandler} />
    );
    await fireEvent.click(getByText('bedtime'));
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
