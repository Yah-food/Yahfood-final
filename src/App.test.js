import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders learn react link', async () => {
  render(<App />);
  const linkElement = await screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
