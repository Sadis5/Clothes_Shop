const ButtonIcon = ({ image, handleClick, styles = {}, text }) => {
  return (
    <button className="button-icon" onClick={handleClick} style={styles}>
      {text}
      <img
        src={image}
        alt=""
        className="basket"
        style={Object.assign(
          {
            height: "100%",
            width: "100%",
          },
          styles
        )}
      />
    </button>
  );
};
export { ButtonIcon };

const ButtonPlus = ({ image, handleClick }, props) => {
  return (
    <button
      onClick={handleClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        right: props.right ? props.right : "",
        top: props.top || "5px",
        position: "" || props.position,
      }}
    >
      <img src={image} alt="" className="button_plus" style={{}} />
    </button>
  );
};
export { ButtonPlus };

const ButtonMinus = ({ image, handleClick }, props) => {
  return (
    <button
      onClick={handleClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        right: props.right ? props.right : "",
        top: props.top || "5px",
        position: "" || props.position,
      }}
    >
      <img src={image} alt="" className="button_minus" style={{}} />
    </button>
  );
};
export { ButtonMinus };
