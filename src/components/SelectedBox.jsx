const SelectedBox = ({ setIsOpen2, isOpen2, selectedAnime }) => {
  return (
    <div className="box">
      <Button setIsOpen2={setIsOpen2} isOpen2={isOpen2}/>
      {isOpen2 && (
        <DetailAnime selectedAnime={selectedAnime}/>
      )}
    </div>
  );
};

export default SelectedBox;

const Button = ({setIsOpen2, isOpen2}) => {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen2((open) => !open)}>
      {isOpen2 ? "–" : "+"}
    </button>
  );
};


const DetailAnime = ({selectedAnime}) => {
    return (
        <div className="details">
          <header>
            <img
              src={selectedAnime.image}
              alt={`${selectedAnime.title} cover`}
            />
            <div className="details-overview">
              <h2>{selectedAnime.title}</h2>
              <p>
                {selectedAnime.year} &bull; {selectedAnime.score}
              </p>
            </div>
          </header>
          <section>
            <p>
              <em>{selectedAnime.synopsis}</em>
            </p>
          </section>
        </div>
    )
}
