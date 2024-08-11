import { CharacterItem } from '@components/CharacterItem/CharacterItem';
import { Details } from '@components/Details/Details';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockedCharacterWithFavorite } from '@testSetup/msw/mocks';
import { renderWithProviders } from '@testSetup/render-router';

describe('CharacterItem rendering', () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Ensure that the card component renders the relevant card data', () => {
    renderWithProviders(<CharacterItem character={mockedCharacterWithFavorite} isDetailsOpen={false} />);

    const characterName = screen.getByText('Luke Skywalker Mocked');
    expect(characterName).toBeInTheDocument();

    const birthYear = screen.getByText('19BBY');
    expect(birthYear).toBeInTheDocument();
  });

  it('Validate that clicking on a card opens a detailed card component;', async () => {
    renderWithProviders(
      <>
        <CharacterItem character={mockedCharacterWithFavorite} isDetailsOpen={false} />
        {await (async () => {
          const jsx = await Details({ id: '1' });
          return jsx;
        })()}
      </>
    );

    const characterItem = await screen.findByTestId('item');
    expect(characterItem).toBeInTheDocument();

    const user = userEvent.setup();

    await user.click(characterItem);

    const characterName = await screen.findByText('Luke Skywalker Details');
    expect(characterName).toBeInTheDocument();
  });
});
