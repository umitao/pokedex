import React from "react";
import Logo from "./Logo";
import BestPokemonFetcher from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const App = () => {
  //const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const time = new Date().toLocaleDateString();
  const logWhenClicked = () => {
    console.log("Clicked!");
  };

  return (
    <div>
      <Logo handleClick={logWhenClicked} appName="Pokedex" />
      <BestPokemonFetcher />
      <CaughtPokemon time={time} />
    </div>
  );
};

export default App;
