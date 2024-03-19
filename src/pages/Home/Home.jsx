import { useContext, useEffect, useState } from "react";
import "./Home.css";
import RenderPokemon from "../../component/RenderPokemon/RenderPokemon";
import Search from "../../component/Search/Search";
import {
  ButtonState,
  FilteredPokemon,
  UserInput,
} from "../../component/Context/Context";
const Home = () => {
  const [pokemonList, setPokemonList] = useState();
  const { userInput, setUserInput } = useContext(UserInput);
  const { button, setButton } = useContext(ButtonState);
  const { filteredPokemon } = useContext(FilteredPokemon);
  // console.log(userInput);
  console.log(filteredPokemon);
  // ?offset=0&limit=1025
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => setPokemonList(data))
      .catch((err) => console.log("Pokemon List Fetch", err));
  }, []);

  // fitness app marzio. alle fetchen aber nicht alle rendern

  return (
    <>
      <Search />
      <section className="home">
        {button ? (
          <p>gefilterte</p>
        ) : (
          pokemonList?.results.map((item, index) => (
            <div key={index}>
              <RenderPokemon url={item.url} />
            </div>
          ))
        )}
        {}
      </section>
    </>
  );
};

export default Home;
