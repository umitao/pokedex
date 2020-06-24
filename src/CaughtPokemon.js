import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const catchPokemon = () => {
    if (pokemonNameInput) {
      caughtPokemon.push(pokemonNameInput);
      setCaughtPokemon(caughtPokemon);
      setPokemonNameInput(() => "");
      console.log(pokemonNameInput);
    } else {
      return null;
    }
  };

  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };

  return (
    <>
      <p>
        Caught {caughtPokemon.length} Pokemon on {props.time}{" "}
      </p>
      <ul>
        {caughtPokemon.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
      <input
        type="text"
        name="pokemon"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </>
  );
};

export default CaughtPokemon;
// const newCaughtPokemon = [...caughtPokemon, pokemonNameInput];
