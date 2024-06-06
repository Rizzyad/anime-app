import { useState } from "react";
import "./App.css";
import { loadFromLocalStorage } from "./function/function";
import { animesData } from "./data/animesData";
import Navbar from "./components/Navbar";
import ListBox from "./components/ListBox";
import SelectedBox from "./components/SelectedBox";

const App = () => {
  const [query, setQuery] = useState("");
  const [animes, setAnimes] = useState(loadFromLocalStorage("animesData"));
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const handleSelectedAnime = (id) => {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  };

  return (
    <>
      <Navbar query={query} setQuery={setQuery} animes={animes} />
      <main className="main">
        <ListBox
          isOpen1={isOpen1}
          setIsOpen1={setIsOpen1}
          animes={animes}
          handleSelectedAnime={handleSelectedAnime}
        />
        <SelectedBox
          isOpen2={isOpen2}
          setIsOpen2={setIsOpen2}
          selectedAnime={selectedAnime}
        />
      </main>
    </>
  );
};

export default App;
