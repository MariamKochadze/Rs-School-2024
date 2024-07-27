import { Pagination } from '@components/Pagination/Pagination';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as ReactRouterDom from 'react-router-dom';
import { renderWithRouter } from 'src/testSetup/render-router';
import { describe, expect, it } from 'vitest';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async importOriginal => {
  const actual = (await importOriginal()) as typeof ReactRouterDom;

  return {
    ...actual,
    MemoryRouter: actual.MemoryRouter,
    Route: actual.Route,
    Routes: actual.Routes,
    useLocation: () => ({ search: '' }),
    useNavigate: () => mockNavigate,
  };
});

describe('Pagination', () => {
  it('disables previous and first buttons on the first page', () => {
    renderWithRouter(<Pagination currentPage={1} totalPages={10} />, {
      route: '/?page=1',
    });

    const firstPageButton = screen.getByRole('button', { name: /First/i });
    const previousPageButton = screen.getByRole('button', { name: /Previous/i });

    expect(firstPageButton).toBeDisabled();
    expect(previousPageButton).toBeDisabled();
  });

  it('disables next and last buttons on the last page', () => {
    renderWithRouter(<Pagination currentPage={10} totalPages={10} />, {
      route: '/?page=10',
    });

    const nextPageButton = screen.getByRole('button', { name: /Next/i });
    const lastPageButton = screen.getByRole('button', { name: /Last/i });

    expect(nextPageButton).toBeDisabled();
    expect(lastPageButton).toBeDisabled();
  });

  it('updates URL query parameter when specific page button is clicked - 1', async () => {
    renderWithRouter(<Pagination currentPage={1} totalPages={10} />, {
      route: '/?page=1',
    });

    const nextPageButton = await screen.findByRole('button', { name: /Next/i });

    const user = userEvent.setup();

    await user.click(nextPageButton);

    expect(mockNavigate).toHaveBeenCalledWith('/?page=2');
  });

  it('updates URL query parameter when specific page button is clicked - 2', async () => {
    renderWithRouter(<Pagination currentPage={1} totalPages={10} />, {
      route: '/?page=1',
    });

    const pageButton = screen.getByText('3');
    const user = userEvent.setup();
    await user.click(pageButton);

    expect(mockNavigate).toHaveBeenCalledWith('/?page=3');
  });
});
