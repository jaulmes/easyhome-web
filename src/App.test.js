import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header with a search link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /Recherche/i });
  expect(linkElement).toBeInTheDocument();
});
