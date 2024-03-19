import { useContext, useEffect, useState } from "react";
import "./Home.css";
import RenderPokemon from "../../component/RenderPokemon/RenderPokemon";
import Search from "../../component/Search/Search";
import {
  ButtonState,
  PokeFilter,
  UserInput,
} from "../../component/Context/Context";
const Home = () => {
  const [pokemonList, setPokemonList] = useState();
  const { userInput, setUserInput } = useContext(UserInput);
  const { pokeFilter, setPokeFilter } = useContext(PokeFilter);
  const { button, setButton } = useContext(ButtonState);

  // ?offset=0&limit=1025
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => setPokemonList(data))
      .catch((err) => console.log("Pokemon List Fetch", err));
  }, []);

  // fitness app marzio. alle fetchen aber nicht alle rendern

  console.log(button);

  return (
    <>
      <Search pokeList={pokemonList} />
      <section className="home">
        {button
          ? pokeFilter.map((item) => <RenderPokemon url={item} />)
          : userInput.length > 0
          ? pokeFilter.map((item) => <RenderPokemon url={item.url} />)
          : pokemonList?.results.map((item, index) => (
              <div key={index}>
                <RenderPokemon url={item.url} />
              </div>
            ))}
        {}
      </section>
    </>
  );
};

export default Home;
