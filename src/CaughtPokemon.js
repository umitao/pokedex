import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [totalCaught, settotalCaught] = useState(0);

  const incrementTotal = () => {
    settotalCaught(totalCaught + 1);
  };

  return (
    <>
      <p>
        Caught {totalCaught} Pokemon on {props.time}{" "}
      </p>
      <button onClick={incrementTotal}>Catch Pokemon</button>
    </>
  );
};

export default CaughtPokemon;
