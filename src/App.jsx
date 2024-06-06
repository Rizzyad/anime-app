import { useState } from "react";
import "./App.css";
import { loadFromLocalStorage } from "./function/function";
import { animesData } from "./data/animesData";
import Navbar from "./components/Navbar";
import { Logo, SearchBar, NumResult } from "./components/Navbar";
import Main from "./components/Main";
import { Box, Button } from "./components/Main";
import ListAnime from "./components/ListAnime";
import { Anime } from "./components/ListAnime";
import DetailAnime from "./components/DetailAnime";
import { DetailHeader, DetailSection } from "./components/DetailAnime";

const App = () => {
  const [query, setQuery] = useState("");
  const [animes, setAnimes] = useState(loadFromLocalStorage("animesData"));
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  const handleSelectedAnime = (id) => {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  };

  return (
    <>
      <Navbar>
        <Logo />
        <SearchBar query={query} setQuery={setQuery}>
          <NumResult animes={animes}/>
        </SearchBar>
      </Navbar>
      <Main>
        <Box>
          <ListAnime>
            <Anime animes={animes} handleSelectedAnime={handleSelectedAnime}/>
          </ListAnime>
        </Box >
        <Box>
          <DetailAnime>
            <DetailHeader selectedAnime={selectedAnime}/>
            <DetailSection selectedAnime={selectedAnime}/>
          </DetailAnime>
        </Box>
      </Main>
    </>
  );
};

export default App;
