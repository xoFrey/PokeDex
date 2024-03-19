import { useEffect, useState } from "react";
import "./Filter.css";
import FilterData from "../../component/FilterData/FilterData";
import { colors } from "../../assets/data/colors";

const Filter = () => {
  // State für die Daten aller gefetchten Types:
  const [typeData, setTypeData] = useState();

  // State für URL des angeklickten Types - deren Daten werden in einem weiteren State gefetcht und gespeichert:
  const [typeURL, setTypeURL] = useState("");

  // State für die Daten des einzelnen Typs, die mit typeURL gefetcht werden:
  const [type, setType] = useState("");

  // Fetch aller Types:
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setTypeData(data))
      .catch((err) => console.log("filter data fetch", err));
  }, []);
  // console.log(typeData);
  // console.log(typeData.results[0].name);

  // Fetch der Daten des einzelnen, angeklickten types:
  useEffect(() => {
    if (typeURL != "") {
      fetch(typeURL)
        .then((res) => res.json())
        .then((singleData) => setType(singleData));
    }
  }, [typeURL]);
  console.log(typeURL);
  console.log(type);

  return (
    <section className="filter">
      <h2>Type</h2>

      <div>
        {typeData ? (
          typeData.results.map((item, index) => (
            <button
              key={index}
              // value={item.name}
              // onClick={getType}
              onClick={() => setTypeURL(item.url)}
              style={{ backgroundColor: colors[item.name] }}
            >
              {item.name}
            </button>
            // # --> Ist "Unknown" ein Type oder ein Fehler? Gibt es unknown Pokemon?
          ))
        ) : (
          <p>Loading</p>
        )}

        <FilterData type={type} />

        {/* //- stattdessen über type mappen und nicht die type-URL weitergeben, sondern die type.pokemon[].pokemon.url weitergeben an FilterData und dort die Details rendern
        //-- oder nicht an FilterData, sondern direkt an RenderPokemon weitergeben und Izels Suche nutzen?? */}
        {/* {type?.pokemon?.map((item, index) => (
        <div>
          <RenderPokemon url={item.url} />
        </div>
      ))} */}
      </div>
    </section>
  );
};

export default Filter;
