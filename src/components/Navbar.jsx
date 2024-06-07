const Navbar = ({children}) => {
  return (
    <nav className="nav-bar">
      {children}
    </nav>
  );
};

export default Navbar;

export const Logo = () => {
  return (
    <div className="logo">
      <span role="img">🍥</span>
      <h1>WeeBoo</h1>
      <span role="img">🍥</span>
    </div>
  );
};

export const SearchBar = ({ query, handleSearch, setQuery,  setLoading,  children }) => {
  return (
    <div className="search-container">
      <input
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch(event.target.value)
            setLoading(true)
          }
        }}
        className="search"
        type="text"
        placeholder="Search anime..."
        value={query || ""}
        onChange={(e) => setQuery(e.target.value)}  
      />
      {children}
    </div>
  );
};

export const NumResult = ({animes}) => {
  return (
    <p className="search-results">
      Found <strong>{animes.length}</strong> results
    </p>
  );
};
