import { useState } from "react";
import "./App.css";
import { animesData } from "./data/animesData";
import Navbar from "./components/Navbar";
import ListBox from "./components/ListBox";
import SelectedBox from "./components/SelectedBox";

export default function App() {
  const [query, setQuery] = useState("");
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />
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
}
