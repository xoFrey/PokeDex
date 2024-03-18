import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Filter from "./pages/Filter";
import Details from "./pages/Details";
import Headline from "./component/Headline";

function App() {
  return (
    <>
      <BrowserRouter>
        <Headline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
