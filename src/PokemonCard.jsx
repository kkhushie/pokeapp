// src/PokemonCard.js
import React, { useEffect, useState } from 'react';

function PokemonCard({ pokemon }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    fetch(pokemon.url)
      .then(response => response.json())
      .then(data => setPokemonDetails(data));
  }, [pokemon.url]);

  return (
    <div className="pokemon-card">
      {pokemonDetails && (
        <>
          <img
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
          />
          <h3>{pokemonDetails.name}</h3>
        </>
      )}
    </div>
  );
}

export default PokemonCard;
