import { useContext, useEffect, useState } from "react";
import "./Home.css";
import RenderPokemon from "../../component/RenderPokemon/RenderPokemon";
import Search from "../../component/Search/Search";
import { UserInput } from "../../component/Context/Context";
const Home = () => {
  const [pokemonList, setPokemonList] = useState();
  const { userInput, setUserInput } = useContext(UserInput);
  console.log(userInput);
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
        {userInput.length > 0 ? (
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
