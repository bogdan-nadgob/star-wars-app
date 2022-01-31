import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Person } from '../../types/Person';
import { EditCharacterField } from './EditCharacterField';
import { FilmDetails } from './FilmDetails';
import { PlanetDetails } from './PlanetDetails';

export const PersonsDetails: React.FC = () => {
    const [details, setDetails] = useState<Person | null>(null);
    const params = useParams<{ index?: string }>();

    useEffect(() => {
        if (params.index) {
            getDetails(String(params.index))
        }
    }, [params]);

    const getDetails = async (index: string) => {
        const peoplesResponse = await axios.get(`https://swapi.dev/api/people/${index}`);
        setDetails(peoplesResponse.data)
    };

    const handleChangeDetails = (field: string) => {
        return (value: string) => {
            setDetails((details) => {
                if (details) {
                    return {
                        ...details,
                        [field]: value
                    }
                }
                return details
            })
        }
    };

    return (
        <div>
            <h3>Character details</h3>
            <div>
                <div>Name: {details?.name}</div>
                <div>Hair colour: {details?.hair_color}</div>
                <div>Eye colour: {details?.eye_color}</div>
                <div>Height: <EditCharacterField value={String(details?.height)} onChange={handleChangeDetails('height')} /></div>
                <div>Gender: {details?.gender}</div>
                <PlanetDetails planetUrl={details?.homeworld}/>
                <div>Films: {details && (
                    <ul>
                        {details.films.map((filmUrl) => (
                            <li key={filmUrl}><FilmDetails filmUrl={filmUrl}/></li>
                        ))}
                    </ul>
                )}
                </div>
            </div>
        </div>
    )
};
