import React from 'react';
import Card from '../card/Card';
import { Character } from '../../models/models';

// styles
import './List.css';

interface ListProps {
    characters: Character[];
}

class List extends React.Component<ListProps> {
    render(): React.ReactNode {
        const { characters } = this.props;

        if (!characters || characters.length === 0) {
            return <div>No characters found.</div>;
        }
        return (
            <ul className='card-list'>
                {this.props.characters.map((character) => {
                    return (
                        <Card
                            key={character.id}
                            character={character}
                        />
                    );
                })}
            </ul>
        );
    }
}

export default List;
