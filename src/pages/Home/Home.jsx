import { useContext, useEffect, useState } from "react";
import "./Home.css";
import { PokeData } from "../../component/Context/Context";
import RenderPokemon from "../../component/RenderPokemon/RenderPokemon";
const Home = () => {
  const { pokemon, setPokemon } = useContext(PokeData);
  const [pokemonList, setPokemonList] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1025")
      .then((res) => res.json())
      .then((data) => setPokemonList(data))
      .catch((err) => console.log("Pokemon List Fetch", err));
  }, []);

  return (
    <section className="home">
      {pokemonList?.results.map((item, index) => (
        <div>
          <RenderPokemon url={item.url} />
        </div>
      ))}
    </section>
  );
};

export default Home;
