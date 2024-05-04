// App.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('adds 2 + 3 to equal 5', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  
  const input1 = getByPlaceholderText('Enter first number');
  fireEvent.change(input1, { target: { value: '2' } });

  const input2 = getByPlaceholderText('Enter second number');
  fireEvent.change(input2, { target: { value: '3' } });

  const addButton = getByText('Add');
  fireEvent.click(addButton);

  const result = getByText('Result: 5');
  expect(result).toBeInTheDocument();
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
