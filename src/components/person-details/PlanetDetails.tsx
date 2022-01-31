import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const PlanetDetails: React.FC<{ planetUrl: string | undefined }> = ({ planetUrl }) => {
    const [details, setDetails] = useState<{ name: string } | null>(null);

    useEffect(() => {
        if (planetUrl) {
            getDetails(planetUrl);
        }
    }, [planetUrl]);

    const getDetails = async (planetUrl: string) => {
        const peoplesResponse = await axios.get(planetUrl);
        setDetails(peoplesResponse.data)
    };

    return (
        <div>Home planet: {details?.name}</div>
    )
};
