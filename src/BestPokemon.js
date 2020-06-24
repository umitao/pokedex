import React, { useState, useEffect } from "react";

const BestPokemon = (props) => {
  return (
    <div>
      <p>My favorite Pokemon is {props.pokemon}</p>
      <ul>
        <ul>
          {props.abilities.map((obj, index) => {
            return <li key={index}>{obj.ability.name}</li>;
          })}
        </ul>
      </ul>
    </div>
  );
};

const BestPokemonFetcher = (props) => {
  const [bestPokemon, setBestPokemon] = useState(null);
  const url = `https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`;

  useEffect(() => {
    setBestPokemon(null);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBestPokemon(data);
      })
      .catch((error) => console.error(error));
  }, [url]);
  return !bestPokemon ? (
    "Loading..."
  ) : (
    <BestPokemon abilities={bestPokemon.abilities} pokemon={bestPokemon.name} />
  );
};

function BestPokemonSelector() {
  const [pokemonId, setPokemonId] = useState(null);

  function handleBulbasaurClick() {
    setPokemonId(1);
  }
  function handleCharmanderClick() {
    setPokemonId(4);
  }

  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} /> : null}
    </div>
  );
}

export default BestPokemonSelector;
