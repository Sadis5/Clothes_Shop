import { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../../main";

const useOutsideClick = (initialValue) => {
  const [isActive, setIsActive] = useState(initialValue);
  const ref = useRef(null);
  const handleClick = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      e.target != document.querySelector(".sort_menu")
    ) {
      setIsActive(false);
    } else {
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return { setIsActive, isActive, ref };
};

export default function Sort() {
  const { store } = useContext(Context);

  const { ref, isActive, setIsActive } = useOutsideClick(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className="sort"
      style={{
        position: "relative",
      }}
    >
      <button
        ref={ref}
        onClick={handleClick}
        style={{
          cursor: "pointer",
          background: "none",
          border: "none",
          fontSize: "16px",
        }}
      >
        Sort
      </button>
      {isActive && (
        <div
          className="sort_menu"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "25px",
            backgroundColor: "white",
            padding: "20px",
            border: "1px solid black",
            gap: "15px",
            zIndex: "10",
            width: "200px",
            alignItems: "start",
            left: "-165px",
          }}
        >
          <button
            onClick={() => {
              store.sortFavorite();
            }}
            className="sort_button"
          >
            Избранные
          </button>
          <button
            onClick={() => {
              // store.sortPopular();
            }}
            className="sort_button"
          >
            Популярные
          </button>
          <button
            onClick={() => {
              store.sortMin();
            }}
            className="sort_button"
          >
            Цена от низкой к высокой
          </button>
          <button
            onClick={() => {
              store.sortMax();
            }}
            className="sort_button"
          >
            Цена от высокой к низкой
          </button>
        </div>
      )}
    </div>
  );
}
