import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the header with a connexion link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByRole('link', { name: /Connexion/i });
  expect(linkElement).toBeInTheDocument();
});
