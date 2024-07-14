import React from 'react';
import { screen, render } from '@testing-library/react';
import List from '../components/list/List';
import { Character } from '../models/models';

const mockCharacters: Character[] = [
    {
        id: 1,
        name: 'Rick Sanchez',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        gender: 'Male',
        species: 'Human',
        status: 'Alive',
    },
    {
        id: 2,
        name: 'Morty Smith',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        gender: 'Male',
        species: 'Human',
        status: 'Alive',
    },
    {
        id: 3,
        name: 'Summer Smith',
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        gender: 'Female',
        species: 'Human',
        status: 'Alive',
    },
];

describe('List component', () => {
    it('Renders the correct number of characters', () => {
        render(<List characters={mockCharacters} />);

        // Verify the number of rendered cards
        const cardItems = screen.getAllByRole('listitem', { name: '' });
        expect(cardItems.length).toBe(mockCharacters.length);
    });

    it('displays "No characters found." message when characters array is empty', () => {
        render(<List characters={[]} />);

        const errorMessage = screen.getByText('No characters found.');
        expect(errorMessage).toBeInTheDocument();
    });
});
