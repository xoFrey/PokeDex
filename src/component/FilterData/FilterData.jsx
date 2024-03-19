import { useContext, useEffect, useState } from "react";
import { PokeData } from "../Context/Context";

// ! props: type
const FilterData = (props) => {
  // props.type.pokemon[].pokemon.name / .url
  console.log(props.type);
  // console.log(props?.type?.pokemon[0].pokemon.name);
  // console.log(props?.type?.pokemon[0].pokemon.url);
  // --> mappen, um die jeweiligen URL zu bekommen und aus diesen dann die Daten für die Ausgabe der einzelnen Pokemon fetchen?
  // --> state für gemappten und gefetchten Daten?
  // --> Daten direkt in RenderPokemon ausgeben lassen? State überschreiben?

  // Variable für gefetchte Daten des jeweiligen types:
  const [typeDetails, setTypeDetails] = useState();

  return (
    <section>
      {props.type?.pokemon?.map((item, index) => (
        <div key={index}>
          <p>{item.pokemon.url}</p>
          {/* //--> url weitergeben an RenderFilter.jsx, dort damit die Daten fetchen analog zu Izels Output? */}
        </div>
      ))}
    </section>
  );
};

export default FilterData;
