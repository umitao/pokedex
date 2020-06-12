import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const App = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const time = new Date().toLocaleDateString();
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon time={time} />
    </div>
  );
};

export default App;
