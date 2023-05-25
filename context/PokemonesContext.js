
import React, { createContext, useState } from 'react'

export const PokemonesContext = createContext();

const PokemonesProvider = (props) => {
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        async function obtenerPokemones() {

            const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
            const data = await response.json();

            setPokemones(data.results);
            console.log(data)


        }

        obtenerPokemones();
    }, [])

    return (
        <PokemonesContext.Provider
            value={{ pokemones, setPokemones }}
        >
            {props.children}
        </PokemonesContext.Provider>
    )
}

export default PokemonesProvider;