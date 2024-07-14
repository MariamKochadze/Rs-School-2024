import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterDetails from '../components/characterDetail/CharacterDetails';

const mockCharacter = {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    gender: 'Male',
    species: 'Human',
    status: 'Alive',
};

describe('CharacterDetails component', () => {
    it('calls onClose callback when close button is clicked', () => {
        const onClose = () => {};
        render(
            <CharacterDetails
                character={mockCharacter}
                onClose={onClose}
            />
        );

        const closeButton = screen.getByText('Close');
        fireEvent.click(closeButton);
    });
});
