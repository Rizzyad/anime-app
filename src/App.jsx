import { useState, useEffect } from "react";
import "./App.css";
import { loadFromLocalStorage } from "./function/function";
import { animesData } from "./data/animesData";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Logo, SearchBar, NumResult } from "./components/Navbar";
import Main from "./components/Main";
import { Box } from "./components/Main";
import ListAnime from "./components/ListAnime";
import { Anime } from "./components/ListAnime";
import DetailAnime from "./components/DetailAnime";
import { DetailHeader, DetailSection } from "./components/DetailAnime";
import { Input, Skeleton } from "antd";
const { Search } = Input;

const App = () => {
  const [query, setQuery] = useState("");
  const [animes, setAnimes] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/top/anime?limit=5");
        setAnimes(response.data.data);
        setSelectedAnime(response.data.data[0]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchAnimes();
  }, []);

  const handleSelectedAnime = (id) => {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  };

  const handleSearch = async (e) => {
    e.preventDefault;
    try {
      const responseSearch = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${query}&limit=5`
      );
      setAnimes(responseSearch.data.data);
      setSelectedAnime(responseSearch.data.data[0]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navbar>
        <Logo />
        <SearchBar
          query={query}
          handleSearch={handleSearch}
          setQuery={setQuery}
          setLoading={setLoading}
        >
          <NumResult animes={animes} />
        </SearchBar>
      </Navbar>
      <Main>
        <Box>
          {loading ? (
            <Skeleton avatar active />
          ) : (
            <ListAnime>
              <Anime
                animes={animes}
                handleSelectedAnime={handleSelectedAnime}
              />
            </ListAnime>
          )}
        </Box>
        <Box>
          {loading ? (
            <Skeleton avatar active />
          ) : (
            <DetailAnime>
              <DetailHeader selectedAnime={selectedAnime} />
              <DetailSection selectedAnime={selectedAnime} />
            </DetailAnime>
          )}
        </Box>
      </Main>
    </>
  );
};

export default App;
