import Burgermenu from "../Svg/Burgermenu";
import Darkmode from "../Svg/Darkmode";
import "./Search.css";
import { useContext } from "react";
import { UserInput } from "../../component/Context/Context";
const Search = () => {
  const { userInput, setUserInput } = useContext(UserInput);

  return (
    <section className="search">
      <Burgermenu />
      <input
        type="text"
        name="userInput"
        id="userInput"
        placeholder="Search Pokemon"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      <Darkmode />
    </section>
  );
};

export default Search;
