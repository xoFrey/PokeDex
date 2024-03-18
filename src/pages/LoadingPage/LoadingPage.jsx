import { useContext, useEffect } from "react";
import "./LoadingPage.css";
import { LoadingContent, PokeData } from "../../component/Context/Context";
const LoadingPage = () => {
  const { setLoading } = useContext(LoadingContent);
  const { pokemon, setPokemon } = useContext(PokeData);
  //   # userInput in fetch details damit dynamisch

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log("Detail Pokemon Fetch", err));
  }, []); // <<< arrayklammern userInput rein danke

  return (
    <section>
      <h2>Loading...</h2>
    </section>
  );
};

export default LoadingPage;
