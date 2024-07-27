import { NotFound } from '@pages/notFound/notFound';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('MainLayout', () => {
  it('renders all required components', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });
});
