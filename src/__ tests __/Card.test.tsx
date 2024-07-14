import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../components/card/Card';
import { Character } from '../models/models';

const mockCharacter: Character = {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    gender: 'Male',
    species: 'Human',
    status: 'Alive',
};

describe('Card component', () => {
    it('renders the correct character information', () => {
        render(
            <BrowserRouter>
                <Card character={mockCharacter} />
            </BrowserRouter>
        );

        const characterName = screen.getByText('Rick Sanchez');
        const characterGender = screen.getByText(`${mockCharacter.name} gender is ${mockCharacter.gender}`);

        expect(characterName).toBeInTheDocument();
        expect(characterGender).toBeInTheDocument();
    });

    it('displays the correct image', () => {
        render(
            <BrowserRouter>
                <Card character={mockCharacter} />
            </BrowserRouter>
        );

        const characterImage = screen.getByAltText('Rick Sanchez');
        expect(characterImage).toBeInTheDocument();
        expect(characterImage.getAttribute('src')).toBe(mockCharacter.image);
    });
});
