"use client"
import Navbar from '@/components/Navbar'
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import getLocation from '@/scripts/obtenerUbicacion';

const Map = dynamic(() => import('./components/Map'), {
    ssr: false
});

const Mapa = () => {
    const [location, setLocation] = useState([null, null]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGetLocation = async () => {
        setLoading(true);
        try {
            const loc = await getLocation();
            setLocation(loc);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar nav={false} volver="/Locales" />
            <h1 className="mt-6 text-center text-4xl font-bold text-white">Locales</h1>
            <div className='flex w-8/12 items-center mx-auto mt-4'>
                <input className='w-full mx-auto rounded-tl-md rounded-bl-md p-2 outline-none' type='text' placeholder='busca un comercio' />
                <button
                    className='bg-red-50 p-2 rounded-tr-md rounded-br-md'
                    onClick={handleGetLocation}
                >
                    Buscar
                </button>
            </div>
            {loading && <p className="text-center text-white">Cargando ubicación...</p>}
            {error && <p className="text-center text-red-500">Error: {error.message}</p>}
            {location[0] !== null && location[1] !== null && <Map coordenadas={location} />}
        </>
    );
}

export default Mapa;
