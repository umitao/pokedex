import React, { useState, useEffect } from "react";

const BestPokemon = (props) => {
  return (
    <div>
      <p>My favorite Pokemon is Hitmonlee</p>
      <ul>
        <li>{props.pokemon}</li>
      </ul>
    </div>
  );
};

const BestPokemonFetcher = () => {
  const [bestPokemon, setBestPokemon] = useState(null);
  const url = "https://pokeapi.co/api/v2/pokemon/116/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBestPokemon(data.name);
      })
      .catch((error) => console.error(error));
  }, []);
  if (!bestPokemon) {
    return null;
  } else {
    return <BestPokemon pokemon={bestPokemon} />;
  }
};

export default BestPokemonFetcher;
