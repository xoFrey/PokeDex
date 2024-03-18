import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Filter from "./pages/Filter/Filter";
import Details from "./pages/Details/Details";
import Headline from "./component/Headline/Headline";
import { useState } from "react";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import {
  LoadingContent,
  PokeData,
  GlobalSearch,
} from "./component/Context/Context";

function App() {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [userSearch, setUserSearch] = useState("");

  return (
    <>
      <GlobalSearch.Provider value={{ userSearch, setUserSearch }}>
        <PokeData.Provider value={{ pokemon, setPokemon }}>
          <LoadingContent.Provider value={{ loading, setLoading }}>
            {loading ? (
              <BrowserRouter>
                <Headline />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/filter" element={<Filter />} />
                  <Route path="/details" element={<Details />} />
                </Routes>
              </BrowserRouter>
            ) : (
              <LoadingPage />
            )}
          </LoadingContent.Provider>
        </PokeData.Provider>
      </GlobalSearch.Provider>
    </>
  );
}

export default App;
