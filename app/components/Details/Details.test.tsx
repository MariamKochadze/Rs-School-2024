import Details from '@components/Details/Details';
import { createRemixStub } from '@remix-run/testing';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockedDetails, mockedFilms, mockedPlanet } from '@testSetup/msw/mocks';
import { renderWithProviders } from '@testSetup/render-router';

const RemixStub = createRemixStub([
  {
    path: '/',
    Component: () => <Details films={mockedFilms.results} planet={mockedPlanet} detailsCharacter={mockedDetails} />,
  },
]);

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

  it('Make sure the detailed card component correctly displays the detailed card data;', async () => {
    renderWithProviders(<RemixStub initialEntries={['/']} />);

    const characterName = await screen.findByText('Luke Skywalker Details');
    expect(characterName).toBeInTheDocument();

    const birthYear = await screen.findByText('19BBY');
    expect(birthYear).toBeInTheDocument();

    const weight = await screen.findByText('172');
    expect(weight).toBeInTheDocument();

    const height = await screen.findByText('77');
    expect(height).toBeInTheDocument();

    const planet = await screen.findByText('Tatooine Mocked');
    expect(planet).toBeInTheDocument();
  });

  it('Ensure that clicking the close button hides the component.', async () => {
    renderWithProviders(<RemixStub initialEntries={['/']} />);

    const user = userEvent.setup();

    const characterName = await screen.findByText('Luke Skywalker Details');
    expect(characterName).toBeInTheDocument();

    const closeButton = await screen.findByLabelText('Close details');
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);

    expect(closeDetailsMock).toHaveBeenCalled();
  });
});
