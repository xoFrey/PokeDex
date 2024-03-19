import "./Details.css";
import { useContext } from "react";
import { PokeData } from "../../component/Context/Context";
import { colors } from "../../assets/data/colors";

const Details = () => {
  const { pokemon, setPokemon } = useContext(PokeData);
  console.log(pokemon);

  return (
    <section className="details">
      <div className="details-container">
        <img
          className="details-img"
          src={pokemon.sprites.other.home.front_default}
          alt=""
        />
      </div>
      <div>
        <p className="titel">
          #{pokemon.id} {pokemon.name}
        </p>
      </div>
      <div className="details-type">
        {pokemon.types.map((item, index) => (
          <p
            key={index}
            className="btn-werte"
            style={{ backgroundColor: colors[item.type.name] }}
          >
            {item.type.name}
          </p>
        ))}
      </div>
      <p className="movements">ATTACKS AND MOVEMENTS</p>
      <div className="details-attacks">
        {pokemon.moves.map((item, index) => (
          <p key={index}>{item.move.name}</p>
        ))}
      </div>
    </section>
  );
};

export default Details;
