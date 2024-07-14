import React from 'react';
import Card from '../card/Card';
import { Character } from '../../models/models';

import './List.css';

interface ListProps {
    characters: Character[];
}

const List: React.FC<ListProps> = ({ characters }) => {
    if (!characters || characters.length === 0) {
        return <div className='error-popup'>No characters found.</div>;
    }

    return (
        <ul className='card-list'>
            {characters.map((character) => (
                <Card
                    key={character.id}
                    character={character}
                />
            ))}
        </ul>
    );
};

export default List;
