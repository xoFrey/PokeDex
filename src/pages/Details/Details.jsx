import "./Details.css";
import { useContext } from "react";
import { PokeData } from "../../component/Context/Context";

const Details = () => {
  const { pokemon, setPokemon } = useContext(PokeData);
  console.log(pokemon.types);

  return (
    <section className="details">
      <div className="details-container">
        <img
          className="details-img"
          src={pokemon.sprites.other.dream_world.front_default}
          alt=""
        />
      </div>
      <div>
        <p className="titel">{pokemon.name}</p>
      </div>
      <div>
        {pokemon.types.map((item, index) => (
          <p key={index} className="btn-werte">
            {item.type.name}
          </p>
        ))}
      </div>
      <div>
        <h3>{}</h3>
      </div>
    </section>
  );
};

export default Details;
