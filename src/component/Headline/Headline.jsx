import Back from "../Svg/Back";
import "./Headline.css";
const Headline = () => {
  return (
    <>
      <div className="headline">
        <Back />

        <section className="logo-img">
          <img src="/Images/PokemonLogo.png" alt="" />
        </section>
      </div>
    </>
  );
};

export default Headline;
