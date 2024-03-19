import { useContext, useEffect, useState } from "react";
import "./Filter.css";
import FilterData from "../../component/FilterData/FilterData";
import { colors } from "../../assets/data/colors";
import RenderPokemon from "../../component/RenderPokemon/RenderPokemon";
import { Link } from "react-router-dom";
import { ButtonState, FilteredPokemon } from "../../component/Context/Context";

const Filter = () => {
  const { filteredPokemon, setFilteredPokemon } = useContext(FilteredPokemon);
  const { button, setButton } = useContext(ButtonState);

  // State für die Daten aller gefetchten Types:
  const [typeData, setTypeData] = useState();

  // State für URL des angeklickten Types - deren Daten werden in einem weiteren State gefetcht und gespeichert:
  const [typeURL, setTypeURL] = useState("");

  // State für die Daten des einzelnen Typs, die mit typeURL gefetcht werden:
  const [type, setType] = useState("");

  // Array für gefetchte Detail-URLs
  const urlArray = [];

  // Fetch aller Types:
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setTypeData(data))
      .catch((err) => console.log("filter data fetch", err));
  }, []);

  // Fetch der Daten des einzelnen, angeklickten types:
  useEffect(() => {
    if (typeURL !== "") {
      fetch(typeURL)
        .then((res) => res.json())
        .then((singleData) => setType(singleData));
    }
  }, [typeURL]);

  useEffect(() => {
    type?.pokemon?.map((item) => urlArray.push(item.pokemon.url));
    setFilteredPokemon(urlArray);
  }, [type]);
  console.log("FilteredPokemon:", filteredPokemon);

  return (
    <section className="filter">
      <h2>Type</h2>
      <div>
        {typeData ? (
          typeData.results.map((item, index) => (
            <Link to="/filter" key={index} onClick={() => setButton(true)}>
              <button
                onClick={() => setTypeURL(item.url)}
                style={{ backgroundColor: colors[item.name] }}
              >
                {item.name}
              </button>
            </Link>
            // # --> Ist "Unknown" ein Type oder ein Fehler? Gibt es unknown Pokemon? Ansonsten "Unknown" schon beim Fetchen aussortieren
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </section>
  );
};

export default Filter;
