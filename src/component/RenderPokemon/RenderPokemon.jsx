import { useState, useEffect, useContext } from "react";
import "./RenderPokemon.css";

const RenderPokemon = ({ url }) => {
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((err) => console.log("Fetch mit Dynamischer URL ", err));
  }, []);

  return (
    <section className="render-pokemon">
      {pokemonData ? (
        <div className="poke-card">
          <img src={pokemonData?.sprites.other.home.front_default} alt="" />
          <div>
            <p>
              #
              {pokemonData?.id < 10
                ? "00" + pokemonData.id
                : pokemonData.id < 100 && pokemonData.id > 9
                ? "0" + pokemonData.id
                : pokemonData.id}
            </p>
            <p>{pokemonData?.name}</p>
          </div>
        </div>
      ) : (
        <p>loading....</p>
      )}
    </section>
  );
};

export default RenderPokemon;
