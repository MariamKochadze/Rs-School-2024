import { MainLayout } from '@components/MainLayout/MainLayout';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithRouter } from 'src/testSetup/render-router';

describe('MainLayout', () => {
  it('renders all required components', () => {
    renderWithRouter(<MainLayout />, {
      route: '/',
    });

    const footerText = screen.getByText('RICK & MORTY');
    expect(footerText).toBeInTheDocument();

    const errorButton = screen.getByText('Error');
    expect(errorButton).toBeInTheDocument();
  });
});
