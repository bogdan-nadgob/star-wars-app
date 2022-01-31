import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Person } from '../../types/Person';
import { PersonListItem } from './PersonListItem';

export const PersonsList: React.FC = () => {
    const [characters, setCharacter] = useState<Person[]>([]);

    useEffect(() => {
        getList();
    }, []);

    const getList = async () => {
        const peoplesResponse = await axios.get('https://swapi.dev/api/people/?page=1');
        setCharacter(peoplesResponse.data.results)
    };

    return (
        <ul>
            {
                characters.map((character, index) => (
                    <PersonListItem key={character.created} character={character} characterIndex={index + 1}/>
                ))
            }
        </ul>
    )
};
