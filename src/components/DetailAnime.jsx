const DetailAnime = ({ children }) => {
  return <div className="details">{children}</div>;
};

export default DetailAnime;

export const DetailHeader = ({ selectedAnime }) => {
  return (
    <header>
      <img src={selectedAnime.images.jpg.image_url} alt={`${selectedAnime.title} cover`} />
      <div className="details-overview">
        <h2>{selectedAnime.title}</h2>
        <p>
          {selectedAnime.aired?.prop?.from?.year} &bull; {selectedAnime.score}
        </p>
      </div>
    </header>
  );
};

export const DetailSection = ({ selectedAnime }) => {
  return (
    <section>
      <p>
        <em>{selectedAnime.synopsis}</em>
      </p>
    </section>
  );
};
