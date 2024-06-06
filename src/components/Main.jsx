const Main = ({ children }) => {
  return <main className="main"> {children}</main>;
};

export default Main;

export const Box = ({ children }) => {
  return <div className="box">{children}</div>;
};

export const Button = ({ isOpen, setIsOpen }) => {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
      {isOpen ? "–" : "+"}
    </button>
  );
};
