export default function Filter({ text, handleClick, isActive = false }) {
  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className={isActive ? "filter_button --active-filter" : "filter_button"}
      style={{
        height: "30px",
        borderRadius: "10px",
        padding: "0 10px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}
