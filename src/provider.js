import React, { useState } from 'react';
import Context from './context';

const Provider = ({ children }) => {
    const [logged, setLogged] = useState(false)
    const [selectedStore, setSelectedStore] = useState("")

    return (
        <Context.Provider value={{ logged, setLogged, selectedStore, setSelectedStore }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
