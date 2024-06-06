const ListBox = ({ setIsOpen1, handleSelectedAnime, isOpen1, animes }) => {
  return (
    <div className="box">
      <Button setIsOpen1={setIsOpen1} isOpen1={isOpen1} />
      {isOpen1 && (
        <ListAnime handleSelectedAnime={handleSelectedAnime} animes={animes} />
      )}
    </div>
  );
};

export default ListBox;

const Button = ({ setIsOpen1, isOpen1 }) => {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen1((open) => !open)}>
      {isOpen1 ? "–" : "+"}
    </button>
  );
};

const ListAnime = ({ animes, handleSelectedAnime }) => {
  return (
    <ul className="list list-anime">
      {animes?.map((anime) => (
        <Anime anime={anime} handleSelectedAnime={handleSelectedAnime} key={anime.mal_id} />
      ))}
    </ul>
  );
};

const Anime = ({ anime, handleSelectedAnime }) => {
  return (
    <li onClick={() => handleSelectedAnime(anime.mal_id)}>
      <img src={anime.image} alt={`${anime.title} cover`} />
      <h3>{anime.title}</h3>
      <div>
        <p>
          <span>{anime.year}</span>
        </p>
      </div>
    </li>
  );
};
