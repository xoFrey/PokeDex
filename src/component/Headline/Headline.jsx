import { Link } from "react-router-dom";
import { useContext } from "react";
import { ButtonState } from "../Context/Context";
import "./Headline.css";
const Headline = () => {
  const { setButton } = useContext(ButtonState);
  return (
    <div className="headline">
      <section className="logo-img">
        <Link to="/">
          <img
            onClick={() => setButton(false)}
            src="/Images/PokemonLogo.png"
            alt=""
          />{" "}
        </Link>
      </section>
    </div>
  );
};

export default Headline;
