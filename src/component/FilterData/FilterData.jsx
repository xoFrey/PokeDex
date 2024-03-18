import { useEffect, useState } from "react";

const FilterData = (props) => {
  console.log(props.type);

  // Variable für gefetchte Daten des jeweiligen types:
  const [typeDetails, setTypeDetails] = useState();

  // type weitergeben an FilterData-Komponente und dort
  // fetchen mit type? https://pokeapi.co/api/v2/type/${type}
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${props.type}`)
      .then((res) => res.json())
      .then((data) => setTypeDetails(data))
      .catch((err) => console.log("fehler beim type details fetch", err));
  }, []);
  console.log(typeDetails);
  return <section>FilterData</section>;
};

export default FilterData;
