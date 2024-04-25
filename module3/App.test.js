import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const heading = screen.getByText(/My Counter App/i);
  expect(heading).toBeInTheDocument();
});
