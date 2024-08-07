import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { routesPath } from 'src/routes/routes';
import { NotFoundPage } from 'src/pages/NotFound/NotFoundPage';

describe('NotFoundPage component', () => {
  it('renders the "Page Not Found" text', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    expect(getByText('Page Not Found')).toBeInTheDocument();
  });

  it('renders the link to the game with correct href', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    const linkElement = getByText('Back to the game');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe(routesPath.GAME);
  });
});
