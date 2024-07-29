import { Details } from '@components/Details/Details';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from 'src/testSetup/render-router';

const closeDetailsMock = vi.fn();

vi.mock('@hooks/useHandleDetails', () => ({
  useHandleDetails: () => ({
    closeDetails: closeDetailsMock,
    openDetails: vi.fn(),
  }),
}));

describe('Details Component', () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });

  it('displays a loading indicator while fetching data', async () => {
    renderWithRouter(<Details />, {
      route: '/?details=2',
    });

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('Make sure the detailed card component correctly displays the detailed card data;', async () => {
    renderWithRouter(<Details />, {
      route: '/?details=2',
    });

    const characterName = await screen.findByText('Morty Smith');
    expect(characterName).toBeInTheDocument();

    const birthYear = await screen.findByText('Male');
    expect(birthYear).toBeInTheDocument();

    const status = await screen.findByText('Alive');
    expect(status).toBeInTheDocument();

    const gender = await screen.findByText('Gender');
    expect(gender).toBeInTheDocument();
  });

  it('Ensure that clicking the close button hides the component.', async () => {
    renderWithRouter(<Details />, {
      route: '/?details=2',
    });

    const user = userEvent.setup();

    const characterName = await screen.findByText('Morty Smith');
    expect(characterName).toBeInTheDocument();

    const closeButton = await screen.findByLabelText('Close details');
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);

    expect(closeDetailsMock).toHaveBeenCalled();
  });
});
