import React from "react";

const BestPokemon = (props) => {
  console.log(props.abilities);
  return (
    <div>
      <p>My favorite Pokemon is Hitmonlee</p>
      <ul>
        {props.abilities.map((ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul>
    </div>
  );
};

export default BestPokemon;
