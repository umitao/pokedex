import React from "react";

const CaughtPokemon = () => {
  const time = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {time} </p>;
};

export default CaughtPokemon;
