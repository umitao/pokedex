import React from "react";

function Logo(props) {
  const greeting = "Welcome to ";
  return (
    <header>
      <h1>{greeting + props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png"
        alt=""
      />
    </header>
  );
}

export default Logo;
