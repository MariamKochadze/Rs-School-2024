import React from 'react';
import { Character } from '../../models/models';

// styles
import './Card.css';

interface CardProps {
    character: Character;
}

export default class Card extends React.Component<CardProps> {
    render(): React.ReactNode {
        return (
            <li
                className='card-item'
                key={this.props.character.name}
            >
                <img
                    src={this.props.character.image}
                    alt={this.props.character.name}
                ></img>
                <h2>{this.props.character.name}</h2>
                <p>{`${this.props.character.name} gender is ${this.props.character.gender}, species is ${this.props.character.species} and status is ${this.props.character.status}.`}</p>
            </li>
        );
    }
}
