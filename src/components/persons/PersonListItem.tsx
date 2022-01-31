import React, { memo } from 'react';
import { Person } from '../../types/Person';
import { useHistory } from 'react-router';

interface CharacterListItemProps {
    character: Person,
    characterIndex: number,
}

const PersonListItemComponent: React.FC<CharacterListItemProps> = ({ character, characterIndex }) => {
    const history = useHistory();

    return (
        <li className="ListItem" onClick={() => history.push(`details/${characterIndex}`)}>
            <div>Name: {character.name}</div>
            <div>Gender: {character.gender}</div>
            <div>Home planet: {character.homeworld}</div>
        </li>
    )
};

export const PersonListItem = memo(PersonListItemComponent);
