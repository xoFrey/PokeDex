import { useEffect, useState } from "react";
import "./Filter.css";
import FilterData from "../../component/FilterData/FilterData";

const Filter = () => {
  // Variable für die gefetchten Types:
  const [typeData, setTypeData] = useState();

  // Variable für den angeklickten Type:
  const [type, setType] = useState("normal");

  // Fetch aller Typen:
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setTypeData(data))
      .catch((err) => console.log("filter data fetch", err));
  }, []);
  // console.log(typeData);
  // console.log(typeData.results[0].name);

  // ! Filter
  // alle Pokemons eines Typs: "https://pokeapi.co/api/v2/type/1/"
  // statt 1 dann value des geklickten buttons mitgeben?
  // dort dann navigieren zu .pokemon --> map --> pokemon.name

  // Funktion, um value des geklickten Buttons zu kriegen:
  const getType = (e) => {
    setType(e.target.value);
  };
  // console.log(type);
  // type als prop weitergeben an FilterData-Komponente und dort
  // fetchen mit type? https://pokeapi.co/api/v2/type/${type}

  return (
    <section className="filter">
      <h2>Type</h2>
      <div>
        {typeData ? (
          typeData.results.map((item, index) => (
            <button
              key={index}
              className={item.name}
              value={item.name}
              onClick={getType}
            >
              {item.name}
            </button>
          ))
        ) : (
          <p>Loading</p>
        )}
        <FilterData type={type} />
      </div>
    </section>
  );
};

export default Filter;
