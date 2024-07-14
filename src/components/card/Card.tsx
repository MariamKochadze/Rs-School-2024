import React, { useState } from 'react';
import { Character } from '../../models/models';
import './Card.css';
import LoadingSpinner from '../loader/LoadingSpinner';
import CharacterDetails from '../characterDetail/CharacterDetails';

interface CardProps {
    character: Character;
}

const Card: React.FC<CardProps> = ({ character }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [loading, setLoading] = useState(false);
    const [characterDetails, setCharacterDetails] = useState<Character | null>(null);

    const openDetails = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${character.id}`);
            const data = await response.json();
            setCharacterDetails(data);
            setShowDetails(true);
        } catch (error) {
            console.error('Error fetching character details:', error);
        } finally {
            setLoading(false);
        }
    };

    const closeDetails = () => {
        setShowDetails(false);
    };

    return (
        <li className='card-item'>
            <div
                className='card-content'
                onClick={openDetails}
            >
                <img
                    src={character.image}
                    alt={character.name}
                ></img>
                <h2>{character.name}</h2>
                <p>{`${character.name} gender is ${character.gender}`}</p>
            </div>
            {loading && <LoadingSpinner />}
            {showDetails && characterDetails && (
                <CharacterDetails
                    character={characterDetails}
                    onClose={closeDetails}
                />
            )}
        </li>
    );
};

export default Card;
