import { useContext } from "react";
import "./Home.css";
import { PokeData } from "../../component/Context/Context";
const Home = () => {
  const { pokemon, setPokemon } = useContext(PokeData);

  console.log(pokemon);
  return (
    <section className="home">
      <h2>{pokemon.name}</h2>
    </section>
  );
};

export default Home;
