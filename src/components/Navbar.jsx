const Navbar = ({query, setQuery, animes}) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar query={query} setQuery={setQuery}  animes={animes}/>
    </nav>
  );
};

export default Navbar;

const Logo = () => {
  return (
    <div className="logo">
      <span role="img">🍥</span>
      <h1>WeeBoo</h1>
      <span role="img">🍥</span>
    </div>
  );
};

const SearchBar = ({query, setQuery, animes}) => {
  return (
    <div className="search-container">
      <input
        className="search"
        type="text"
        placeholder="Search anime..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="search-results">
        Found <strong>{animes.length}</strong> results
      </p>
    </div>
  );
};
