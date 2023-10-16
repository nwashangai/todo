import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const pageTitle = screen.getByText(/To-Do List/i);
  const addElement = screen.getByText(/Add/i);
  expect(pageTitle).toBeInTheDocument();
  expect(addElement).toBeInTheDocument();
});
