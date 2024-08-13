import { NotFoundPage } from '@pages/notFound/NotFound.page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('MainLayout', () => {
  it('renders all required components', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Page was not found!')).toBeInTheDocument();

    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });
});
