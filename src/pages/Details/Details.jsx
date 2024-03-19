import "./Details.css";
import { useEffect, useState } from "react";

import { colors } from "../../assets/data/colors";
import Back from "../../component/Svg/Back";
import { useParams } from "react-router-dom";

const Details = () => {
  const [pokemon, setPokemon] = useState();
  const [attacks, setAttacks] = useState(4);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log("Detail Pokemon Fetch", err));
  }, []);

  return (
    <section className="details-page">
      <Back />
      <section className="details">
        <div className="details-container">
          <img
            className="details-img"
            src={pokemon?.sprites.other.home.front_default}
            alt=""
          />
        </div>
        <div>
          <p className="titel">
            #{pokemon?.id} {pokemon?.name}
          </p>
        </div>
        <div className="details-type">
          {pokemon?.types.map((item, index) => (
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
          {pokemon?.moves?.slice(0, attacks).map((item, index) => (
            <p key={index}>{item.move.name}</p>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Details;
