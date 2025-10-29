import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header with a connexion link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /Connexion/i });
  expect(linkElement).toBeInTheDocument();
});
