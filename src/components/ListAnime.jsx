const ListAnime = ({ children }) => {
  return <ul className="list list-anime">{children}</ul>;
};

export default ListAnime;

export const Anime = ({ animes, handleSelectedAnime }) => {
  return (
    <>
      {animes?.map((anime) => (
        <li key={anime.mal_id} onClick={() => handleSelectedAnime(anime.mal_id)}>
          <img src={anime.image} alt={`${anime.title} cover`} />
          <h3>{anime.title}</h3>
          <div>
            <p>
              <span>{anime.year}</span>
            </p>
          </div>
        </li>
      ))}
    </>
  );
};
