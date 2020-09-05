import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ModeSwitcher from './components/ModeSwitcher';

describe('App', () => {
  it('renders app', () => {
    const renderedApp = render(<App />);
    expect(renderedApp).toBeTruthy();
  });

  it('applies global styles', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.app')).toHaveStyle(
      'box-sizing: border-box',
      'color: inherit',
      'height: 100vh'
    );
  });

  it('renders title', () => {
    const { queryByText } = render(<App />);
    const title = queryByText(/Hello Zebra!/i);
    expect(title).toBeInTheDocument();
  });

  it('renders title as h1', () => {
    const { queryByText } = render(<App />);
    const title = queryByText(/Hello Zebra!/i);
    expect(title.tagName).toBe('H1');
  });

  it('renders the ModeSwitcher component', () => {
    const component = render(<ModeSwitcher />);
    expect(component).toBeTruthy;
  });
});
