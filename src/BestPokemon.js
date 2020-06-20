import React, { useState, useEffect } from "react";

const BestPokemon = (props) => {
  return (
    <div>
      <p>My favorite Pokemon is {props.pokemon}</p>
    </div>
  );
};

const BestPokemonFetcher = () => {
  const [bestPokemon, setBestPokemon] = useState(null);
  const url = "https://pokeapi.co/api/v2/pokemon/106/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBestPokemon(data.name);
      })
      .catch((error) => console.error(error));
  }, []);
  return !bestPokemon ? null : <BestPokemon pokemon={bestPokemon} />;
};

export default BestPokemonFetcher;
