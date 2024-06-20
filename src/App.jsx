// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import PokemonCard from './PokemonCard';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => response.json())
      .then(data => setPokemonData(data.results));
  }, []);

  const filteredPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
    <nav>

      <h2>Pokémon</h2>
      <input
        type="text"
        placeholder="Search Pokémon"
        onChange={e => setSearchTerm(e.target.value)}
      />
    </nav>
      <div className="pokemon-container">
        {filteredPokemon.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
