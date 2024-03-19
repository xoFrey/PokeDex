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
  UserInput,
  ButtonState,
  PokeFilter,
} from "./component/Context/Context";

function App() {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [button, setButton] = useState(false);
  const [pokeFilter, setPokeFilter] = useState("");

  return (
    <>
      <PokeFilter.Provider value={{ pokeFilter, setPokeFilter }}>
        <ButtonState.Provider value={{ button, setButton }}>
          <UserInput.Provider value={{ userInput, setUserInput }}>
            <LoadingContent.Provider value={{ loading, setLoading }}>
              {loading ? (
                <BrowserRouter>
                  <Headline />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/filter" element={<Filter />} />
                    <Route path="/details/:id" element={<Details />} />
                  </Routes>
                </BrowserRouter>
              ) : (
                <LoadingPage />
              )}
            </LoadingContent.Provider>
          </UserInput.Provider>
        </ButtonState.Provider>
      </PokeFilter.Provider>
    </>
  );
}

export default App;
