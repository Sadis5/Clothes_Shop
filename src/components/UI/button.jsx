import "./button.css";
const Button = ({ text, func, children }) => {
  return (
    <button
      className="button"
      onClick={func}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        fontSize: "15px",
        cursor: "pointer",
      }}
    >
      {text}
      {children}
    </button>
  );
};
export { Button };
