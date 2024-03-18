import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Filter from "./pages/Filter/Filter";
import Details from "./pages/Details/Details";
import Headline from "./component/Headline/Headline";

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
