import React from 'react';
import { Character } from '../../models/models';
import './CharacterDetails.css';

interface CharacterDetailsProps {
    character: Character;
    onClose: () => void;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character, onClose }) => {
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <button
                    className='close-button'
                    onClick={onClose}
                >
                    Close
                </button>
                <h2>{character.name}</h2>
                <img
                    className='character-image'
                    src={character.image}
                    alt={character.name}
                />
                <p>{`${character.name} gender is ${character.gender}`}</p>
                <p>{`Species: ${character.species}, Status: ${character.status}`}</p>
            </div>
        </div>
    );
};

export default CharacterDetails;
