import "./TypeColor.css";

const TypeColor = () => {
  return (
    <section>
      <h2>TypeColor</h2>
    </section>
  );
};

export default TypeColor;

// das Folgende fügt immer den Wert von "normal" als bg-color hinzu:
// const buttonStyle = {
//   backgroundColor: `var(--${filterData?.results[0].name})`,
// };
// das in ersten button-tag schreiben: style={buttonStyle}

// const setButtonColor = (colorName) => {
//   const buttonStyle = {
//     backgroundColor: `var(--${colorName})`,
//   };
// };

// const buttonStyle = () => {
//   const buttonColor = {
//     backgroundColor: `black`,
//   };
// };

// const setButtonColor = () => {
//   filterData?.results.map((item) => {
//     document.documentElement.style.setProperty(`--${item.name}`);
//   });
// };

// https://spacejelly.dev/posts/how-to-create-css-custom-properties-that-dynamically-update-with-react-javascript#step-1-using-css-custom-properties-to-set-colors
// useEffect(() => {
//   filterData?.results.map((item) => {
//     const color = getComputedStyle(document.documentElement).getPropertyValue(
//       `${item.name}`
//     );
//     console.log(`${item.name}: ${color}`);
//   });
// }, []);

// function setColor(color) {
//   filterData?.results.map((item) => {
//     console.log(`Updating ${item.name} to: ${color}`);
//     document.documentElement.style.setProperty("--plant", color);
//   });
// }

// const colors = ["#b3b3b3", "#e40000"];

// ! render
// <button
// onClick={}
// key={index}
// onLoad={setColor(item.name)}
// className={item.name}
// style={buttonStyle}
// style={backgroundColor: `var(--${item.name})`}

// onLoad={setButtonColor(item.name)}
// onLoad={style={setButtonColor(item.name)}}
// style={setButtonColor(item.name)}
// style={setButtonColor}
// >
