import { useState, useEffect } from "react";
import "./RenderPokemon.css";

const RenderPokemon = ({ url }) => {
  const [test, setTest] = useState();

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setTest(data))
      .catch((err) => console.log("Fetch mit Dynamischer URL ", err));
  }, []);

  return (
    <section className="render-pokemon">
      {test ? (
        <div className="poke-card">
          <img
            src={
              test.sprites.other.dream_world.front_default != null
                ? test.sprites.other.dream_world.front_default
                : test.sprites.other.home.front_default
            }
            alt=""
          />
          <div>
            <p>
              #
              {test.id < 10
                ? "00" + test.id
                : test.id < 100 && test.id > 9
                ? "0" + test.id
                : test.id}
            </p>
            <h3>{test.name}</h3>
          </div>
        </div>
      ) : (
        <p>loading....</p>
      )}
    </section>
  );
};

export default RenderPokemon;
