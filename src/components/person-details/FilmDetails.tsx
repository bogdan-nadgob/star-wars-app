import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface FilmDetailsProps {
    filmUrl: string
}

export const FilmDetails: React.FC<FilmDetailsProps> = ({ filmUrl }) => {
    const [details, setDetails] = useState<{ title: string } | null>(null);

    useEffect(() => {
        getDetails(filmUrl);
    }, [filmUrl]);

    const getDetails = async (index: string) => {
        const peoplesResponse = await axios.get(filmUrl);
        setDetails(peoplesResponse.data)
    };

    return (
        <div>
            {details?.title}
        </div>
    )
}
