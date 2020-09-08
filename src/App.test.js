import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ModeSwitcher from './components/ModeSwitcher';
import ReminderList from './components/ReminderList';
import ReminderForm from './components/ReminderForm';

describe('App', () => {
  test('renders app', () => {
    const renderedApp = render(<App />);
    expect(renderedApp).toBeTruthy();
  });

  test('applies global styles', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.app')).toHaveStyle(
      'box-sizing: border-box',
      'color: inherit',
      'height: 100vh'
    );
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

  test('renders the ModeSwitcher component', () => {
    const component = render(
      <App>
        <ModeSwitcher />
      </App>
    );
    expect(component).toBeTruthy;
  });

  test('renders the ReminderList component', () => {
    const component = render(
      <App>
        <ReminderList />
      </App>
    );
    expect(component).toBeTruthy;
  });

  test('renders the ReminderForm component', () => {
    const component = render(
      <App>
        <ReminderForm />
      </App>
    );
    expect(component).toBeTruthy;
  });
});
